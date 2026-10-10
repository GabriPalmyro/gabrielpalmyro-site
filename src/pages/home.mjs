// Home page (EN at /, PT-BR at /pt/).
import { STRINGS } from '../i18n.mjs';
import { head, bodyOpen, nav, footer, bodyClose, ic, esc, localPath } from '../layout.mjs';
import { APPS } from '../content/apps.mjs';
import { PROJECTS } from '../content/projects.mjs';
import { EXPERIENCE } from '../content/experience.mjs';
import { SKILLS, RECOMMENDATIONS } from '../content/profile.mjs';

// Section heading: the heading carries the section, no label above it.
const sectionHead = (h2, lead = '', id = '', extra = '') => `<div class="sec-head">
<h2 class="h2"${id ? ` id="${id}"` : ''}>${h2}</h2>
${lead ? `<p class="lead">${lead}</p>` : ''}${extra}
</div>`;

const ext = (url) => (url.startsWith('http') ? ' rel="noopener"' : '');

// Hero. Depth layers for the parallax (motion.js, desktop only): the plate and
// the name sit furthest back, the photo in the middle, the copy at reading
// speed and the app icons in front. Without JS everything is static.
function hero(t) {
  const h = t.hero;
  return `<section class="hero" aria-labelledby="hero-h">
<div class="wrap hero-grid">
<div class="hero-plate" data-layer="plate" aria-hidden="true"></div>
<h1 class="hero-name" id="hero-h" data-layer="name" translate="no"><span>Gabriel</span> <span>Palmyro</span></h1>
<div class="hero-copy">
<p class="hero-role">${h.role}</p>
<p class="hero-sub">${h.sub}</p>
<div class="hero-cta"><a class="btn primary lg" href="#apps">${h.ctaApps}${ic('arrow-right', 18)}</a><a class="btn secondary lg" href="#contact">${h.ctaContact}</a></div>
</div>
<figure class="hero-photo" data-layer="photo">
<img src="/assets/img/gabriel-palmyro.webp" width="800" height="800" alt="${h.photoAlt}" fetchpriority="high" decoding="async">
</figure>
<ul class="hero-apps" data-layer="apps" role="list" aria-label="${h.appsLabel}">
${APPS.map((app, i) => `<li style="--i:${i}"><a href="#app-${app.id}" title="${esc(app.name)}"><img src="${app.icon}" width="56" height="56" alt="${esc(app.name)}" decoding="async"></a></li>`).join('')}
</ul>
</div>
<div class="wrap">
<dl class="facts">
${h.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n')}
</dl>
</div>
</section>`;
}

// Apps: the core of the page. A sticky column (heading + index of the apps,
// highlighted as you read) next to one entry per app.
function apps(t, lang) {
  const a = t.apps;
  // "2M+ players" / "nota 4.8": the number is the word with a digit, set large.
  const stat = (s) => {
    const words = s[lang].split(' ');
    const n = words.find((w) => /\d/.test(w)) || words[0];
    const label = words.filter((w) => w !== n).join(' ');
    return `<li><span class="stat-n num">${esc(n)}</span><span class="stat-l">${esc(label)}</span></li>`;
  };
  const entry = (app, i) => `<article class="app" id="app-${app.id}" data-reveal data-spy="${app.id}" style="--i:${i}" aria-labelledby="app-${app.id}-h">
<div class="app-media" data-layer="app-icon"><img class="app-ic" src="${app.icon}" width="96" height="96" alt="" loading="lazy" decoding="async"></div>
<div class="app-body">
<p class="app-meta"><span class="pill ${app.status}">${a.status[app.status]}</span><span>${[app.role?.[lang], app.platforms[lang]].filter(Boolean).join(', ')}</span></p>
<h3 class="app-name" id="app-${app.id}-h" translate="no">${esc(app.name)}</h3>
<p class="body app-desc">${esc(app.desc[lang])}</p>
${app.stats?.length ? `<ul class="stats" role="list" aria-label="${a.statLabel}">${app.stats.map(stat).join('')}</ul>` : ''}
<a class="app-link" href="${app.url}"${ext(app.url)}><span>${a.visit} <span class="app-host" translate="no">${esc(app.host)}</span></span>${ic('external', 16)}</a>
</div>
</article>`;
  const index = `<ol class="apps-index" role="list" aria-label="${a.index}">${APPS.map((app) => `<li><a href="#app-${app.id}" data-spy-link="${app.id}"><img src="${app.icon}" width="24" height="24" alt="" loading="lazy" decoding="async"><span>${esc(app.name)}</span></a></li>`).join('')}</ol>`;
  return `<section class="sec apps" id="apps" aria-labelledby="apps-h"><div class="wrap apps-grid">
<div class="apps-side">${sectionHead(a.h2, a.lead, 'apps-h', index)}</div>
<div class="apps-list">${APPS.map(entry).join('\n')}</div>
</div></section>`;
}

