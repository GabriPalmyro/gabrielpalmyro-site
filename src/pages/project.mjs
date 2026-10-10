// Project detail page: /projects/{slug} and /pt/projects/{slug}.
// Same URLs as the previous site, so old links keep working.
import { STRINGS } from '../i18n.mjs';
import { head, bodyOpen, nav, footer, bodyClose, ic, esc, home, localPath } from '../layout.mjs';
import { projectThumb } from './home.mjs';

export function projectPage({ cfg, assets, lang, project: p }) {
  const t = STRINGS[lang];
  const pr = t.projects;
  const slug = 'projects/' + p.slug;
  const paths = { en: localPath('en', slug), pt: localPath('pt', slug) };
  const linkLabel = { code: pr.code, play: pr.play, site: pr.site };
  const links = p.links.map((l, i) =>
    `<a class="btn ${i === 0 ? 'primary' : 'secondary'}" href="${l.url}" rel="noopener">${linkLabel[l.kind]}${ic('external', 16)}</a>`).join('');
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Gabriel Palmyro', item: cfg.siteUrl + home(lang) },
      { '@type': 'ListItem', position: 2, name: t.nav.projects, item: cfg.siteUrl + home(lang, '#projects') },
      { '@type': 'ListItem', position: 3, name: p.name, item: cfg.siteUrl + paths[lang] },
    ],
  };
  const extraHead = `<script type="application/ld+json">${JSON.stringify(crumbs)}</script>`;
  return `${head({ cfg, assets, lang, title: `${p.name} · Gabriel Palmyro`, desc: p.short[lang], paths, extraHead })}
${bodyOpen({ lang, page: 'project', paths })}
${nav({ lang, paths })}
<main id="main" class="pj">
<div class="wrap">
<a class="back" href="${home(lang, '#projects')}">${ic('chevron-left', 18)}${pr.back}</a>
<header class="pj-head">
<p class="meta">${p.kind[lang]} &middot; ${p.date[lang]}</p>
<h1 class="display sm">${esc(p.name)}</h1>
<p class="lead">${esc(p.short[lang])}</p>
<ul class="tags" role="list">${p.tags.map((x) => `<li class="tag">${esc(x)}</li>`).join('')}</ul>
${links || p.private ? `<div class="pj-act">${links}${p.private && !p.links.some((l) => l.kind === 'code') ? `<span class="muted-note">${ic('lock', 16)}${pr.private}</span>` : ''}</div>` : ''}
</header>
${p.image ? `<div class="pj-media">${projectThumb(p, lang, t, 'big')}</div>` : ''}
<div class="pj-grid">
<section class="pj-sec" aria-labelledby="about-h">
<h2 class="h3" id="about-h">${pr.about}</h2>
${p.about[lang].map((x) => `<p class="body">${esc(x)}</p>`).join('\n')}
${p.shot ? `<img class="pj-shot" src="${p.shot}" width="540" height="960" alt="${esc(p.shotAlt[lang])}" loading="lazy" decoding="async">` : ''}
</section>
<section class="pj-sec" aria-labelledby="feat-h">
<h2 class="h3" id="feat-h">${(p.featuresTitle || {})[lang] || pr.features}</h2>
<ul class="checks">${p.features[lang].map((x) => `<li>${ic('check', 18)}<span>${esc(x)}</span></li>`).join('')}</ul>
</section>
</div>
</div>
</main>
${footer({ cfg, lang, paths })}
${bodyClose}`;
}
