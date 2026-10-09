// Interface and section copy, EN and PT-BR. Content lists (apps, projects,
// experience, skills, recommendations) live in src/content/.
// Copy rules: no em or en dashes anywhere, in either language. Rewrite the
// sentence with commas, periods, colons or parentheses. No invented numbers.
// PT-BR is written, not translated: casual "você", "pra".

export const STRINGS = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    meta: {
      title: 'Gabriel Palmyro, Mobile Engineer (Flutter)',
      desc: 'Gabriel Palmyro is a Mobile Engineer (Flutter) in São Paulo, Brazil. Mobile Engineer at CarOnSale, co-founder of Heat Game and Sequência, and builder of Forgetless and Dustpan.',
    },
    skip: 'Skip to content',
    langHint: { text: 'Prefer English?', link: 'View in English', close: 'Dismiss' },
    nav: {
      main: 'Main', lang: 'Language', home: 'Gabriel Palmyro, home',
      apps: 'Apps', projects: 'Projects', experience: 'Experience', company: 'Company', contact: 'Contact',
    },
    hero: {
      kicker: 'Mobile Engineer at CarOnSale',
      role: 'Mobile Engineer (Flutter), based in São Paulo, Brazil.',
      sub: 'I build and ship mobile apps end to end: the Flutter app, the backend, the infra, the analytics and the store listing.',
      ctaApps: 'See my apps', ctaContact: 'Get in touch',
      photoAlt: 'Portrait of Gabriel Palmyro',
      facts: [
        ['Now', 'Mobile Engineer at CarOnSale (Germany, remote)'],
        ['Building', 'Forgetless, Heat Game, Sequência, Dustpan'],
        ['Stack', 'Flutter, NestJS, infra, analytics, ASO'],
        ['Education', 'Computer Engineering, Federal Institute of São Paulo'],
      ],
    },
    apps: {
      over: 'Apps', h2: 'Apps I build and publish.',
      lead: 'My own products, built, shipped and run from the first commit to the store listing.',
      status: { dev: 'In development', live: 'Live', oss: 'Open source' },
      visit: 'Visit',
    },
    projects: {
      over: 'Projects', h2: 'Earlier projects.',
      lead: 'Client, team and personal work from previous years.',
      details: 'Details', private: 'Private code', code: 'Code', play: 'Google Play', site: 'Website',
      back: 'All projects', about: 'About the project', features: 'Highlights', tech: 'Stack',
      links: 'Links', imageNone: 'No screenshot',
    },
    experience: {
      over: 'Experience', h2: 'Where I have worked.',
      present: 'present', current: 'Current', to: 'to',
    },
    skills: {
      over: 'Skills', h2: 'What I work with.',
      lead: 'The tools I use day to day across mobile, backend, infra and product.',
    },
    recs: {
      over: 'Recommendations', h2: 'What colleagues say.',
      lead: 'From people I have worked with.', note: '',
    },
    company: {
      over: 'Company', h2: 'The company behind the apps.',
      body: 'A software company that develops and publishes mobile apps. It is also the company I work through as a contractor.',
      legal: 'Legal name', cnpj: 'CNPJ (Brazilian company ID)', loc: 'Location', contact: 'Contact', locVal: 'São Paulo, Brazil',
    },
    contact: {
      over: 'Contact', h2: 'Let’s talk.',
      body: 'For apps, partnerships or work, email is the fastest way to reach me.',
      email: 'Email', linkedin: 'LinkedIn', github: 'GitHub',
    },
    foot: { rights: 'All rights reserved.', en: 'English', pt: 'Português', site: 'Site' },
    notFound: { title: 'Page not found', h1: 'This page does not exist.', body: 'The link may be old or mistyped.', home: 'Go to the home page' },
  },

  pt: {
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    meta: {
      title: 'Gabriel Palmyro, Mobile Engineer (Flutter)',
      desc: 'Gabriel Palmyro é Mobile Engineer (Flutter) em São Paulo. Mobile Engineer na CarOnSale, cofundador do Heat Game e do Sequência, e criador do Forgetless e do Dustpan.',
    },
    skip: 'Pular para o conteúdo',
    langHint: { text: 'Prefere português?', link: 'Ver em português', close: 'Fechar' },
    nav: {
      main: 'Principal', lang: 'Idioma', home: 'Gabriel Palmyro, início',
      apps: 'Apps', projects: 'Projetos', experience: 'Experiência', company: 'Empresa', contact: 'Contato',
    },
    hero: {
      kicker: 'Mobile Engineer na CarOnSale',
      role: 'Mobile Engineer (Flutter), em São Paulo.',
      sub: 'Construo e publico apps mobile de ponta a ponta: o app em Flutter, o backend, a infra, o analytics e a página na loja.',
      ctaApps: 'Ver meus apps', ctaContact: 'Falar comigo',
      photoAlt: 'Foto de Gabriel Palmyro',
      facts: [
        ['Agora', 'Mobile Engineer na CarOnSale (Alemanha, remoto)'],
        ['Construindo', 'Forgetless, Heat Game, Sequência, Dustpan'],
        ['Stack', 'Flutter, NestJS, infra, analytics, ASO'],
        ['Formação', 'Engenharia de Computação, Instituto Federal de São Paulo'],
      ],
    },
    apps: {
      over: 'Apps', h2: 'Apps que eu construo e publico.',
      lead: 'Produtos meus, construídos, publicados e mantidos do primeiro commit até a página na loja.',
      status: { dev: 'Em desenvolvimento', live: 'Publicado', oss: 'Open source' },
      visit: 'Visitar',
    },
    projects: {
      over: 'Projetos', h2: 'Projetos anteriores.',
      lead: 'Trabalhos pra clientes, em equipe e pessoais dos últimos anos.',
      details: 'Detalhes', private: 'Código privado', code: 'Código', play: 'Google Play', site: 'Site',
      back: 'Todos os projetos', about: 'Sobre o projeto', features: 'Destaques', tech: 'Stack',
      links: 'Links', imageNone: 'Sem captura de tela',
    },
    experience: {
      over: 'Experiência', h2: 'Onde eu já trabalhei.',
      present: 'hoje', current: 'Atual', to: 'até',
    },
    skills: {
      over: 'Skills', h2: 'Com o que eu trabalho.',
      lead: 'As ferramentas que eu uso no dia a dia em mobile, backend, infra e produto.',
    },
    recs: {
      over: 'Recomendações', h2: 'O que colegas dizem.',
      lead: 'De pessoas com quem eu já trabalhei.', note: 'Depoimentos originais, em inglês.',
    },
    company: {
      over: 'Empresa', h2: 'A empresa por trás dos apps.',
      body: 'Empresa de software que desenvolve e publica aplicativos móveis. Também é por ela que eu presto serviço como desenvolvedor.',
      legal: 'Razão social', cnpj: 'CNPJ', loc: 'Localização', contact: 'Contato', locVal: 'São Paulo, Brasil',
    },
    contact: {
      over: 'Contato', h2: 'Vamos conversar.',
      body: 'Pra apps, parcerias ou trabalho, e-mail é o jeito mais rápido de falar comigo.',
      email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub',
    },
    foot: { rights: 'Todos os direitos reservados.', en: 'English', pt: 'Português', site: 'Site' },
    notFound: { title: 'Página não encontrada', h1: 'Essa página não existe.', body: 'O link pode estar antigo ou com erro de digitação.', home: 'Ir para a página inicial' },
  },
};