export const projectThumb = (p, lang, t, cls = '') => p.image
  ? `<img class="thumb ${cls}" src="${p.image}" width="1200" height="675" alt="${esc(p.imageAlt[lang])}" loading="lazy" decoding="async">`
  : `<div class="thumb ph-name ${cls}" role="img" aria-label="${esc(p.name)}"><span>${esc(p.name)}</span></div>`;

function projects(t, lang) {
  const pr = t.projects;
  const card = (p) => {
    const code = p.links.find((l) => l.kind === 'code');
    const href = localPath(lang, 'projects/' + p.slug);
    return `<article class="proj">
<a class="proj-media" href="${href}" tabindex="-1" aria-hidden="true">${projectThumb(p, lang, t)}</a>
<div class="proj-body">
<p class="meta">${p.kind[lang]}, ${p.date[lang]}</p>
<h3 class="h3"><a href="${href}">${esc(p.name)}</a></h3>
<p class="body">${esc(p.short[lang])}</p>
<p class="tech">${p.tags.map(esc).join(', ')}</p>
<div class="proj-act"><a class="btn sm secondary" href="${href}">${pr.details}${ic('arrow-right', 16)}</a>${code ? `<a class="btn sm ghost" href="${code.url}" rel="noopener">${pr.code}${ic('external', 16)}</a>` : p.private ? `<span class="muted-note">${ic('lock', 16)}${pr.private}</span>` : ''}</div>
</div>
</article>`;
  };
  return `<section class="sec" id="projects" aria-labelledby="projects-h"><div class="wrap">
${sectionHead(pr.h2, pr.lead, 'projects-h')}
<div class="proj-grid">${PROJECTS.map(card).join('\n')}</div>
</div></section>`;
}

const dates = (e, lang, t) => {
  const x = t.experience;
  if (e.current && !e.start) return x.current;
  if (e.current) return `${e.start[lang]} ${x.to} ${x.present}`;
  if (e.start && e.end) return `${e.start[lang]} ${x.to} ${e.end[lang]}`;
  return e.start ? e.start[lang] : '';
};

function experience(t, lang) {
  const x = t.experience;
  const item = (e) => `<li class="xp${e.current ? ' now' : ''}">
<div class="xp-when"><span class="xp-dates num">${dates(e, lang, t)}</span><span class="meta">${e.place[lang]}</span></div>
<div class="xp-what">
<h3 class="h4 xp-co">${e.url ? `<a href="${e.url}" rel="noopener" translate="no">${esc(e.company)}</a>` : `<span translate="no">${esc(e.company)}</span>`}</h3>
<p class="xp-role">${e.role[lang]}</p>
<ul class="pts">${e.points[lang].map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
<p class="tech">${e.tags.map(esc).join(', ')}</p>
</div>
</li>`;
  return `<section class="sec" id="experience" aria-labelledby="experience-h"><div class="wrap">
${sectionHead(x.h2, '', 'experience-h')}
<ol class="xps">${EXPERIENCE.map(item).join('\n')}</ol>
</div></section>`;
}

