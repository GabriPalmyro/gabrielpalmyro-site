// Home page (EN at /, PT-BR at /pt/).
import { STRINGS } from '../i18n.mjs';
import { head, bodyOpen, nav, footer, bodyClose, ic, esc, localPath } from '../layout.mjs';
import { APPS } from '../content/apps.mjs';
import { PROJECTS } from '../content/projects.mjs';
import { EXPERIENCE } from '../content/experience.mjs';
import { SKILLS, RECOMMENDATIONS } from '../content/profile.mjs';

const sectionHead = (over, h2, lead = '', id = '') => `<div class="sec-head" data-reveal>
<span class="over">${over}</span>
<h2 class="h2"${id ? ` id="${id}"` : ''}>${h2}</h2>
${lead ? `<p class="lead">${lead}</p>` : ''}
</div>`;

const ext = (url) => (url.startsWith('http') ? ' rel="noopener"' : '');

function hero(t, cfg) {
  const h = t.hero;
  return `<section class="hero wrap" aria-labelledby="hero-h">
<div class="hero-t">
<span class="kick"><span class="dot" aria-hidden="true"></span>${h.kicker}</span>
<h1 class="display" id="hero-h">Gabriel Palmyro</h1>
<p class="hero-role">${h.role}</p>
<p class="lead hero-sub">${h.sub}</p>
<div class="hero-cta"><a class="btn primary lg" href="#apps">${h.ctaApps}${ic('arrow-right', 18)}</a><a class="btn secondary lg" href="#contact">${h.ctaContact}</a></div>
</div>
<figure class="hero-photo">
<img src="/assets/img/gabriel-palmyro.webp" width="800" height="800" alt="${h.photoAlt}" fetchpriority="high" decoding="async">
</figure>
<dl class="facts">
${h.facts.map(([k, v], i) => `<div data-reveal style="--i:${i}"><dt>${k}</dt><dd>${v}</dd></div>`).join('\n')}
</dl>
</section>`;
}

function apps(t, lang) {
  const a = t.apps;
  const card = (app, i) => `<article class="app card" data-reveal style="--i:${i % 2}">
<div class="app-top">
<img class="app-ic" src="${app.icon}" width="64" height="64" alt="" loading="lazy" decoding="async">
<div class="app-id">
<h3 class="h3">${esc(app.name)}</h3>
<p class="meta">${[app.role?.[lang], app.platforms[lang]].filter(Boolean).join(' &middot; ')}</p>
</div>
<span class="pill ${app.status}">${app.status === 'dev' ? '<span class="dot" aria-hidden="true"></span>' : ''}${a.status[app.status]}</span>
</div>
<p class="body">${esc(app.desc[lang])}</p>
${app.stats?.length ? `<ul class="stats" role="list">${app.stats.map((s) => `<li>${esc(s[lang])}</li>`).join('')}</ul>` : ''}
<a class="app-link" href="${app.url}"${ext(app.url)}><span>${a.visit} <span class="mono">${esc(app.host)}</span></span>${ic('external', 16)}</a>
</article>`;
  return `<section class="sec" id="apps" aria-labelledby="apps-h"><div class="wrap">
${sectionHead(a.over, a.h2, a.lead, 'apps-h')}
<div class="grid2">${APPS.map(card).join('\n')}</div>
</div></section>`;
}

export const projectThumb = (p, lang, t, cls = '') => p.image
  ? `<img class="thumb ${cls}" src="${p.image}" width="1200" height="675" alt="${esc(p.imageAlt[lang])}" loading="lazy" decoding="async">`
  : `<div class="thumb ph-name ${cls}" role="img" aria-label="${esc(p.name)}"><span>${esc(p.name)}</span></div>`;

