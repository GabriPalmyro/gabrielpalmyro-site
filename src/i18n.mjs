// Interface and section copy, EN and PT-BR. Content lists (apps, projects,
// experience, skills, recommendations) live in src/content/.
// Copy rules: no em or en dashes anywhere, in either language. Rewrite the
// sentence with commas, periods, colons or parentheses. No invented numbers.
// Voice: Gabriel, first person, direct and concrete. Sentence case. No labels
// above headings, no "not X but Y", no slogans.
// PT-BR is written, not translated: casual "você", "pra".

export const STRINGS = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    meta: {
      title: 'Gabriel Palmyro, Mobile Engineer (Flutter)',
      desc: 'Gabriel Palmyro is a Mobile Engineer (Flutter) at CarOnSale, based in São Paulo, Brazil. He co-founded Heat Game and Sequência and builds Forgetless and Dustpan.',
    },
    skip: 'Skip to content',
    langHint: { text: 'Prefer English?', link: 'View in English', close: 'Dismiss' },
    nav: {
      main: 'Main', lang: 'Language', home: 'Gabriel Palmyro, home', foot: 'Site',
      apps: 'Apps', projects: 'Projects', experience: 'Experience', company: 'Company', contact: 'Contact',
    },
    hero: {
      role: 'Mobile Engineer (Flutter) at CarOnSale, based in São Paulo, Brazil.',
      sub: 'I also build and publish my own apps end to end: the Flutter app, the backend, the infra, the analytics and the store listing.',
      ctaApps: 'See my apps', ctaContact: 'Contact',
      appsLabel: 'My apps',
      photoAlt: 'Portrait of Gabriel Palmyro',
      facts: [
        ['Now', 'Mobile Engineer at CarOnSale (Germany, remote)'],
        ['Building', 'Forgetless, Heat Game, Sequência, Dustpan'],
        ['Stack', 'Flutter, NestJS, infra, analytics, ASO'],
        ['Education', 'Computer Engineering, Federal Institute of São Paulo'],
      ],
    },
    apps: {
      h2: 'Apps I build and publish.',
      lead: 'Two are live on the App Store and Google Play, one is in development and one is open source.',
      index: 'Apps on this page',
      status: { dev: 'In development', live: 'Live', oss: 'Open source' },
      visit: 'Visit',
      statLabel: 'Sequência in numbers',
    },
    projects: {
      h2: 'Earlier projects.',
      lead: 'Client, team and personal work from 2020 to 2024.',
      details: 'Details', private: 'Private code', code: 'Code', play: 'Google Play', site: 'Website',
      back: 'All projects', about: 'About the project', features: 'Highlights', tech: 'Stack',
      links: 'Links', imageNone: 'No screenshot',
    },
    experience: {
      h2: 'Where I have worked.',
      present: 'present', current: 'Current', to: 'to',
    },
    skills: {
      h2: 'What I work with.',
      lead: 'The tools I use day to day across mobile, backend, infra and product.',
    },
    recs: {
      h2: 'What colleagues say.',
      lead: '', note: '',
    },
    company: {
      h2: 'The company behind the apps.',
      body: 'My software company. It develops and publishes mobile apps, and I work through it as a contractor.',
      legal: 'Legal name', cnpj: 'CNPJ (Brazilian company ID)', loc: 'Location', contact: 'Contact', locVal: 'São Paulo, Brazil',
    },
    contact: {
      h2: 'Email me about apps, partnerships or work.',
      body: 'It’s the fastest way to reach me. I’m also on LinkedIn and GitHub.',
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
      desc: 'Gabriel Palmyro é Mobile Engineer (Flutter) na CarOnSale, em São Paulo. Cofundou o Heat Game e o Sequência e constrói o Forgetless e o Dustpan.',
    },
    skip: 'Pular para o conteúdo',
    langHint: { text: 'Prefere português?', link: 'Ver em português', close: 'Fechar' },
    nav: {
      main: 'Principal', lang: 'Idioma', home: 'Gabriel Palmyro, início', foot: 'Site',
      apps: 'Apps', projects: 'Projetos', experience: 'Experiência', company: 'Empresa', contact: 'Contato',
    },
    hero: {
      role: 'Mobile Engineer (Flutter) na CarOnSale, em São Paulo.',
      sub: 'Também construo e publico meus próprios apps de ponta a ponta: o app em Flutter, o backend, a infra, o analytics e a página na loja.',
      ctaApps: 'Ver meus apps', ctaContact: 'Contato',
      appsLabel: 'Meus apps',
      photoAlt: 'Foto de Gabriel Palmyro',
      facts: [
        ['Agora', 'Mobile Engineer na CarOnSale (Alemanha, remoto)'],
        ['Construindo', 'Forgetless, Heat Game, Sequência, Dustpan'],
        ['Stack', 'Flutter, NestJS, infra, analytics, ASO'],
        ['Formação', 'Engenharia de Computação, Instituto Federal de São Paulo'],
      ],
    },
    apps: {
      h2: 'Apps que eu construo e publico.',
      lead: 'Dois estão na App Store e no Google Play, um está em desenvolvimento e um é open source.',
      index: 'Apps desta página',
      status: { dev: 'Em desenvolvimento', live: 'Publicado', oss: 'Open source' },
      visit: 'Visitar',
      statLabel: 'Sequência em números',
    },
    projects: {
      h2: 'Projetos anteriores.',
      lead: 'Trabalhos pra clientes, em equipe e pessoais, de 2020 a 2024.',
      details: 'Detalhes', private: 'Código privado', code: 'Código', play: 'Google Play', site: 'Site',
      back: 'Todos os projetos', about: 'Sobre o projeto', features: 'Destaques', tech: 'Stack',
      links: 'Links', imageNone: 'Sem captura de tela',
    },
    experience: {
      h2: 'Onde eu já trabalhei.',
      present: 'hoje', current: 'Atual', to: 'até',
    },
    skills: {
      h2: 'Com o que eu trabalho.',
      lead: 'As ferramentas que eu uso no dia a dia em mobile, backend, infra e produto.',
    },
    recs: {
      h2: 'O que colegas dizem.',
      lead: '', note: 'Depoimentos originais, em inglês.',
    },
    company: {
      h2: 'A empresa por trás dos apps.',
      body: 'Minha empresa de software. Ela desenvolve e publica aplicativos móveis, e é por ela que eu presto serviço como desenvolvedor.',
      legal: 'Razão social', cnpj: 'CNPJ', loc: 'Localização', contact: 'Contato', locVal: 'São Paulo, Brasil',
    },
    contact: {
      h2: 'Me manda um e-mail sobre apps, parcerias ou trabalho.',
      body: 'É o jeito mais rápido de falar comigo. Também estou no LinkedIn e no GitHub.',
      email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub',
    },
    foot: { rights: 'Todos os direitos reservados.', en: 'English', pt: 'Português', site: 'Site' },
    notFound: { title: 'Página não encontrada', h1: 'Essa página não existe.', body: 'O link pode estar antigo ou com erro de digitação.', home: 'Ir para a página inicial' },
  },
};
