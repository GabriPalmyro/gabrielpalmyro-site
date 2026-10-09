// Past projects, from the previous gabrielpalmyro.com (2025). Each one gets a
// card on the home page and a page at /projects/{slug} (and /pt/projects/{slug}).
// Copy rule: no em or en dashes. Only facts that were on the old site.

export const PROJECTS = [
  {
    slug: 'toaquirs',
    name: 'ToAquiRS',
    date: { en: 'May 2024', pt: 'Maio de 2024' },
    image: null, // the old site's screenshot was a blank image
    tags: ['Flutter', 'Firebase', 'Cloud Functions', 'Google Maps API'],
    kind: { en: 'Social impact', pt: 'Impacto social' },
    private: true,
    short: {
      en: 'Platform to help locate rescued animals in shelters after the floods in Rio Grande do Sul. Created as a social impact project to reunite pets with their owners during a natural disaster.',
      pt: 'Plataforma pra ajudar a localizar animais resgatados em abrigos depois das enchentes no Rio Grande do Sul. Um projeto de impacto social pra reunir pets e tutores durante um desastre natural.',
    },
    about: {
      en: [
        'In May 2024, severe flooding in Rio Grande do Sul displaced thousands of people and their pets. Many animals were rescued and taken to temporary shelters, but there was no central place where owners could look for them.',
        'ToAquiRS was built as a rapid response: shelter volunteers register rescued animals with photos and identifying details, and owners search that database to find their pets.',
      ],
      pt: [
        'Em maio de 2024, as enchentes no Rio Grande do Sul desalojaram milhares de pessoas e seus animais. Muitos bichos foram resgatados e levados pra abrigos temporários, mas não existia um lugar central onde os tutores pudessem procurar por eles.',
        'O ToAquiRS nasceu como resposta rápida: voluntários dos abrigos cadastram os animais resgatados com fotos e informações de identificação, e os tutores buscam nessa base pra encontrar seus pets.',
      ],
    },
    features: {
      en: [
        'Central database of rescued animals with photos and details',
        'Location-based search with the Google Maps API to find nearby shelters',
        'Flows for both shelter volunteers and pet owners',
        'Animal status updates: found, claimed, still in shelter',
        'Contact between owners and shelters',
        'Admin dashboard for shelter management',
      ],
      pt: [
        'Base central de animais resgatados, com fotos e informações',
        'Busca por localização com a API do Google Maps pra achar abrigos próximos',
        'Fluxos pra voluntários dos abrigos e pra tutores',
        'Status de cada animal: encontrado, reclamado, ainda no abrigo',
        'Contato entre tutores e abrigos',
        'Painel administrativo pra gestão dos abrigos',
      ],
    },
    links: [],
  },
  {
    slug: 'treino-facil',
    name: 'Treino Fácil',
    date: { en: 'Since Dec 2020', pt: 'Desde dez. de 2020' },
    image: '/assets/img/projects/treino-facil.webp',
    imageAlt: { en: 'Treino Fácil listing on Google Play', pt: 'Página do Treino Fácil no Google Play' },
    shot: '/assets/img/projects/treino-facil-app.webp',
    shotAlt: { en: 'Treino Fácil home screen', pt: 'Tela inicial do Treino Fácil' },
    tags: ['Flutter', 'Firebase', 'Provider', 'Codemagic'],
    kind: { en: 'Personal project', pt: 'Projeto pessoal' },
    short: {
      en: 'Personal project fitness app that allows users to organize, create, and share workout routines. Features include 150+ exercises with images and videos, ready-to-use workout plans, and personalized exercise tracking.',
      pt: 'App de treino, projeto pessoal, pra organizar, criar e compartilhar rotinas de treino. Tem mais de 150 exercícios com imagens e vídeos, treinos prontos e acompanhamento personalizado dos exercícios.',
    },
    about: {
      en: [
        'Treino Fácil lets people organize, create and share workout routines, with or without a personal trainer. Workout sheets can be split by day of the week, with or without equipment, at the gym or at home.',
        'Trainers can build and change their clients’ workouts, and anyone can add their own exercises. Ready-made workouts, split by level (beginner and advanced), cover daily use.',
      ],
      pt: [
        'O Treino Fácil permite organizar, criar e compartilhar rotinas de treino, com ou sem personal trainer. As fichas podem ser divididas por dia da semana, com ou sem equipamento, na academia ou em casa.',
        'O personal monta e ajusta o treino dos alunos, e qualquer pessoa pode adicionar os próprios exercícios. Treinos prontos, separados por nível (iniciante e avançado), cobrem o dia a dia.',
      ],
    },
    features: {
      en: [
        'More than 150 exercises with images and videos, free to access',
        'More than 6 ready-made workouts for daily use',
        'Personal trainers manage their clients’ workouts',
        'Workout sheets with uni-set and bi-set exercises',
        'Add your own exercises and adjust sets, reps and loads',
        'Firebase: Firestore, Storage, notifications and Remote Config',
        'CI/CD with Codemagic, deploying to Firebase App Distribution',
      ],
      pt: [
        'Mais de 150 exercícios com imagens e vídeos, de graça',
        'Mais de 6 treinos prontos pro dia a dia',
        'Personal trainer gerencia o treino dos alunos',
        'Fichas com exercícios uni-set e bi-set',
        'Adicione seus exercícios e ajuste séries, repetições e cargas',
        'Firebase: Firestore, Storage, notificações e Remote Config',
        'CI/CD com Codemagic, publicando no Firebase App Distribution',
      ],
    },
    links: [
      { kind: 'play', url: 'https://play.google.com/store/apps/details?id=br.com.palmyro.treino_facil' },
      { kind: 'code', url: 'https://github.com/GabriPalmyro/treino_facil' },
    ],
  },
  {
    slug: 'own-quest',
    name: 'Own Quest',
    date: { en: 'Feb 2023 to Jul 2023', pt: 'Fev. a jul. de 2023' },
    image: '/assets/img/projects/own-quest.webp',
    imageAlt: { en: 'Own Quest organization page on GitHub', pt: 'Página da organização do Own Quest no GitHub' },
    tags: ['React', 'TypeScript', 'NestJS', 'MySQL', 'AWS EC2', 'Vercel'],
    kind: { en: 'Team project', pt: 'Projeto em equipe' },
    short: {
      en: 'Interactive platform for creating and playing gamified storylines. Built with React (TypeScript) frontend and NestJS backend, using MySQL. Deployed backend on Amazon EC2 and frontend on Vercel.',
      pt: 'Plataforma interativa pra criar e jogar histórias gamificadas. Frontend em React (TypeScript) e backend em NestJS, com MySQL. Backend no Amazon EC2 e frontend na Vercel.',
    },
    about: {
      en: [
        'Own Quest is a platform for creating customized playable stories. It mixes interactive fiction and choose-your-own-adventure books: creators write branching narratives with multiple paths, decisions and outcomes, and players go through them.',
        'I was the project director: I set the direction and the architecture and built both the frontend and the backend.',
      ],
      pt: [
        'O Own Quest é uma plataforma de criação de histórias personalizadas jogáveis. Mistura ficção interativa e livro-jogo: quem cria escreve narrativas com vários caminhos, decisões e finais, e quem joga escolhe o rumo.',
        'Eu fui o diretor do projeto: defini a direção e a arquitetura e construí o frontend e o backend.',
      ],
    },
    features: {
      en: [
        'Led the project vision and development strategy',
        'Architected the application and chose the stack',
        'Built the React frontend with TypeScript',
        'Built the NestJS API and the MySQL schema for branching stories',
        'Set up deployment on AWS EC2 (backend) and Vercel (frontend)',
      ],
      pt: [
        'Liderei a visão do projeto e a estratégia de desenvolvimento',
        'Desenhei a arquitetura e escolhi a stack',
        'Construí o frontend em React com TypeScript',
        'Construí a API em NestJS e o schema MySQL das histórias ramificadas',
        'Configurei o deploy no AWS EC2 (backend) e na Vercel (frontend)',
      ],
    },
    featuresTitle: { en: 'My role', pt: 'Meu papel' },
    links: [{ kind: 'code', url: 'https://github.com/os-ze-ruela' }],
  },
  {
    slug: 'omni-saude',
    name: 'Omni Saúde',
    date: { en: 'Apr 2023 to Nov 2023', pt: 'Abr. a nov. de 2023' },
    image: '/assets/img/projects/omni-saude.webp',
    imageAlt: { en: 'Omni website with the app on two phones', pt: 'Site da Omni com o app em dois celulares' },
    tags: ['Flutter', 'GetX', 'Supabase', 'PIX'],
    kind: { en: 'Health tech', pt: 'Health tech' },
    private: true,
    short: {
      en: 'Healthcare app built with Flutter that helps users find medications, schedule deliveries, and manage prescriptions. Integrated payment systems and real-time features.',
      pt: 'App de saúde feito em Flutter que ajuda a encontrar medicamentos, agendar entregas e gerenciar receitas. Com pagamentos integrados e recursos em tempo real.',
    },
    about: {
      en: [
        'Omni Saúde helps people in Brazil find and buy medication: search, compare prices, schedule deliveries and manage prescriptions in one place, with PIX payments built in.',
        'As a Mid-Level Flutter Developer at Omni Pharmacare (April to November 2023), I helped take the app from MVP to a stable release used by more than 50,000 active users.',
      ],
      pt: [
        'O Omni Saúde ajuda pessoas no Brasil a encontrar e comprar medicamentos: busca, comparação de preços, agendamento de entrega e gestão de receitas num lugar só, com pagamento via PIX.',
        'Como Desenvolvedor Flutter Pleno na Omni Pharmacare (abril a novembro de 2023), ajudei a levar o app do MVP a uma versão estável usada por mais de 50 mil usuários ativos.',
      ],
    },
    features: {
      en: [
        'Took the app from MVP to 50,000+ active users',
        'Clean Architecture and design patterns for maintainable code',
        'Payments, including PIX',
        'Barcode scanner and prescription QR code reader',
        'Real-time updates and notifications with Supabase',
        'CI/CD with Codemagic for production and staging',
        'Unit and integration tests, Scrum with Jira',
      ],
      pt: [
        'Levei o app do MVP a mais de 50 mil usuários ativos',
        'Clean Architecture e design patterns pra um código sustentável',
        'Pagamentos, incluindo PIX',
        'Leitor de código de barras e de QR code de receitas',
        'Atualizações e notificações em tempo real com Supabase',
        'CI/CD com Codemagic pra produção e staging',
        'Testes unitários e de integração, Scrum com Jira',
      ],
    },
    featuresTitle: { en: 'My contribution', pt: 'Minha contribuição' },
    links: [{ kind: 'site', url: 'https://www.omnisaude.app' }],
  },
];
