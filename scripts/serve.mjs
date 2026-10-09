#!/usr/bin/env node
// Local preview of dist/ that mimics Vercel with cleanUrls: /projects/x ->
// projects/x.html, /pt/ -> pt/index.html, unknown paths -> 404.html.
// Usage: node scripts/serve.mjs [port]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const wanted = Number(process.argv[2] || 8789);
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain', '.ico': 'image/x-icon',
};
const isFile = async (p) => (await stat(p).catch(() => null))?.isFile();

const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  for (const c of [path, path + '.html', join(path, 'index.html')]) {
    const file = join(dist, c);
    if (file.startsWith(dist) && await isFile(file)) {
      res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' });
      return res.end(await readFile(file));
    }
  }
  res.writeHead(404, { 'content-type': types['.html'] });
  res.end(await readFile(join(dist, '404.html')).catch(() => 'Not found'));
});

// If the port is busy (another preview still running), try the next ones.
const listen = (port, triesLeft = 10) => {
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE' && triesLeft > 0) {
      console.warn(`Port ${port} is in use, trying ${port + 1}...`);
      listen(port + 1, triesLeft - 1);
    } else {
      throw err;
    }
  });
  server.listen(port, () => console.log(`Serving dist/ on http://localhost:${port}`));
};
listen(wanted);
