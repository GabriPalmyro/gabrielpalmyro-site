#!/usr/bin/env node
// Dev-only visual review: serves dist/, opens each page in headless Chrome
// (DevTools protocol over the built-in WebSocket, Node 22+), saves full-page
// screenshots to .review/ and reports horizontal overflow and broken images.
// Usage: node scripts/build.mjs && node scripts/review-shots.mjs [light|dark]
import { spawn } from 'node:child_process';
import { mkdir, writeFile, rm, mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = join(root, '.review');
const scheme = process.argv[2] === 'dark' ? 'dark' : 'light';
const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Static server (same rules as scripts/serve.mjs) on a free port.
const serve = spawn(process.execPath, [join(root, 'scripts/serve.mjs'), '8899'], { stdio: ['ignore', 'pipe', 'inherit'] });
const base = await new Promise((resolve) => serve.stdout.on('data', (d) => {
  const m = String(d).match(/http:\/\/localhost:\d+/); if (m) resolve(m[0]);
}));

const profile = await mkdtemp(join(tmpdir(), 'gp-chrome-'));
const browser = spawn(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
const wsUrl = await new Promise((resolve) => browser.stderr.on('data', (d) => {
  const m = String(d).match(/ws:\/\/[^\s]+/); if (m) resolve(m[0]);
}));

const ws = new WebSocket(wsUrl);
await new Promise((r) => ws.addEventListener('open', r));
let id = 0; const pending = new Map();
ws.addEventListener('message', (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
});
const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
  const n = ++id; pending.set(n, (m) => (m.error ? reject(new Error(`${method}: ${m.error.message}`)) : resolve(m.result)));
  ws.send(JSON.stringify({ id: n, method, params, sessionId }));
});

const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
const s = (m, p) => send(m, p, sessionId);
await s('Page.enable');
await s('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: scheme }, { name: 'prefers-reduced-motion', value: 'reduce' }] });

const shots = [
  ['/', 'en'], ['/pt/', 'pt'], ['/projects/treino-facil', 'en-project'], ['/pt/projects/toaquirs', 'pt-project'],
];
const sizes = [['desktop', 1440, 900, false], ['mobile', 390, 844, true]];
await rm(join(out, 'slices'), { recursive: true, force: true });
await mkdir(out, { recursive: true });

for (const [path, name] of shots) {
  for (const [label, width, height, mobile] of sizes) {
    await s('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile });
    await s('Page.navigate', { url: base + path });
    await sleep(800);
    // Trigger lazy images: step through the page, then back to the top.
    await s('Runtime.evaluate', { awaitPromise: true, expression: `(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      scrollTo(0, 0);
      await Promise.all([...document.images].map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; })));
    })()` });
    await sleep(300);
    const { result } = await s('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const w = document.documentElement.clientWidth;
        const wide = [...document.querySelectorAll('body *')].filter((el) => el.getBoundingClientRect().right > w + 1)
          .slice(0, 5).map((el) => el.tagName.toLowerCase() + '.' + [...el.classList].join('.'));
        const broken = [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src);
        return { h: document.documentElement.scrollHeight, sw: document.documentElement.scrollWidth, w, wide, broken };
      })()`,
    });
    const v = result.value;
    const { data } = await s('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y: 0, width, height: v.h, scale: 1 } });
    const file = join(out, `${name}-${label}${scheme === 'dark' ? '-dark' : ''}.png`);
    await writeFile(file, Buffer.from(data, 'base64'));
    // Optional viewport-sized slices, easier to inspect than one tall image.
    if (process.env.SLICES) {
      await mkdir(join(out, 'slices'), { recursive: true });
      const step = mobile ? height * 1.5 : height;
      for (let y = 0, k = 0; y < v.h; y += step, k++) {
        const part = await s('Page.captureScreenshot', { format: 'jpeg', quality: 70, captureBeyondViewport: true, clip: { x: 0, y, width, height: Math.min(step, v.h - y), scale: 1 } });
        await writeFile(join(out, 'slices', `${name}-${label}-${String(k).padStart(2, '0')}.jpg`), Buffer.from(part.data, 'base64'));
      }
    }
    const flags = [v.sw > v.w ? `OVERFLOW ${v.sw}>${v.w} ${v.wide.join(' ')}` : '', v.broken.length ? `BROKEN ${v.broken.join(' ')}` : ''].filter(Boolean).join(' | ');
    console.log(`${file.replace(root, '')}  ${width}x${v.h}  ${flags || 'ok'}`);
  }
}

ws.close(); serve.kill();
await new Promise((r) => { browser.once('exit', r); browser.kill(); });
await rm(profile, { recursive: true, force: true }).catch(() => {});