function projects(t, lang) {
  const pr = t.projects;
  const card = (p, i) => {
    const code = p.links.find((l) => l.kind === 'code');
    return `<article class="proj card" data-reveal style="--i:${i % 2}">
<a class="proj-media" href="${localPath(lang, 'projects/' + p.slug)}" tabindex="-1" aria-hidden="true">${projectThumb(p, lang, t)}</a>
<div class="proj-body">
<p class="meta">${p.kind[lang]} &middot; ${p.date[lang]}</p>
<h3 class="h3"><a href="${localPath(lang, 'projects/' + p.slug)}">${esc(p.name)}</a></h3>
<p class="body">${esc(p.short[lang])}</p>
<ul class="tags" role="list">${p.tags.map((x) => `<li class="tag">${esc(x)}</li>`).join('')}</ul>
<div class="proj-act"><a class="btn sm secondary" href="${localPath(lang, 'projects/' + p.slug)}">${pr.details}${ic('arrow-right', 16)}</a>${code ? `<a class="btn sm ghost" href="${code.url}" rel="noopener">${pr.code}${ic('external', 16)}</a>` : p.private ? `<span class="muted-note">${ic('lock', 16)}${pr.private}</span>` : ''}</div>
</div>
</article>`;
  };
  return `<section class="sec" id="projects" aria-labelledby="projects-h"><div class="wrap">
${sectionHead(pr.over, pr.h2, pr.lead, 'projects-h')}
<div class="grid2">${PROJECTS.map(card).join('\n')}</div>
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
  const item = (e) => `<li class="xp${e.current ? ' now' : ''}" data-reveal>
<div class="xp-when"><span class="xp-dates">${dates(e, lang, t)}</span><span class="meta">${e.place[lang]}</span></div>
<div class="xp-what">
<h3 class="h4">${e.role[lang]} <span class="at">&middot; ${e.url ? `<a href="${e.url}" rel="noopener">${esc(e.company)}</a>` : esc(e.company)}</span>${e.current ? ` <span class="pill live sm">${x.current}</span>` : ''}</h3>
<ul class="pts">${e.points[lang].map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
<ul class="tags" role="list">${e.tags.map((g) => `<li class="tag">${esc(g)}</li>`).join('')}</ul>
</div>
</li>`;
  return `<section class="sec" id="experience" aria-labelledby="experience-h"><div class="wrap">
${sectionHead(x.over, x.h2, '', 'experience-h')}
<ol class="xps">${EXPERIENCE.map(item).join('\n')}</ol>
</div></section>`;
}

function skills(t, lang) {
  const s = t.skills;
  return `<section class="sec band" id="skills" aria-labelledby="skills-h"><div class="wrap">
${sectionHead(s.over, s.h2, s.lead, 'skills-h')}
<div class="grid4">${SKILLS.map((g, i) => `<div class="skill card" data-reveal style="--i:${i}"><h3 class="h4">${g.title[lang]}</h3><ul class="tags" role="list">${g.items.map((x) => `<li class="tag">${esc(x)}</li>`).join('')}</ul></div>`).join('\n')}</div>
</div></section>`;
}

function recs(t) {
  const r = t.recs;
  return `<section class="sec" id="recommendations" aria-labelledby="recs-h"><div class="wrap">
${sectionHead(r.over, r.h2, r.lead + (r.note ? ` ${r.note}` : ''), 'recs-h')}
<div class="grid2">${RECOMMENDATIONS.map((q, i) => `<figure class="rec card" data-reveal style="--i:${i % 2}">
<blockquote lang="en"><p>“${esc(q.quote)}”</p></blockquote>
<figcaption><span class="rec-n">${esc(q.name)}</span><span class="meta" lang="en">${esc(q.title)}</span></figcaption>
</figure>`).join('\n')}</div>
</div></section>`;
}

function company(t, cfg) {
  const c = t.company;
  const k = cfg.company;
  return `<section class="sec" id="company" aria-labelledby="company-h"><div class="wrap">
<div class="company card" data-reveal>
<div class="company-t">
<span class="over">${c.over}</span>
<h2 class="h2 sm" id="company-h">${c.h2}</h2>
<p class="body">${c.body}</p>
</div>
<dl class="company-dl">
<div><dt>${c.legal}</dt><dd>${k.legalName}</dd></div>
<div><dt>${c.cnpj}</dt><dd class="mono">${k.cnpj}</dd></div>
<div><dt>${c.loc}</dt><dd>${c.locVal}</dd></div>
<div><dt>${c.contact}</dt><dd><a href="mailto:${cfg.email}">${cfg.email}</a></dd></div>
</dl>
</div>
</div></section>`;
}

function contact(t, cfg) {
  const c = t.contact;
  return `<section class="sec contact" id="contact" aria-labelledby="contact-h"><div class="wrap">
<div class="contact-in" data-reveal>
<span class="over">${c.over}</span>
<h2 class="h2" id="contact-h">${c.h2}</h2>
<p class="lead">${c.body}</p>
<div class="contact-act">
<a class="btn primary lg" href="mailto:${cfg.email}">${ic('mail', 18)}<span>${cfg.email}</span></a>
<a class="btn secondary lg" href="${cfg.linkedin}" rel="me noopener">${ic('linkedin', 18)}${c.linkedin}</a>
<a class="btn secondary lg" href="${cfg.github}" rel="me noopener">${ic('github', 18)}${c.github}</a>
</div>
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
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [person, org] })}</script>`;
}

export function homePage({ cfg, assets, lang }) {
  const t = STRINGS[lang];
  const paths = { en: '/', pt: '/pt/' };
  return `${head({ cfg, assets, lang, title: t.meta.title, desc: t.meta.desc, paths, extraHead: jsonLd(cfg, lang) })}
${bodyOpen({ lang, page: 'home', paths })}
${nav({ lang, paths, onHome: true })}
<main id="main">
${hero(t, cfg)}
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
