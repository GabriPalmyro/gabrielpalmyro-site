#!/usr/bin/env node
// Zero-dependency static build: static/ is copied as-is, pages are rendered
// from src/pages into dist/, CSS and JS are bundled with a content hash.
// Usage: node scripts/build.mjs   (Vercel: buildCommand, outputDirectory dist)
import { mkdirSync, rmSync, readFileSync, writeFileSync, cpSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import cfg from '../site.config.mjs';
import { homePage } from '../src/pages/home.mjs';
import { projectPage } from '../src/pages/project.mjs';
import { notFound } from '../src/pages/not-found.mjs';
import { PROJECTS } from '../src/content/projects.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const hash = (s) => createHash('sha256').update(s).digest('hex').slice(0, 10);

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(root, 'static'), dist, { recursive: true });
// Sources below are bundled, so drop the unhashed copies.
rmSync(join(dist, 'assets/css'), { recursive: true, force: true });
rmSync(join(dist, 'assets/js'), { recursive: true, force: true });

// CSS order: tokens (shared design language with Forgetless) -> site layout -> motion.
const minCss = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '\n').replace(/\n+/g, '\n').trim();
const css = minCss(['tokens.css', 'site.css', 'fx.css'].map((f) => readFileSync(join(root, 'static/assets/css', f), 'utf8')).join('\n'));
const js = readFileSync(join(root, 'static/assets/js/site.js'), 'utf8');
const assets = {
  css: `/assets/css/site.${hash(css)}.css`,
  js: `/assets/js/site.${hash(js)}.js`,
};
mkdirSync(join(dist, 'assets/css'), { recursive: true });
mkdirSync(join(dist, 'assets/js'), { recursive: true });
writeFileSync(join(dist, assets.css), css);
writeFileSync(join(dist, assets.js), js);

// Pages
const pages = [];
const written = [];
const write = (path, html, { sitemap = true, alternates } = {}) => {
  const file = path.endsWith('/') ? join(dist, path, 'index.html') : join(dist, path + '.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  written.push(file);
  if (sitemap) pages.push({ path, alternates });
};
const ctx = { cfg, assets };

for (const lang of ['en', 'pt']) {
  write(lang === 'en' ? '/' : '/pt', homePage({ ...ctx, lang }), { alternates: { en: '/', pt: '/pt' } });
  for (const project of PROJECTS) {
    const slug = `projects/${project.slug}`;
    write(lang === 'en' ? `/${slug}` : `/pt/${slug}`, projectPage({ ...ctx, lang, project }), { alternates: { en: `/${slug}`, pt: `/pt/${slug}` } });
  }
}
write('/404', notFound(ctx), { sitemap: false });

// Copy rule guard: no em or en dashes in any rendered page.
const dashes = written.filter((f) => /[–—]/.test(readFileSync(f, 'utf8')));
if (dashes.length) {
  console.error(`\n  ERROR: em/en dash found in:\n  ${dashes.map((f) => f.replace(root, '')).join('\n  ')}\n`);
  process.exit(1);
}

// sitemap.xml with hreflang alternates
const today = new Date().toISOString().slice(0, 10);
const loc = (p) => cfg.siteUrl + p;
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(({ path, alternates }) => `  <url>
    <loc>${loc(path)}</loc>
    <lastmod>${today}</lastmod>
${alternates ? `    <xhtml:link rel="alternate" hreflang="en" href="${loc(alternates.en)}"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${loc(alternates.pt)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc(alternates.en)}"/>
` : ''}  </url>`).join('\n')}
</urlset>
`);

writeFileSync(join(dist, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${cfg.siteUrl}/sitemap.xml
`);

if (!existsSync(join(dist, 'og/og-en.png'))) console.warn('  WARNING: OG images missing. Run: node scripts/render-images.mjs');
console.log(`Built ${written.length} pages into dist/ (site: ${cfg.siteUrl})`);
