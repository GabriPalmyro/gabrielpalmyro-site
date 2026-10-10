#!/usr/bin/env node
// Dev-only visual review: serves dist/, opens each page in headless Chrome
// (DevTools protocol over the built-in WebSocket, Node 22+), saves full-page
// screenshots to .review/ and reports horizontal overflow and broken images.
// Usage: node scripts/build.mjs && node scripts/review-shots.mjs [light|dark] [motion]
// `motion` instead captures the desktop home page with motion enabled at a few
// scroll positions (parallax states) into .review/motion-*.png.
import { spawn } from 'node:child_process';
import { mkdir, writeFile, rm, mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = join(root, '.review');
const args = process.argv.slice(2);
const scheme = args.includes('dark') ? 'dark' : 'light';
const motionMode = args.includes('motion');
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
await s('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: scheme }, { name: 'prefers-reduced-motion', value: motionMode ? 'no-preference' : 'reduce' }] });
await mkdir(out, { recursive: true });

if (motionMode) {
  // Parallax states on the desktop home page: scroll, let the scrub settle,
  // capture the viewport. Positions are fractions of the hero height plus the
  // middle of the apps section.
  await s('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  for (const [path, name] of [['/', 'en'], ['/pt', 'pt']]) {
    await s('Page.navigate', { url: base + path });
    await sleep(1500);
    const { result: ok } = await s('Runtime.evaluate', { returnByValue: true, expression: '!!(window.gsap && window.ScrollTrigger)' });
    const stops = [['00-top', '0'], ['01-hero-mid', "document.querySelector('.hero').offsetHeight * 0.35"], ['02-hero-out', "document.querySelector('.hero').offsetHeight * 0.7"], ['03-apps', "document.querySelector('#app-heat-game').getBoundingClientRect().top + scrollY - innerHeight * 0.3"]];
    for (const [label, expr] of stops) {
      await s('Runtime.evaluate', { awaitPromise: true, expression: `(async () => { const y = ${expr}; for (let i = 1; i <= 10; i++) { scrollTo(0, y * i / 10); await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 40))); } await new Promise((r) => setTimeout(r, 900)); })()` });
      const { data } = await s('Page.captureScreenshot', { format: 'png' });
      const file = join(out, `motion-${name}-${label}${scheme === 'dark' ? '-dark' : ''}.png`);
      await writeFile(file, Buffer.from(data, 'base64'));
      const { result } = await s('Runtime.evaluate', { returnByValue: true, expression: `[...document.querySelectorAll('[data-layer]')].slice(0, 5).map((e) => e.dataset.layer + ':' + (getComputedStyle(e).transform.split(',')[5] || 'none').trim().replace(')', '')).join(' ')` });
      console.log(`${file.replace(root, '')}  gsap:${ok.value}  ${result.value}`);
    }
  }
  ws.close(); serve.kill();
  await new Promise((r) => { browser.once('exit', r); browser.kill(); });
  await rm(profile, { recursive: true, force: true }).catch(() => {});
  process.exit(0);
}

const allShots = [
  ['/', 'en'], ['/pt', 'pt'], ['/projects/treino-facil', 'en-project'], ['/pt/projects/toaquirs', 'pt-project'],
];
const shots = process.env.PAGES ? allShots.filter(([, n]) => process.env.PAGES.split(',').includes(n)) : allShots;
// SIZES=1280x800,320x700 overrides the default widths (mobile below 768).
const sizes = process.env.SIZES
  ? process.env.SIZES.split(',').map((v) => { const [w, h] = v.split('x').map(Number); return [`${w}`, w, h, w < 768]; })
  : [['desktop', 1440, 900, false], ['mobile', 390, 844, true]];
if (!process.env.KEEP_SLICES) await rm(join(out, 'slices'), { recursive: true, force: true });
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
      // Lazy images inside display:none never load, so cap the wait.
      await Promise.race([Promise.all([...document.images].map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; }))), new Promise((r) => setTimeout(r, 2500))]);
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
        await writeFile(join(out, 'slices', `${name}-${label}${scheme === 'dark' ? '-dark' : ''}-${String(k).padStart(2, '0')}.jpg`), Buffer.from(part.data, 'base64'));
      }
    }
    const flags = [v.sw > v.w ? `OVERFLOW ${v.sw}>${v.w} ${v.wide.join(' ')}` : '', v.broken.length ? `BROKEN ${v.broken.join(' ')}` : ''].filter(Boolean).join(' | ');
    console.log(`${file.replace(root, '')}  ${width}x${v.h}  ${flags || 'ok'}`);
  }
}

ws.close(); serve.kill();
await new Promise((r) => { browser.once('exit', r); browser.kill(); });
await rm(profile, { recursive: true, force: true }).catch(() => {});
