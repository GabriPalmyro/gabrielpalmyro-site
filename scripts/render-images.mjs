#!/usr/bin/env node
// Renders the OG images (1200x630, EN + PT) and PNG favicons into static/ with
// headless Google Chrome. Dev-only; outputs are committed, so Vercel never runs
// this. Usage: node scripts/build.mjs && node scripts/render-images.mjs
import { createServer } from 'node:http';
import { readFile, mkdir, stat } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { STRINGS } from '../src/i18n.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const css = (await readFile(join(dist, 'index.html'), 'utf8')).match(/href="(\/assets\/css\/[^"]+)"/)[1];

const og = (lang) => {
  const t = STRINGS[lang];
  return `<!doctype html><html class="gp"><head><meta charset="utf-8"><link rel="stylesheet" href="${css}">
<style>body{margin:0;width:1200px;height:630px;overflow:hidden;background:#F6F5F3;color:#111}
.gp{color-scheme:light;--canvas:#F6F5F3;--ink:#111;--gray-1:#5C5853;--gray-2:#6B6761;--on-ink:#fff}</style></head>
<body class="site" style="width:1200px;height:630px;position:relative">
<div style="position:absolute;left:72px;top:64px;bottom:64px;width:640px;display:flex;flex-direction:column;justify-content:space-between">
<span class="wm" style="font-size:24px"><span class="mk" style="width:44px;height:44px;border-radius:12px;font-size:18px">GP</span><span>Gabriel Palmyro</span></span>
<div style="display:flex;flex-direction:column;gap:18px">
<p style="font-size:84px;line-height:.98;font-weight:720;letter-spacing:-.055em">Gabriel Palmyro</p>
<p style="font-size:30px;line-height:1.25;font-weight:600;letter-spacing:-.025em">${t.hero.role}</p>
<p style="font-size:22px;line-height:1.4;color:var(--gray-1);letter-spacing:-.015em;max-width:600px">${t.hero.sub}</p>
</div>
<p class="mono" style="font-size:18px;color:var(--gray-2)">gabrielpalmyro.com</p>
</div>
<img src="/assets/img/gabriel-palmyro.webp" alt="" style="position:absolute;right:72px;top:105px;width:380px;height:420px;object-fit:cover;object-position:50% 20%;border-radius:36px">
</body></html>`;
};

const icon = (size, radius) => `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="${css}"><style>
html,body{margin:0;background:transparent}
div{width:${size}px;height:${size}px;border-radius:${radius}px;background:#111;color:#fff;display:flex;align-items:center;justify-content:center;
font-family:'Geist',Arial,sans-serif;font-weight:720;font-size:${Math.round(size * 0.44)}px;letter-spacing:-.04em}</style></head><body><div>GP</div></body></html>`;

const types = { '.html': 'text/html', '.css': 'text/css', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png' };
const pages = { '/__og-en.html': og('en'), '/__og-pt.html': og('pt'), '/__icon-180.html': icon(180, 0), '/__icon-32.html': icon(32, 8), '/__icon-512.html': icon(512, 112) };
const server = createServer(async (req, res) => {
  const p = new URL(req.url, 'http://x').pathname;
  if (pages[p]) { res.writeHead(200, { 'content-type': 'text/html' }); return res.end(pages[p]); }
  const f = join(dist, p);
  if ((await stat(f).catch(() => null))?.isFile()) { res.writeHead(200, { 'content-type': types[extname(f)] || 'application/octet-stream' }); return res.end(await readFile(f)); }
  res.writeHead(404); res.end();
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;

// Async on purpose: a sync spawn would block this process's server and deadlock Chrome.
const shot = (path, out, w, h, transparent = false) => promisify(execFile)(chrome, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-prefers-reduced-motion', '--blink-settings=preferredColorScheme=1',
  ...(transparent ? ['--default-background-color=00000000'] : []),
  `--window-size=${w},${h}`, `--screenshot=${out}`, '--virtual-time-budget=4000', base + path,
], { timeout: 60000 });

await mkdir(join(root, 'static/og'), { recursive: true });
await shot('/__og-en.html', join(root, 'static/og/og-en.png'), 1200, 630);
await shot('/__og-pt.html', join(root, 'static/og/og-pt.png'), 1200, 630);
await shot('/__icon-180.html', join(root, 'static/apple-touch-icon.png'), 180, 180, true);
await shot('/__icon-32.html', join(root, 'static/favicon-32.png'), 32, 32, true);
await shot('/__icon-512.html', join(root, 'static/icon-512.png'), 512, 512, true);
server.close();
console.log('Rendered static/og/og-{en,pt}.png, favicon-32.png, apple-touch-icon.png, icon-512.png');
