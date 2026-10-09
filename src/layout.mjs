// Shared page chrome: <head>, nav, footer, language hint and small helpers.
import { STRINGS } from './i18n.mjs';

export const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const ic = (name, size, extra = '') =>
  `<span class="ic i-${name}${size ? ` s${size}` : ''}${extra ? ` ${extra}` : ''}" aria-hidden="true"></span>`;

export const other = (lang) => (lang === 'en' ? 'pt' : 'en');

// Home path for a language, with an optional hash.
export const home = (lang, hash = '') => (lang === 'en' ? '/' : '/pt/') + hash;

// Path of a page in a language. Pages live at the same slug under /pt/.
export const localPath = (lang, slug) => (lang === 'en' ? `/${slug}` : `/pt/${slug}`);

export const monogram = (size = '') => `<span class="mk${size ? ` ${size}` : ''}" aria-hidden="true">GP</span>`;

const wordmark = (label, href) =>
  `<a class="wm" href="${href}" aria-label="${label}">${monogram()}<span class="wm-t">Gabriel Palmyro</span></a>`;

export function head({ cfg, assets, lang, title, desc, paths, noindex = false, extraHead = '' }) {
  const t = STRINGS[lang];
  const url = cfg.siteUrl + paths[lang];
  const og = `${cfg.siteUrl}/og/og-${lang}.png`;
  const alt = paths.en && paths.pt
    ? `<link rel="alternate" hreflang="en" href="${cfg.siteUrl + paths.en}">
<link rel="alternate" hreflang="pt-BR" href="${cfg.siteUrl + paths.pt}">
<link rel="alternate" hreflang="x-default" href="${cfg.siteUrl + paths.en}">`
    : '';
  return `<!doctype html>
<html lang="${t.htmlLang}" class="gp">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">`}
${alt}
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#F6F5F3" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)">
<link rel="preload" href="/assets/fonts/geist-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${assets.css}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Gabriel Palmyro">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${t.ogLocale}">
<meta property="og:locale:alternate" content="${STRINGS[other(lang)].ogLocale}">
<meta name="twitter:card" content="summary_large_image">
${extraHead}
<script defer src="${assets.js}"></script>
</head>`;
}

// Opening <body> with the skip link and the language hint (suggest, never redirect).
export function bodyOpen({ lang, page, paths }) {
  const t = STRINGS[lang];
  const o = other(lang);
  const hint = STRINGS[o].langHint;
  const otherHref = paths[o];
  const ol = STRINGS[o].htmlLang;
  return `<body class="site" data-page="${page}" data-lang="${lang}">
<a class="skip" href="#main">${t.skip}</a>
${otherHref ? `<div class="lang-hint" data-lang-hint="${o}" hidden><div class="wrap"><span lang="${ol}">${hint.text} <a href="${otherHref}" hreflang="${ol}" lang="${ol}" data-lang-switch="${o}">${hint.link}</a></span><button type="button" class="lang-x" data-lang-dismiss aria-label="${hint.close}">${ic('close', 16)}</button></div></div>` : ''}`;
}

export function langSwitch({ lang, paths, long = false, label }) {
  const opt = (l, text) => {
    const on = l === lang;
    return `<a class="${on ? 'on' : ''}" href="${paths[l]}" hreflang="${STRINGS[l].htmlLang}" lang="${STRINGS[l].htmlLang}" data-lang-switch="${l}"${on ? ' aria-current="true"' : ''}>${text}</a>`;
  };
  const en = long ? STRINGS[lang].foot.en : 'EN';
  const pt = long ? STRINGS[lang].foot.pt : 'PT';
  return `<div class="lang" role="group" aria-label="${label}">${opt('en', en)}${opt('pt', pt)}</div>`;
}

export function nav({ lang, paths, onHome = false }) {
  const t = STRINGS[lang];
  const h = (hash) => (onHome ? hash : home(lang, hash));
  const links = ['apps', 'projects', 'experience', 'company']
    .map((k) => `<a href="${h('#' + k)}">${t.nav[k]}</a>`).join('');
  return `<header class="nav"><div class="wrap">
${wordmark(t.nav.home, home(lang))}
<nav class="nav-links" aria-label="${t.nav.main}">${links}</nav>
<div class="nav-r">${paths.en && paths.pt ? langSwitch({ lang, paths, label: t.nav.lang }) : ''}<a class="btn primary nav-cta" href="${h('#contact')}">${t.nav.contact}</a></div>
</div></header>`;
}

export function footer({ cfg, lang, paths, onHome = false }) {
  const t = STRINGS[lang];
  const h = (hash) => (onHome ? hash : home(lang, hash));
  const c = cfg.company;
  const year = new Date().getFullYear();
  return `<footer class="foot"><div class="wrap">
<div class="foot-grid">
<div class="foot-brand"><span class="wm">${monogram()}<span class="wm-t">Gabriel Palmyro</span></span>${paths.en && paths.pt ? langSwitch({ lang, paths, long: true, label: t.nav.lang }) : ''}</div>
<div><h2 class="foot-h">${t.foot.site}</h2><ul><li><a href="${h('#apps')}">${t.nav.apps}</a></li><li><a href="${h('#projects')}">${t.nav.projects}</a></li><li><a href="${h('#experience')}">${t.nav.experience}</a></li><li><a href="${h('#company')}">${t.nav.company}</a></li></ul></div>
<div><h2 class="foot-h">${t.nav.contact}</h2><ul><li><a href="mailto:${cfg.email}">${cfg.email}</a></li><li><a href="${cfg.github}" rel="me noopener">GitHub</a></li><li><a href="${cfg.linkedin}" rel="me noopener">LinkedIn</a></li></ul></div>
</div>
<div class="foot-bottom"><p>&copy; ${year} ${c.legalName}. ${t.foot.rights}</p><p>CNPJ ${c.cnpj} &middot; ${t.company.locVal} &middot; <a href="mailto:${cfg.email}">${cfg.email}</a></p></div>
</div></footer>`;
}

export const bodyClose = `</body>
</html>
`;
