// Apps Gabriel builds and publishes. One entry per card on the home page,
// rendered in this order. To add an app: append an object here and put its
// icon in static/assets/img/apps/.
// Real facts only: no download counts, ratings, player counts or revenue
// unless confirmed and sourced (optional `stats`, with a source comment). Copy rule: no em or en dashes.

export const APPS = [
  {
    id: 'forgetless',
    name: 'Forgetless',
    url: 'https://getforgetless.com',
    host: 'getforgetless.com',
    icon: '/assets/img/apps/forgetless.webp',
    status: 'dev', // 'dev' | 'live' | 'oss'
    role: null,
    platforms: { en: 'iOS and Android, coming soon', pt: 'iOS e Android, em breve' },
    desc: {
      en: 'Turns the TikToks, Reels, videos and links you save into workouts, recipes, places on a map and reminders, and answers questions from your saves.',
      pt: 'Transforma os TikToks, Reels, vídeos e links que você salva em treinos, receitas, lugares no mapa e lembretes. E responde perguntas sobre seus salvos.',
    },
  },
  {
    id: 'heat-game',
    name: 'Heat Game',
    url: 'https://heatgame.com.br',
    host: 'heatgame.com.br',
    icon: '/assets/img/apps/heat-game.webp',
    status: 'live',
    role: { en: 'Co-founder', pt: 'Cofundador' },
    platforms: { en: 'iOS and Android', pt: 'iOS e Android' },
    desc: {
      en: 'A game app for couples. I co-founded it and work across the whole product: the Flutter app, the NestJS backend, infra, analytics and ASO.',
      pt: 'Um app de jogo pra casais. Sou cofundador e trabalho no produto inteiro: o app em Flutter, o backend em NestJS, infra, analytics e ASO.',
    },
  },
  {
    id: 'sequencia',
    name: 'Sequência',
    url: 'https://sequenciaparty.com',
    host: 'sequenciaparty.com',
    icon: '/assets/img/apps/sequencia.webp',
    status: 'live',
    // Confirmed by Gabriel on 2026-10-09. Source: sequenciaparty.com
    // (2,041,883 players, 4.8 stars).
    stats: [
      { en: '2M+ players', pt: '2M+ jogadores' },
      { en: '4.8 rating', pt: 'nota 4.8' },
    ],
    role: { en: 'Co-founder', pt: 'Cofundador' },
    platforms: { en: 'iOS and Android', pt: 'iOS e Android' },
    desc: {
      en: 'A cooperative party game for 2 to 14 players on a single phone. Everyone gets a secret number from 1 to 100 and gives a clue on a theme, then the group uses deduction to put the clues in order.',
      pt: 'Um party game cooperativo pra 2 a 14 jogadores num celular só. Cada um recebe um número secreto de 1 a 100 e dá uma dica sobre um tema, e o grupo usa dedução pra colocar as dicas em ordem.',
    },
  },
  {
    id: 'dustpan',
    name: 'Dustpan',
    url: 'https://github.com/GabriPalmyro/dustpan',
    host: 'github.com/GabriPalmyro/dustpan',
    icon: '/assets/img/apps/dustpan.webp',
    status: 'oss',
    role: null,
    platforms: { en: 'macOS, open source (MIT)', pt: 'macOS, open source (MIT)' },
    desc: {
      en: 'A native macOS menu bar app that watches disk, memory, CPU and GPU, and explains what is safe to clean on developer Macs: Xcode, simulators, Gradle, node_modules. SwiftUI, no dependencies.',
      pt: 'Um app nativo de barra de menus do macOS que acompanha disco, memória, CPU e GPU, e explica o que dá pra limpar com segurança num Mac de dev: Xcode, simuladores, Gradle, node_modules. SwiftUI, sem dependências.',
    },
  },
];
