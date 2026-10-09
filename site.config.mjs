// Site configuration. Every value with an env var can be overridden at build
// time (Vercel: Project Settings > Environment Variables).

const env = process.env;

export default {
  // Public origin, used for canonical URLs, hreflang, sitemap and OG tags.
  siteUrl: (env.SITE_URL || 'https://www.gabrielpalmyro.com').replace(/\/$/, ''),

  name: 'Gabriel Palmyro',
  email: env.CONTACT_EMAIL || 'apps@gabrielpalmyro.com',
  github: 'https://github.com/GabriPalmyro',
  linkedin: 'https://linkedin.com/in/gabriel-palmyro/',

  // Company block (Apple Developer Program organization verification).
  // Do not add the street address here: city and country only.
  company: {
    legalName: 'GABRIEL PALMYRO MARTINS DESENVOLVIMENTO DE SOFTWARE LTDA',
    cnpj: '50.257.343/0001-04',
    city: 'São Paulo',
    region: 'SP',
    country: 'Brazil',
    countryCode: 'BR',
  },
};
