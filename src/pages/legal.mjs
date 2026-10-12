// Legal document page (Golf Haiku privacy policy and terms of use), EN + PT-BR.
// Reuses the project page shell (.pj, .pj-head, type scale) with the usual nav
// and footer. Prose styles live in legal.css, loaded only here, so the shared
// CSS bundle and every other page stay byte-identical.
import { head, bodyOpen, nav, footer, bodyClose, esc } from '../layout.mjs';
import { EFFECTIVE } from '../content/golf-haiku-legal.mjs';

const effectiveLabel = { en: 'Effective', pt: 'Vigente a partir de' };

export function legalPage({ cfg, assets, lang, doc }) {
  const d = doc[lang];
  const paths = doc.paths;
  const extraHead = `<link rel="stylesheet" href="${assets.legal}">`;
  const sections = d.sections.map((s) => `<section aria-labelledby="${s.id}">
<h2 class="h3" id="${s.id}">${esc(s.h)}</h2>${s.html}
</section>`).join('\n');
  return `${head({ cfg, assets, lang, title: `${d.title} · Gabriel Palmyro`, desc: d.desc, paths, extraHead })}
${bodyOpen({ lang, page: 'legal', paths })}
${nav({ lang, paths })}
<main id="main" class="pj legal">
<div class="wrap">
<header class="pj-head">
<p class="meta">Golf Haiku &middot; ${effectiveLabel[lang]} <time datetime="${EFFECTIVE.iso}">${EFFECTIVE[lang]}</time></p>
<h1 class="display sm">${esc(d.h1)}</h1>
<p class="lead">${esc(d.lead)}</p>
<p class="legal-rel">${d.related}</p>
</header>
<div class="legal-doc">
${sections}
</div>
</div>
</main>
${footer({ cfg, lang, paths })}
${bodyClose}`;
}
