// 404 page (Vercel serves dist/404.html for unknown paths). Bilingual.
import { STRINGS } from '../i18n.mjs';
import { head, bodyOpen, nav, footer, bodyClose } from '../layout.mjs';

export function notFound({ cfg, assets }) {
  const en = STRINGS.en.notFound;
  const pt = STRINGS.pt.notFound;
  const paths = { en: '/404' };
  return `${head({ cfg, assets, lang: 'en', title: `${en.title} · Gabriel Palmyro`, desc: en.body, paths, noindex: true })}
${bodyOpen({ lang: 'en', page: '404', paths })}
${nav({ lang: 'en', paths })}
<main id="main"><div class="wrap nf">
<span class="over">404</span>
<h1 class="h2">${en.h1}</h1>
<p class="lead">${en.body}</p>
<p class="lead" lang="pt-BR">${pt.h1} ${pt.body}</p>
<p class="nf-act"><a class="btn primary" href="/">${en.home}</a><a class="btn secondary" href="/pt" lang="pt-BR" hreflang="pt-BR">${pt.home}</a></p>
</div></main>
${footer({ cfg, lang: 'en', paths })}
${bodyClose}`;
}