function skills(t, lang) {
  const s = t.skills;
  return `<section class="sec band" id="skills" aria-labelledby="skills-h"><div class="wrap">
${sectionHead(s.h2, s.lead, 'skills-h')}
<div class="skills">${SKILLS.map((g) => `<div class="skill"><h3 class="h4">${g.title[lang]}</h3><ul role="list">${g.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('\n')}</div>
</div></section>`;
}

function recs(t) {
  const r = t.recs;
  const [first, ...rest] = RECOMMENDATIONS;
  const quote = (q, cls) => `<figure class="rec ${cls}">
<blockquote lang="en"><p>“${esc(q.quote)}”</p></blockquote>
<figcaption><span class="rec-n">${esc(q.name)}</span><span class="meta" lang="en">${esc(q.title)}</span></figcaption>
</figure>`;
  return `<section class="sec" id="recommendations" aria-labelledby="recs-h"><div class="wrap">
${sectionHead(r.h2, [r.lead, r.note].filter(Boolean).join(' '), 'recs-h')}
<div class="recs">${quote(first, 'lead-q')}<div class="recs-rest">${rest.map((q) => quote(q, '')).join('\n')}</div></div>
</div></section>`;
}

function company(t, cfg) {
  const c = t.company;
  const k = cfg.company;
  return `<section class="sec company-sec" id="company" aria-labelledby="company-h"><div class="wrap company">
<div class="company-t">
<h2 class="h2 sm" id="company-h">${c.h2}</h2>
<p class="body">${c.body}</p>
</div>
<dl class="company-dl">
<div><dt>${c.legal}</dt><dd translate="no">${k.legalName}</dd></div>
<div><dt>${c.cnpj}</dt><dd class="num" translate="no">${k.cnpj}</dd></div>
<div><dt>${c.loc}</dt><dd>${c.locVal}</dd></div>
<div><dt>${c.contact}</dt><dd><a href="mailto:${cfg.email}" translate="no">${cfg.email}</a></dd></div>
</dl>
</div></section>`;
}

function contact(t, cfg) {
  const c = t.contact;
  return `<section class="sec contact" id="contact" aria-labelledby="contact-h"><div class="wrap contact-in">
<h2 class="h2 sm" id="contact-h">${c.h2}</h2>
<a class="contact-mail" href="mailto:${cfg.email}" translate="no">${cfg.email}</a>
<p class="lead">${c.body}</p>
<div class="contact-act">
<a class="btn secondary" href="${cfg.linkedin}" rel="me noopener">${ic('linkedin', 18)}${c.linkedin}</a>
<a class="btn secondary" href="${cfg.github}" rel="me noopener">${ic('github', 18)}${c.github}</a>
</div>
</div></section>`;
}

function jsonLd(cfg, lang) {
  const t = STRINGS[lang];
  const k = cfg.company;
  const org = {
    '@type': 'Organization',
    '@id': `${cfg.siteUrl}/#company`,
    name: k.legalName,
    legalName: k.legalName,
    taxID: k.cnpj,
    email: cfg.email,
    url: cfg.siteUrl + '/',
    address: { '@type': 'PostalAddress', addressLocality: k.city, addressRegion: k.region, addressCountry: k.countryCode },
    founder: { '@id': `${cfg.siteUrl}/#gabriel` },
  };
  const person = {
    '@type': 'Person',
    '@id': `${cfg.siteUrl}/#gabriel`,
    name: 'Gabriel Palmyro',
    jobTitle: 'Mobile Engineer',
    description: t.meta.desc,
    image: `${cfg.siteUrl}/assets/img/gabriel-palmyro.webp`,
    url: cfg.siteUrl + '/',
    address: { '@type': 'PostalAddress', addressLocality: k.city, addressCountry: k.countryCode },
    sameAs: [cfg.github, cfg.linkedin],
    worksFor: { '@type': 'Organization', name: 'CarOnSale' },
  };
  const website = {
    '@type': 'WebSite',
    '@id': `${cfg.siteUrl}/#website`,
    url: cfg.siteUrl + '/',
    name: 'Gabriel Palmyro',
    inLanguage: ['en', 'pt-BR'],
    publisher: { '@id': `${cfg.siteUrl}/#gabriel` },
  };
  // The apps on the page, facts only (no ratings: the review count is not on the page).
  const apps = APPS.map((app) => ({
    '@type': app.os.some((o) => o === 'iOS' || o === 'Android') ? 'MobileApplication' : 'SoftwareApplication',
    '@id': `${cfg.siteUrl}/#app-${app.id}`,
    name: app.name,
    url: app.url,
    description: app.desc[lang],
    operatingSystem: app.os.join(', '),
    applicationCategory: app.category,
    author: { '@id': `${cfg.siteUrl}/#gabriel` },
  }));
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [person, org, website, ...apps] })}</script>`;
}

export function homePage({ cfg, assets, lang }) {
  const t = STRINGS[lang];
  const paths = { en: '/', pt: '/pt' };
  return `${head({ cfg, assets, lang, title: t.meta.title, desc: t.meta.desc, paths, extraHead: `<link rel="preload" as="image" href="/assets/img/gabriel-palmyro.webp" fetchpriority="high">\n${jsonLd(cfg, lang)}` })}
${bodyOpen({ lang, page: 'home', paths })}
${nav({ lang, paths, onHome: true })}
<main id="main">
${hero(t)}
${apps(t, lang)}
${projects(t, lang)}
${experience(t, lang)}
${skills(t, lang)}
${recs(t)}
${company(t, cfg)}
${contact(t, cfg)}
</main>
${footer({ cfg, lang, paths, onHome: true })}
${bodyClose}`;
}
