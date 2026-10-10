// Work history, newest first. Entries below Heat Game come from the previous
// gabrielpalmyro.com (2025). Dates: only what is known; leave `end` null when
// the end date is unknown and `current: true` for current roles.
// Copy rule: no em or en dashes. No invented metrics.

export const EXPERIENCE = [
  {
    company: 'CarOnSale',
    current: true,
    role: { en: 'Mobile Engineer (Flutter)', pt: 'Mobile Engineer (Flutter)' },
    place: { en: 'Germany, remote', pt: 'Alemanha, remoto' },
    start: { en: 'Aug 2025', pt: 'ago. 2025' },
    end: null,
    points: {
      en: [
        'Flutter engineer on the CarOnSale mobile app, a B2B platform for used car trading in Germany.',
        'Remote from São Paulo, contracted through my own software company.',
      ],
      pt: [
        'Engenheiro Flutter no app da CarOnSale, uma plataforma B2B de compra e venda de carros usados na Alemanha.',
        'Remoto, de São Paulo, contratado pela minha própria empresa de software.',
      ],
    },
    tags: ['Flutter', 'Dart'],
  },
  {
    company: 'Heat Game',
    url: 'https://heatgame.com.br',
    current: true,
    role: { en: 'Co-founder and Mobile Engineer', pt: 'Cofundador e Mobile Engineer' },
    place: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    start: null,
    end: null,
    points: {
      en: [
        'Co-founded a game app for couples, live on iOS and Android.',
        'Build the Flutter app and the NestJS backend, and run the infra, analytics and ASO.',
      ],
      pt: [
        'Cofundei um app de jogo pra casais, publicado no iOS e no Android.',
        'Desenvolvo o app em Flutter e o backend em NestJS, e cuido de infra, analytics e ASO.',
      ],
    },
    tags: ['Flutter', 'NestJS', 'Infra', 'Analytics', 'ASO'],
  },
  {
    company: 'GSD',
    role: { en: 'Senior Software Engineer', pt: 'Senior Software Engineer' },
    place: { en: 'Austin, USA', pt: 'Austin, EUA' },
    start: { en: 'Nov 2024', pt: 'nov. 2024' },
    end: null, // end date not on the old site
    points: {
      en: [
        'Designed and built a neighborhood e-commerce app from scratch in 2 months with Flutter, Bloc, Injectable and Dio interceptors.',
        'Integrated Stripe payments, handling the logic for credit cards and other payment types.',
        'Automated CI/CD with Codemagic for Google Play and the App Store, reducing manual deployment work by 70%.',
      ],
      pt: [
        'Desenhei e construí do zero, em 2 meses, um app de e-commerce de bairro com Flutter, Bloc, Injectable e interceptors do Dio.',
        'Integrei pagamentos com Stripe, cuidando da lógica de cartão de crédito e de outros meios de pagamento.',
        'Automatizei o CI/CD com Codemagic pro Google Play e a App Store, reduzindo em 70% o trabalho manual de deploy.',
      ],
    },
    tags: ['Flutter', 'Bloc', 'Injectable', 'Stripe', 'Codemagic'],
  },
  {
    company: 'XP Inc.',
    role: { en: 'Software Engineer II', pt: 'Software Engineer II' },
    place: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    start: { en: 'Nov 2023', pt: 'nov. 2023' },
    end: { en: 'Jul 2025', pt: 'jul. 2025' },
    points: {
      en: [
        'Led the redesign and development of the Home Investments section for 1M+ users.',
        'Maintained a large monorepo serving 7 brands, with Cubit and Bloc, GetIt and Injectable.',
        'Built the Account Balance Hub, reading and writing asset data with SSE for real-time events.',
        'Wrote E2E automations with Python and Robot, reducing manual testing time by 50%.',
        'Led the migration of client portfolio features from Kotlin to Flutter.',
      ],
      pt: [
        'Liderei o redesign e o desenvolvimento da seção Home Investimentos, usada por mais de 1 milhão de pessoas.',
        'Mantive um monorepo grande que atende 7 marcas, com Cubit e Bloc, GetIt e Injectable.',
        'Construí o Account Balance Hub, lendo e escrevendo dados de ativos com SSE pra eventos em tempo real.',
        'Escrevi automações E2E com Python e Robot, reduzindo em 50% o tempo de teste manual.',
        'Liderei a migração de funcionalidades da carteira do cliente de Kotlin pra Flutter.',
      ],
    },
    tags: ['Flutter', 'Dart', 'Bloc', 'Firebase', 'Drift', 'SSE'],
  },
  {
    company: 'Omni Pharmacare',
    role: { en: 'Mid-Level Flutter Developer', pt: 'Desenvolvedor Flutter Pleno' },
    place: { en: 'Brazil', pt: 'Brasil' },
    start: { en: 'Apr 2023', pt: 'abr. 2023' },
    end: { en: 'Nov 2023', pt: 'nov. 2023' },
    points: {
      en: [
        'Took a health tech app from MVP to 50,000+ active users.',
        'Clean Architecture, unit and integration tests, GetX for state and routing.',
        'CI/CD with Codemagic for production and staging.',
      ],
      pt: [
        'Levei um app de health tech do MVP a mais de 50 mil usuários ativos.',
        'Clean Architecture, testes unitários e de integração, GetX pra estado e rotas.',
        'CI/CD com Codemagic pra produção e staging.',
      ],
    },
    tags: ['Flutter', 'GetX', 'Supabase', 'Sentry', 'PIX'],
  },
  {
    company: 'WBC Sistemas',
    role: { en: 'Mid-Level Flutter Developer', pt: 'Desenvolvedor Flutter Pleno' },
    place: { en: 'Brazil', pt: 'Brasil' },
    start: { en: 'Mar 2023', pt: 'mar. 2023' },
    end: { en: 'Aug 2023', pt: 'ago. 2023' },
    points: {
      en: [
        'Coordinated the mobile team and published 7 Flutter apps with different flavors.',
        'Redesigned existing app interfaces and built web apps with Next.js.',
      ],
      pt: [
        'Coordenei o time mobile e publiquei 7 apps Flutter com flavors diferentes.',
        'Redesenhei interfaces de apps existentes e construí aplicações web com Next.js.',
      ],
    },
    tags: ['Flutter', 'Next.js', 'Team leadership'],
  },
  {
    company: 'WBC Sistemas',
    role: { en: 'Junior Flutter Developer', pt: 'Desenvolvedor Flutter Júnior' },
    place: { en: 'Brazil', pt: 'Brasil' },
    start: { en: 'Sep 2021', pt: 'set. 2021' },
    end: { en: 'Mar 2023', pt: 'mar. 2023' },
    points: {
      en: [
        'Shipped Flutter apps to the App Store and Google Play, owning the release process.',
        'SOLID principles, Provider for state and dependency injection, Agile with Kanban.',
      ],
      pt: [
        'Publiquei apps Flutter na App Store e no Google Play, cuidando de todo o processo de release.',
        'Princípios SOLID, Provider pra estado e injeção de dependência, Agile com Kanban.',
      ],
    },
    tags: ['Flutter', 'Provider', 'SOLID', 'Agile'],
  },
  {
    company: 'Treino Fácil',
    role: { en: 'Personal project, Flutter Developer', pt: 'Projeto pessoal, Desenvolvedor Flutter' },
    place: { en: 'Brazil', pt: 'Brasil' },
    start: { en: 'Dec 2020', pt: 'dez. 2020' },
    end: null,
    points: {
      en: [
        'Took a Flutter fitness app from concept to publication on the stores.',
        '40%+ user retention over 6 months. Firebase services and CI/CD with Codemagic.',
      ],
      pt: [
        'Levei um app de treino em Flutter da ideia até a publicação nas lojas.',
        'Retenção de mais de 40% em 6 meses. Serviços do Firebase e CI/CD com Codemagic.',
      ],
    },
    tags: ['Flutter', 'Firebase', 'Provider', 'Codemagic'],
  },
];
