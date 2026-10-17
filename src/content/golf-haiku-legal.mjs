// Golf Haiku legal pages: privacy policy and terms of use, EN + PT-BR.
// URLs are fixed: the store listings and the AdMob consent message link to them.
// The legal name and CNPJ come from site.config.mjs and are stated once per
// document; "we" is used after that. Section bodies are trusted HTML.
// Copy rules: no em or en dashes (the build fails on them), plain language,
// PT-BR written for Brazilian readers, not translated word by word.
// When anything below changes, update EFFECTIVE as well.

export const EFFECTIVE = { iso: '2026-10-17', en: '17 October 2026', pt: '17 de outubro de 2026' };

const ext = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;

const LINKS = {
  googlePartners: { en: 'https://policies.google.com/technologies/partner-sites', pt: 'https://policies.google.com/technologies/partner-sites?hl=pt-BR' },
  googlePrivacy: { en: 'https://policies.google.com/privacy', pt: 'https://policies.google.com/privacy?hl=pt-BR' },
  revenuecat: 'https://www.revenuecat.com/privacy/',
  posthog: 'https://posthog.com/privacy',
  firebase: { en: 'https://firebase.google.com/support/privacy', pt: 'https://firebase.google.com/support/privacy' },
  anpd: 'https://www.gov.br/anpd/pt-br',
  playTerms: { en: 'https://play.google.com/about/play-terms/', pt: 'https://play.google.com/intl/pt-BR/about/play-terms/' },
  appleEula: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
  playRefund: { en: 'https://support.google.com/googleplay/answer/2479637', pt: 'https://support.google.com/googleplay/answer/2479637?hl=pt-BR' },
  appleRefund: 'https://reportaproblem.apple.com',
  tenjin: 'https://tenjin.com/privacy/',
  applovin: 'https://www.applovin.com/privacy/',
  unity: 'https://unity.com/legal/game-player-and-app-user-privacy-policy',
  liftoff: 'https://liftoff.ai/privacy-policy/',
  mintegral: 'https://www.mintegral.com/en/privacy',
  pangle: 'https://www.pangleglobal.com/terms/28179',
};

export const golfHaikuLegal = (cfg) => {
  const { legalName, cnpj } = cfg.company;
  const mail = `<a href="mailto:${cfg.email}" translate="no">${cfg.email}</a>`;
  const company = `<span translate="no">${legalName}</span>`;
  const appId = '<span class="mono" translate="no">com.myroapps.golfhaiku</span>';
  const paths = {
    privacy: { en: '/golf-haiku/privacy', pt: '/pt/golf-haiku/privacidade' },
    terms: { en: '/golf-haiku/terms', pt: '/pt/golf-haiku/termos' },
  };

  const privacy = {
    paths: paths.privacy,
    en: {
      title: 'Golf Haiku Privacy Policy',
      desc: 'How Golf Haiku, a minigolf game for Android and iOS, handles data: what stays on your device, what the ads, purchases, analytics and crash reporting partners receive, and your choices.',
      h1: 'Privacy Policy',
      lead: 'What data Golf Haiku, our minigolf game for Android and iOS, uses, why, who receives it and the choices you have.',
      related: `Read also the <a href="${paths.terms.en}">Terms of Use</a>.`,
      sections: [
        { id: 'who-we-are', h: 'Who we are', html: `
<p>Golf Haiku is a minigolf game for Android and iOS (app ID ${appId}). It is published by ${company}, a company registered in Brazil under CNPJ <span class="num">${cnpj}</span>, based in São Paulo. In this policy, “we”, “us” and “our” mean that company, which is the controller of the personal data described here.</p>
<p>For anything about privacy, email ${mail}.</p>` },
        { id: 'short-version', h: 'The short version', html: `
<ul>
<li>There are no accounts, no sign-in, no chat and nothing for you to write or upload.</li>
<li>Your progress, coins and settings are stored only on your device. The only thing that goes to a server of ours is the Hole of the day board, and only if you choose to join it.</li>
<li>The app creates a random ID for each install. It identifies the install, not you, and is used for analytics, purchases and crash reports.</li>
<li>Ads are served by Google AdMob, which can also fill a slot with an ad from other ad networks (AppLovin, Unity, Liftoff, Mintegral and Pangle). Where the law requires it, the app asks for your consent first, and on iPhone and iPad your advertising identifier is used only if you allow tracking.</li>
<li>Purchases are paid through Google Play or the App Store. We never see your card details.</li>
<li>You can change your ad choices at any time, and uninstalling the app deletes everything it stored on your device.</li>
</ul>` },
        { id: 'on-your-device', h: 'What stays on your device', html: `
<p>The app saves on your device: your progress (holes and balls), your coin balance, settings such as sound, a record of purchases already delivered (so each purchase is granted only once), the install ID described below and your ad consent choices (saved by Google's consent tool). If you join the Hole of the day board, it also keeps your board name, the days it sent and the sign-in key of the board's anonymous account. None of this is copied to a server of ours, apart from what the board needs (below). Uninstalling the app or clearing its data deletes it.</p>
<p>Some of these values, like the hole you are on or how many coins you have, are included in the analytics events described below.</p>` },
        { id: 'install-id', h: 'The install ID', html: `
<p>The first time you open Golf Haiku, it creates a random identifier (a version 4 UUID) and saves it on your device. It does not come from your device's hardware, your phone number, your name or any account. The app shows it as your <strong>Player ID</strong> in the pause menu, where you can tap to copy it.</p>
<p>We use it as the ID for analytics, purchases and crash reports, so that events from the same install can be grouped and each purchase can be matched to the install that made it. If you uninstall and reinstall the app, a new ID is created and the old one is no longer used.</p>` },
        { id: 'hole-of-the-day-board', h: 'The Hole of the day board (optional)', html: `
<p>Every day the game has a Hole of the day, the same hole for every player. You can choose to join its board, which ranks the day's players by the fewest tries and then by the fastest winning shot, and also shows the longest runs of days in a row. Joining is optional: until you tap “Join the board”, nothing about your results is stored on our side.</p>
<p>Before you join, the board shows where your result would stand. To work that out, the app asks the board how many results beat yours. That request carries your score but no ID, and it is not stored.</p>
<p>When you join, the app creates an anonymous account in Firebase Authentication, a Google service: a random ID, with no email, no password and no link to the install ID, your advertising ID or your identity. The board then stores, in Cloud Firestore, another Firebase service, on Google servers in the United States (see “International transfers”):</p>
<ul>
<li>your board name, made of two words and a number from fixed lists (you can change it, but only to another name from the same lists, so nobody can write free text);</li>
<li>for each day you sink the Hole of the day: how many tries it took, how long the winning shot rolled, your run of days in a row and when the result arrived;</li>
<li>the winning shot itself (its direction, strength and timing), which other players never see. We keep it so we can replay it with the game's physics and check that it was really played;</li>
<li>your current and best run of days, and the last day you sent.</li>
</ul>
<p>Other players see your board name, tries, roll time and run of days. Results go out when you have a connection: if you play offline, the app keeps them and sends them later, for up to a week.</p>
<p>To keep the board fair, its requests carry a Firebase App Check token. On Android it comes from Google Play Integrity and on iPhone and iPad from Apple's DeviceCheck, and it tells the board that the request comes from the genuine app on a genuine device. Google and Apple use signals about your device to issue it, under their own policies. If a result could not have been played (its shot does not sink when we replay it), we delete it and block that board ID.</p>
<p>You can leave at any time with “Leave” on the board. The app then deletes your board record, the results it sent with their shots, and the anonymous account. Anything left over is deleted automatically, as described under “How long we keep data”.</p>` },
        { id: 'who-receives-data', h: 'Who receives data', html: `
<p>The app sends data directly to the service providers below. Each one receives only what it needs for its job.</p>
<h3 class="h4">Google AdMob (ads) and Google's consent tool</h3>
<p>Golf Haiku is free and shows ads: optional rewarded ads, which you choose to watch for a reward such as extra balls or coins, and full-screen ads at natural breaks, between holes or at the end of a game. They are served by Google AdMob, which receives:</p>
<ul>
<li>your device's advertising ID (the Android advertising ID or, on iPhone and iPad, Apple's IDFA only if you allow tracking);</li>
<li>your IP address and the approximate location derived from it;</li>
<li>device and app information, such as model, operating system, language and app version;</li>
<li>how you interact with ads, such as views, taps and rewarded ads watched to the end;</li>
<li>your consent choices.</li>
</ul>
<p>Before any ad is requested, the app runs Google's User Messaging Platform. Depending on where you are, it shows a consent form (in the European Economic Area, the UK and Switzerland), lets you opt out of the “sale” or “sharing” of your data for targeted ads (in US states with privacy laws) and, on iPhone and iPad, shows a short explanation followed by Apple's App Tracking Transparency prompt.</p>
<p>Whether ads are personalised depends on those choices and on your device's ad settings. Non-personalised ads still use some data, such as your IP address and device information, to deliver ads, limit how often you see them, measure them and prevent fraud.</p>
<p>Google uses this data under its own policies. See ${ext(LINKS.googlePartners.en, 'how Google uses information from sites or apps that use its services')} and the ${ext(LINKS.googlePrivacy.en, 'Google Privacy Policy')}.</p>
<h3 class="h4">Other ad networks, through AdMob mediation</h3>
<p>To keep the game free, AdMob can fill an ad slot with an ad from another network, chosen in a real-time auction: AppLovin, Unity Ads, Liftoff Monetize (formerly Vungle), Mintegral and Pangle. Their software is built into the app and starts with it, so they receive the same kinds of data as AdMob even when they do not win a slot: your device's advertising ID (on iPhone and iPad, only if you allow tracking), your IP address and the approximate location derived from it, device and app information, how you interact with their ads and your consent choices. Google's consent form lists them as ad partners, and they follow the choices you make there.</p>
<p>Each network uses this data under its own policy, as an independent controller: ${ext(LINKS.applovin, 'AppLovin')}, ${ext(LINKS.unity, 'Unity')}, ${ext(LINKS.liftoff, 'Liftoff')}, ${ext(LINKS.mintegral, 'Mintegral')} and ${ext(LINKS.pangle, 'Pangle (its policy depends on your region)')}.</p>
<h3 class="h4">RevenueCat (purchases)</h3>
<p>RevenueCat validates and keeps the record of in-app purchases so they can be delivered and restored. It receives the install ID, the products you buy (product, price, currency, transaction identifiers and dates), device and app information and your IP address. It may attach the install ID to the purchase in Google Play or the App Store, so a purchase can be matched to the install. Payment is processed by Google or Apple under their own terms: we never receive your card details, name or email address. See ${ext(LINKS.revenuecat, "RevenueCat's privacy policy")}.</p>
<h3 class="h4">PostHog (product analytics)</h3>
<p>We use PostHog to understand how the game is played, so we can tune difficulty, fix confusing parts and decide what to build next. The app sends events such as app opened, hole started, shot, hole sunk, miss, game over, continue, shop opened, ad watched, purchase and restore, with game values like the hole number, balls, shots and coins.</p>
<p>With each event, PostHog receives the install ID, device and app information (such as model, operating system, language, time zone, screen size and app version) and your IP address, which it uses to estimate a coarse location such as country and city. Session recording is turned off. We look at this data in aggregate and do not try to find out who you are. See ${ext(LINKS.posthog, "PostHog's privacy policy")}.</p>
<h3 class="h4">Firebase Crashlytics (crash reports)</h3>
<p>If the app crashes or hits a serious error, Firebase Crashlytics, a Google service, collects a crash report: where in the code it happened, device model, operating system and app version, the state of the app at the time (such as free memory and screen orientation), a Crashlytics installation ID and our install ID. We use these reports only to find and fix bugs. See ${ext(LINKS.firebase.en, 'Privacy and Security in Firebase')}.</p>
<h3 class="h4">Firebase Authentication, Cloud Firestore and App Check (the Hole of the day board)</h3>
<p>If you join the Hole of the day board, these Google services hold and protect it as described above. Like any online service, they also receive your IP address and basic device information with each request. Google processes this data on our behalf. See ${ext(LINKS.firebase.en, 'Privacy and Security in Firebase')}.</p>
<h3 class="h4">Google Analytics for Firebase and Tenjin (measuring our ad campaigns)</h3>
<p>When we advertise Golf Haiku, we need to know which ads lead to installs and to players who keep playing. For that the app uses Google Analytics for Firebase, a Google service that reports to Google Ads, and Tenjin, which reports to the other ad networks we buy ads from. They receive your device's advertising ID (on iPhone and iPad, only if you allow tracking), your IP address, device and app information, information about the ad you saw or tapped before installing, when the app is opened and for how long, a few game events (finishing the tutorial, and the total of holes sunk reaching 10, 25, 50, 100 and 250), the revenue of the ads you see and, in Google Analytics, in-app purchases. Where a consent form is shown, they follow the choices you made in it. They process this data on our behalf, and we use it only in aggregate to measure our campaigns. See ${ext(LINKS.firebase.en, 'Privacy and Security in Firebase')} and ${ext(LINKS.tenjin, "Tenjin's privacy policy")}.</p>
<h3 class="h4">Google Play and the App Store</h3>
<p>Google and Apple handle downloads, payments and updates under their own privacy policies. They give us sales reports and aggregated statistics and, if you agreed to share it with developers, diagnostic data such as crash reports.</p>
<h3 class="h4">Other cases</h3>
<p>We may disclose data when the law or a valid order from an authority requires it, or to protect our rights or the safety of users. If the app or our company is sold or reorganised, the data may pass to the new owner, who must keep honouring this policy. We do not sell your data for money and we do not share it with anyone else.</p>` },
        { id: 'legal-bases', h: 'Why we use data, and our legal bases', html: `
<p>Under Brazil's LGPD, the EU GDPR and the UK GDPR, each use of personal data needs a legal basis. These are ours:</p>
<ul>
<li><strong>Delivering and restoring purchases, and helping with them:</strong> performing our contract with you, and legal obligations such as tax and accounting records.</li>
<li><strong>Personalised ads and tracking:</strong> your consent, given in the consent form or in Apple's tracking prompt. Where no consent form is shown, our legitimate interest in keeping the game free, which you can oppose at any time in your device's ad settings.</li>
<li><strong>Non-personalised ads, ad measurement and fraud prevention:</strong> our legitimate interest in funding a free game.</li>
<li><strong>Crash reports:</strong> our legitimate interest in keeping the app working and secure.</li>
<li><strong>Analytics:</strong> our legitimate interest in improving the game, using pseudonymous data looked at in aggregate.</li>
<li><strong>Measuring our ad campaigns:</strong> your consent where a consent form or Apple's tracking prompt is shown; otherwise our legitimate interest in knowing which of our ads work, which you can oppose at any time in your device's ad settings.</li>
<li><strong>Answering your messages and requests:</strong> our legitimate interest in helping you, and our legal obligations under data protection law.</li>
<li><strong>The Hole of the day board:</strong> your consent, given when you join and withdrawn when you leave. Checking results and blocking cheats there: our legitimate interest in a fair board.</li>
</ul>
<p>Where we rely on legitimate interest, we have weighed it against your interests, kept the data to what is needed and tied it to a random ID instead of your identity. You can object at any time (see “Your rights”).</p>` },
        { id: 'your-choices', h: 'Your choices', html: `
<ul>
<li><strong>Privacy settings in the app.</strong> Where Google's privacy messages apply to your region, the pause menu shows “Privacy settings”. It opens Google's form, where you can change or withdraw your consent or, in US states with privacy laws, opt out of the sale or sharing of your data for targeted ads.</li>
<li><strong>Android.</strong> In your device settings (usually Settings &gt; Privacy &gt; Ads, or Settings &gt; Google &gt; Ads), you can delete or reset your advertising ID. Once it is deleted, apps no longer receive it.</li>
<li><strong>iPhone and iPad.</strong> In Settings &gt; Privacy &amp; Security &gt; Tracking, you can turn tracking off for Golf Haiku or for all apps.</li>
<li><strong>Analytics, campaign measurement and crash reports.</strong> There is no switch in the app to turn them off. You can object by email: we will delete the data linked to your install and leave it out of further analysis.</li>
<li><strong>The Hole of the day board.</strong> Joining is your choice, and “Leave” on the board deletes your data there at any time.</li>
<li><strong>Uninstalling.</strong> Uninstalling the app deletes all the data it stored on your device, including the install ID, and stops all collection.</li>
</ul>
<p>You do not have to give us any data to play, and refusing consent does not block the game: you may still see ads, but they will not be personalised.</p>` },
        { id: 'your-rights', h: 'Your rights', html: `
<p>Wherever you live, you can ask us to:</p>
<ul>
<li>tell you whether we process data about you, and give you a copy;</li>
<li>correct it;</li>
<li>delete it;</li>
<li>send it to you or to another service in a portable format;</li>
<li>stop or limit a use of it, or object to a use based on legitimate interest;</li>
<li>tell you who we share it with.</li>
</ul>
<p>You can also withdraw your consent at any time, which does not affect what happened before. We do not make decisions about you based only on automated processing that have legal or similarly significant effects.</p>
<h3 class="h4">Brazil (LGPD)</h3>
<p>You have the rights in article 18 of the Lei Geral de Proteção de Dados (Law 13,709/2018), including confirmation that we process your data, access, correction, anonymisation, blocking or deletion of unnecessary or excessive data, portability, deletion of data processed with your consent, information about who we share data with and about the consequences of refusing consent, and revocation of consent. You can also petition the national data protection authority, the ${ext(LINKS.anpd, 'ANPD')}.</p>
<h3 class="h4">European Economic Area, United Kingdom and Switzerland</h3>
<p>You have the rights of access, rectification, erasure, restriction, portability and objection, and the right to withdraw consent. You can complain to the data protection authority where you live or work, such as the ICO in the UK or the FDPIC in Switzerland.</p>
<h3 class="h4">United States</h3>
<p>Some state laws, such as California's CCPA as amended by the CPRA, give you the right to know what personal information we collect, to access, correct and delete it, to opt out of its sale or sharing, and not to be treated differently for using these rights. You can also make a request through an authorised agent.</p>
<p>We collect these categories of personal information, from the app on your device, for the purposes in this policy: identifiers (install ID, advertising ID, IP address and, if you join the Hole of the day board, its anonymous ID), commercial information (purchase records), internet or other electronic network activity (gameplay events, ad interactions and, if you join the board, your daily results) and approximate location derived from your IP address. We disclose them to the service providers listed above.</p>
<p>We do not sell personal information for money. Letting Google and the networks under “Other ad networks” use your advertising ID and related data for personalised ads may count as “selling” or “sharing” for cross-context behavioural advertising under these laws. You can opt out with “Privacy settings” in the app (where shown) or in your device's ad settings. We do not collect sensitive personal information, and we do not knowingly sell or share the personal information of anyone under 16.</p>
<h3 class="h4">How to make a request</h3>
<p>Email ${mail} with your <strong>Player ID</strong> (pause menu, tap to copy). Because there are no accounts and we do not know who you are, that ID is how we find your data; if you no longer have the app, tell us your device model, roughly when you played and, for a purchase, the order number on your Google Play or App Store receipt. If we can link your request to an install ID, we delete or export the analytics, purchase and crash data tied to it at our providers, except records we must keep by law, such as tax records of purchases. If we cannot reasonably link the request to any data, we will tell you. On the Hole of the day board, “Leave” deletes your data at once; without the app, tell us your board name and the days you played. Ad data that Google and the other ad networks handle as independent controllers follows their own policies, and you can exercise your rights with them directly. We answer within the time limits set by the law that applies to you.</p>` },
        { id: 'international-transfers', h: 'International transfers', html: `
<p>We are based in Brazil, and our providers may process data in the United States and in other countries. When data leaves your country, the transfer relies on safeguards the law recognises, such as the standard contractual clauses in the providers' data processing terms or an adequacy decision. The networks under “Other ad networks” may also process data in the United States and in Asia.</p>
<p>The Hole of the day board, if you join it, is stored on Google servers in the United States: your board name, your results and their shots, your runs of days and the board's anonymous ID. Under Brazil's LGPD, this transfer relies on article 33, II, b: the standard contractual clauses in Google's data processing terms for Firebase, which bind Google to protect the data as the LGPD requires. For players in the European Economic Area, the United Kingdom and Switzerland, it relies on the safeguards in the same terms, such as the European Commission's standard contractual clauses.</p>` },
        { id: 'retention', h: 'How long we keep data', html: `
<ul>
<li><strong>On your device:</strong> until you uninstall the app or clear its data.</li>
<li><strong>Analytics (PostHog):</strong> as long as needed to understand and improve the game, and no longer than the retention period set in our PostHog project.</li>
<li><strong>Crash reports (Crashlytics):</strong> as long as needed to fix the problems they show, and no longer than Firebase's retention period for crash data.</li>
<li><strong>Campaign measurement (Google Analytics, Tenjin):</strong> as long as needed to measure our campaigns, and no longer than the retention periods set in our Google Analytics property and Tenjin account.</li>
<li><strong>Purchases (RevenueCat, Google Play, App Store):</strong> as long as needed to deliver, restore and support your purchases, and for as long as tax and accounting laws require.</li>
<li><strong>The Hole of the day board (Firebase):</strong> each day's results and shots are deleted automatically 30 days after they arrive, and your board record (name and runs of days) 60 days after your last result, or at once when you leave. Board IDs blocked for cheating are kept as long as needed to keep the board fair.</li>
<li><strong>Ads (Google):</strong> under Google's own retention policies.</li>
<li><strong>Your emails to us:</strong> as long as needed to handle your request and keep a record that we did.</li>
</ul>` },
        { id: 'security', h: 'Security', html: `
<p>The app sends data to these providers over encrypted connections (HTTPS). Access to their dashboards is limited to the people who work on Golf Haiku. No system is perfectly secure, so if an incident is likely to affect you, we will take the steps the law requires, including notifying the authorities and you when required.</p>` },
        { id: 'children', h: 'Children', html: `
<p>Golf Haiku is meant for a general audience and is not directed at children under 13. It has no chat, and names on the Hole of the day board come only from fixed word lists. We do not knowingly collect personal data from children under 13, or under the minimum age set by the law where they live. If you believe a child has used the app and data about them was collected, email us and we will delete the data we can link to their install.</p>` },
        { id: 'changes', h: 'Changes to this policy', html: `
<p>When we change this policy, we publish the new version on this page with a new effective date. If a change is significant, such as a new partner receiving data, we will also tell you in the app or on the store listing before it applies, and ask for your consent again where the law requires it.</p>` },
        { id: 'contact', h: 'Contact', html: `
<p>Questions, requests or complaints: ${mail}. This is also our channel for data subjects under the LGPD. We are based in São Paulo, Brazil. To contact Google, RevenueCat, PostHog or Tenjin directly, use the links to their policies above.</p>` },
      ],
    },
    pt: {
      title: 'Política de Privacidade do Golf Haiku',
      desc: 'Como o Golf Haiku, jogo de minigolfe para Android e iOS, trata dados: o que fica no seu aparelho, o que os parceiros de anúncios, compras, analytics e relatórios de falhas recebem, e as suas escolhas.',
      h1: 'Política de Privacidade',
      lead: 'Quais dados o Golf Haiku, nosso jogo de minigolfe para Android e iOS, usa, para quê, quem os recebe e quais escolhas você tem.',
      related: `Veja também os <a href="${paths.terms.pt}">Termos de Uso</a>.`,
      sections: [
        { id: 'quem-somos', h: 'Quem somos', html: `
<p>O Golf Haiku é um jogo de minigolfe para Android e iOS (identificador do app ${appId}). Ele é publicado pela ${company}, empresa brasileira inscrita no CNPJ sob o nº <span class="num">${cnpj}</span>, com sede em São Paulo. Nesta política, “nós” e “nosso” se referem a essa empresa, que é a controladora dos dados pessoais descritos aqui.</p>
<p>Para qualquer assunto de privacidade, escreva para ${mail}.</p>` },
        { id: 'resumo', h: 'Em resumo', html: `
<ul>
<li>Não há contas, login, chat nem nada para você escrever ou enviar.</li>
<li>Seu progresso, suas moedas e suas configurações ficam só no seu aparelho. A única coisa que vai para um servidor nosso é o placar do Buraco do dia, e só se você escolher entrar nele.</li>
<li>O app cria um ID aleatório para cada instalação. Ele identifica a instalação, não você, e é usado em analytics, compras e relatórios de falhas.</li>
<li>Os anúncios são do Google AdMob, que também pode preencher um espaço com o anúncio de outras redes (AppLovin, Unity, Liftoff, Mintegral e Pangle). Onde a lei exige, o app pede seu consentimento antes e, no iPhone e no iPad, o identificador de publicidade só é usado se você permitir o rastreamento.</li>
<li>As compras são pagas pelo Google Play ou pela App Store. Nunca vemos os dados do seu cartão.</li>
<li>Você pode mudar suas escolhas sobre anúncios a qualquer momento, e desinstalar o app apaga tudo o que ele guardou no seu aparelho.</li>
</ul>` },
        { id: 'no-seu-aparelho', h: 'O que fica no seu aparelho', html: `
<p>O app guarda no seu aparelho: seu progresso (buracos e bolas), seu saldo de moedas, configurações como o som, um registro das compras já entregues (para que cada compra seja creditada uma única vez), o ID de instalação descrito abaixo e suas escolhas de consentimento para anúncios (guardadas pela ferramenta de consentimento do Google). Se você entrar no placar do Buraco do dia, ele também guarda seu nome no placar, os dias já enviados e a chave de acesso da conta anônima do placar. Nada disso é copiado para um servidor nosso, fora o que o placar precisa (veja abaixo). Desinstalar o app ou limpar os dados dele apaga tudo.</p>
<p>Alguns desses valores, como o buraco em que você está ou quantas moedas tem, vão junto nos eventos de analytics descritos abaixo.</p>` },
        { id: 'id-de-instalacao', h: 'O ID de instalação', html: `
<p>Na primeira vez que você abre o Golf Haiku, ele cria um identificador aleatório (um UUID versão 4) e o salva no seu aparelho. Ele não vem do hardware do aparelho, do seu número de telefone, do seu nome nem de nenhuma conta. O app o mostra como seu <strong>ID do jogador</strong> ("Player ID") no menu de pausa, onde você pode tocar para copiar.</p>
<p>Usamos esse ID em analytics, compras e relatórios de falhas, para agrupar os eventos de uma mesma instalação e associar cada compra à instalação que a fez. Se você desinstalar e instalar o app de novo, um novo ID é criado e o antigo deixa de ser usado.</p>` },
        { id: 'placar-do-buraco-do-dia', h: 'O placar do Buraco do dia (opcional)', html: `
<p>Todo dia o jogo tem um Buraco do dia, o mesmo buraco para todos os jogadores. Você pode escolher entrar no placar dele, que ordena os jogadores do dia por menos tentativas e, no empate, pela tacada vencedora mais rápida, e também mostra as maiores sequências de dias seguidos. Entrar é opcional: até você tocar em “Join the board” (entrar no placar), nada sobre os seus resultados fica guardado do nosso lado.</p>
<p>Antes de você entrar, o placar mostra onde o seu resultado ficaria. Para calcular isso, o app pergunta ao placar quantos resultados são melhores que o seu. Esse pedido leva a sua pontuação, sem nenhum ID, e não fica guardado.</p>
<p>Quando você entra, o app cria uma conta anônima no Firebase Authentication, um serviço do Google: um ID aleatório, sem e-mail, sem senha e sem ligação com o ID de instalação, o seu ID de publicidade ou a sua identidade. O placar então guarda, no Cloud Firestore, outro serviço do Firebase, em servidores do Google nos Estados Unidos (veja “Transferência internacional”):</p>
<ul>
<li>seu nome no placar, formado por duas palavras e um número de listas fixas (você pode trocá-lo, mas só por outro nome das mesmas listas, então ninguém escreve texto livre);</li>
<li>para cada dia em que você acerta o Buraco do dia: quantas tentativas levou, quanto tempo a tacada vencedora rolou, sua sequência de dias seguidos e quando o resultado chegou;</li>
<li>a própria tacada vencedora (direção, força e momento), que os outros jogadores nunca veem. Nós a guardamos para refazê-la com a física do jogo e conferir que ela foi mesmo jogada;</li>
<li>sua sequência atual e a melhor, e o último dia enviado.</li>
</ul>
<p>Os outros jogadores veem seu nome no placar, as tentativas, o tempo de rolagem e a sequência de dias. Os resultados saem quando há conexão: se você jogar sem internet, o app os guarda e envia depois, por até uma semana.</p>
<p>Para manter o placar justo, os pedidos dele levam um token do Firebase App Check. No Android ele vem do Google Play Integrity e no iPhone e no iPad do DeviceCheck da Apple, e mostra ao placar que o pedido vem do app original num aparelho legítimo. O Google e a Apple usam sinais sobre o seu aparelho para emiti-lo, de acordo com as próprias políticas. Se um resultado não poderia ter sido jogado (a tacada não cai no buraco quando a refazemos), nós o apagamos e bloqueamos esse ID no placar.</p>
<p>Você pode sair a qualquer momento com “Leave” (sair) no placar. O app então apaga seu registro no placar, os resultados que enviou com as tacadas e a conta anônima. O que sobrar é apagado automaticamente, como descrito em “Por quanto tempo guardamos os dados”.</p>` },
        { id: 'quem-recebe-dados', h: 'Quem recebe dados', html: `
<p>O app envia dados diretamente aos prestadores de serviço abaixo. Cada um recebe só o que precisa para fazer o seu trabalho.</p>
<h3 class="h4">Google AdMob (anúncios) e a ferramenta de consentimento do Google</h3>
<p>O Golf Haiku é gratuito e mostra anúncios: anúncios premiados opcionais, que você escolhe assistir em troca de uma recompensa, como bolas ou moedas extras, e anúncios em tela cheia em pausas naturais, entre buracos ou no fim de uma partida. Eles são servidos pelo Google AdMob, que recebe:</p>
<ul>
<li>o identificador de publicidade do aparelho (o ID de publicidade do Android ou, no iPhone e no iPad, o IDFA da Apple, só se você permitir o rastreamento);</li>
<li>seu endereço IP e a localização aproximada obtida a partir dele;</li>
<li>informações do aparelho e do app, como modelo, sistema operacional, idioma e versão do app;</li>
<li>como você interage com os anúncios, como visualizações, toques e anúncios premiados assistidos até o fim;</li>
<li>suas escolhas de consentimento.</li>
</ul>
<p>Antes de pedir qualquer anúncio, o app passa pela plataforma de mensagens ao usuário do Google (User Messaging Platform). Dependendo de onde você está, ela mostra um formulário de consentimento (no Espaço Econômico Europeu, no Reino Unido e na Suíça), permite recusar a “venda” ou o “compartilhamento” dos seus dados para anúncios direcionados (nos estados americanos com leis de privacidade) e, no iPhone e no iPad, mostra uma breve explicação seguida do pedido de Transparência de Rastreamento de Apps da Apple.</p>
<p>Se os anúncios são personalizados ou não depende dessas escolhas e das configurações de anúncios do seu aparelho. Mesmo anúncios não personalizados usam alguns dados, como seu IP e informações do aparelho, para exibir os anúncios, limitar quantas vezes você os vê, medir resultados e evitar fraudes.</p>
<p>O Google usa esses dados de acordo com as próprias políticas. Veja ${ext(LINKS.googlePartners.pt, 'como o Google usa informações de sites ou apps que utilizam os serviços dele')} e a ${ext(LINKS.googlePrivacy.pt, 'Política de Privacidade do Google')}.</p>
<h3 class="h4">Outras redes de anúncios, pela mediação do AdMob</h3>
<p>Para manter o jogo gratuito, o AdMob pode preencher um espaço com o anúncio de outra rede, escolhida num leilão em tempo real: AppLovin, Unity Ads, Liftoff Monetize (antiga Vungle), Mintegral e Pangle. O software delas vem dentro do app e inicia junto com ele, então elas recebem os mesmos tipos de dado que o AdMob, mesmo quando não ganham o espaço: o ID de publicidade do aparelho (no iPhone e no iPad, só se você permitir o rastreamento), seu endereço IP e a localização aproximada que vem dele, informações do aparelho e do app, como você interage com os anúncios delas e suas escolhas de consentimento. O formulário de consentimento do Google as lista como parceiras de anúncios, e elas seguem as escolhas que você fizer lá.</p>
<p>Cada rede usa esses dados de acordo com a própria política, como controladora independente: ${ext(LINKS.applovin, 'AppLovin')}, ${ext(LINKS.unity, 'Unity')}, ${ext(LINKS.liftoff, 'Liftoff')}, ${ext(LINKS.mintegral, 'Mintegral')} e ${ext(LINKS.pangle, 'Pangle (a política depende da sua região)')}.</p>
<h3 class="h4">RevenueCat (compras)</h3>
<p>O RevenueCat valida e guarda o registro das compras no app, para que elas sejam entregues e restauradas. Ele recebe o ID de instalação, os produtos que você compra (produto, preço, moeda, identificadores e datas das transações), informações do aparelho e do app e o seu endereço IP. Ele pode anexar o ID de instalação à compra no Google Play ou na App Store, para que a compra seja associada à instalação. O pagamento é processado pelo Google ou pela Apple, nos termos deles: nunca recebemos os dados do seu cartão, seu nome ou seu e-mail. Veja a ${ext(LINKS.revenuecat, 'política de privacidade do RevenueCat')}.</p>
<h3 class="h4">PostHog (analytics do produto)</h3>
<p>Usamos o PostHog para entender como o jogo é jogado, ajustar a dificuldade, corrigir o que confunde e decidir o que fazer em seguida. O app envia eventos como app aberto, buraco iniciado, tacada, bola no buraco, erro, fim de jogo, continuar, loja aberta, anúncio assistido, compra e restauração, com valores do jogo como o número do buraco, bolas, tacadas e moedas.</p>
<p>Junto com cada evento, o PostHog recebe o ID de instalação, informações do aparelho e do app (como modelo, sistema operacional, idioma, fuso horário, tamanho da tela e versão do app) e seu endereço IP, que ele usa para estimar uma localização aproximada, como país e cidade. A gravação de sessão está desligada. Olhamos esses dados de forma agregada e não tentamos descobrir quem você é. Veja a ${ext(LINKS.posthog, 'política de privacidade do PostHog')}.</p>
<h3 class="h4">Firebase Crashlytics (relatórios de falhas)</h3>
<p>Se o app fechar por causa de uma falha ou tiver um erro grave, o Firebase Crashlytics, um serviço do Google, coleta um relatório: em que ponto do código aconteceu, modelo do aparelho, versões do sistema e do app, o estado do app no momento (como memória livre e orientação da tela), um ID de instalação do Crashlytics e o nosso ID de instalação. Usamos esses relatórios só para encontrar e corrigir bugs. Veja ${ext(LINKS.firebase.pt, 'Privacidade e segurança no Firebase')}.</p>
<h3 class="h4">Firebase Authentication, Cloud Firestore e App Check (o placar do Buraco do dia)</h3>
<p>Se você entrar no placar do Buraco do dia, esses serviços do Google guardam e protegem o placar como descrito acima. Como qualquer serviço on-line, eles também recebem seu endereço IP e informações básicas do aparelho a cada pedido. O Google trata esses dados em nosso nome. Veja ${ext(LINKS.firebase.pt, 'Privacidade e segurança no Firebase')}.</p>
<h3 class="h4">Google Analytics para Firebase e Tenjin (medição das nossas campanhas de anúncios)</h3>
<p>Quando anunciamos o Golf Haiku, precisamos saber quais anúncios trazem instalações e jogadores que continuam jogando. Para isso o app usa o Google Analytics para Firebase, um serviço do Google que informa o Google Ads, e a Tenjin, que informa as outras redes de anúncios em que compramos anúncios. Eles recebem o identificador de publicidade do aparelho (no iPhone e no iPad, só se você permitir o rastreamento), seu endereço IP, informações do aparelho e do app, informações sobre o anúncio que você viu ou tocou antes de instalar, quando o app é aberto e por quanto tempo, alguns eventos do jogo (terminar o tutorial e o total de buracos acertados chegar a 10, 25, 50, 100 e 250), a receita dos anúncios que você vê e, no Google Analytics, as compras no app. Onde aparece um formulário de consentimento, eles seguem as escolhas que você fez nele. Eles tratam esses dados em nosso nome, e nós os usamos só de forma agregada para medir nossas campanhas. Veja ${ext(LINKS.firebase.pt, 'Privacidade e segurança no Firebase')} e a ${ext(LINKS.tenjin, 'política de privacidade da Tenjin')}.</p>
<h3 class="h4">Google Play e App Store</h3>
<p>O Google e a Apple cuidam dos downloads, pagamentos e atualizações, de acordo com as próprias políticas de privacidade. Eles nos passam relatórios de vendas e estatísticas agregadas e, se você aceitou compartilhar com desenvolvedores, dados de diagnóstico como relatórios de falhas.</p>
<h3 class="h4">Outros casos</h3>
<p>Podemos divulgar dados quando a lei ou uma ordem válida de autoridade exigir, ou para proteger nossos direitos ou a segurança dos usuários. Se o app ou a empresa for vendido ou reorganizado, os dados podem passar para o novo responsável, que deve continuar respeitando esta política. Não vendemos seus dados por dinheiro e não os compartilhamos com mais ninguém.</p>` },
        { id: 'bases-legais', h: 'Para que usamos os dados e com que base legal', html: `
<p>Pela LGPD, pelo GDPR da União Europeia e pelo UK GDPR, cada uso de dados pessoais precisa de uma base legal. As nossas são:</p>
<ul>
<li><strong>Entregar e restaurar compras e ajudar com elas:</strong> execução do contrato com você e cumprimento de obrigações legais, como registros fiscais e contábeis.</li>
<li><strong>Anúncios personalizados e rastreamento:</strong> seu consentimento, dado no formulário de consentimento ou no pedido de rastreamento da Apple. Onde não há formulário de consentimento, nosso legítimo interesse em manter o jogo gratuito, ao qual você pode se opor a qualquer momento nas configurações de anúncios do aparelho.</li>
<li><strong>Anúncios não personalizados, medição de anúncios e prevenção de fraude:</strong> nosso legítimo interesse em financiar um jogo gratuito.</li>
<li><strong>Relatórios de falhas:</strong> nosso legítimo interesse em manter o app funcionando e seguro.</li>
<li><strong>Analytics:</strong> nosso legítimo interesse em melhorar o jogo, com dados pseudonimizados analisados de forma agregada.</li>
<li><strong>Medição das nossas campanhas de anúncios:</strong> seu consentimento, onde aparece um formulário de consentimento ou o pedido de rastreamento da Apple; nos outros casos, nosso legítimo interesse em saber quais dos nossos anúncios funcionam, ao qual você pode se opor a qualquer momento nas configurações de anúncios do aparelho.</li>
<li><strong>Responder suas mensagens e solicitações:</strong> nosso legítimo interesse em ajudar você e o cumprimento das nossas obrigações legais de proteção de dados.</li>
<li><strong>O placar do Buraco do dia:</strong> seu consentimento, dado quando você entra e retirado quando você sai. Conferir resultados e bloquear trapaças no placar: nosso legítimo interesse em um placar justo.</li>
</ul>
<p>Quando usamos o legítimo interesse, nós o comparamos com os seus interesses, limitamos os dados ao necessário e os ligamos a um ID aleatório, não à sua identidade. Você pode se opor a qualquer momento (veja “Seus direitos”).</p>` },
        { id: 'suas-escolhas', h: 'Suas escolhas', html: `
<ul>
<li><strong>“Privacy settings” no app.</strong> Onde as mensagens de privacidade do Google valem para a sua região, o menu de pausa mostra o botão “Privacy settings” (configurações de privacidade). Ele abre o formulário do Google, onde você pode mudar ou retirar seu consentimento ou, nos estados americanos com leis de privacidade, recusar a venda ou o compartilhamento dos seus dados para anúncios direcionados.</li>
<li><strong>Android.</strong> Nas configurações do aparelho (em geral Configurações &gt; Privacidade &gt; Anúncios, ou Configurações &gt; Google &gt; Anúncios), você pode excluir ou redefinir seu ID de publicidade. Depois de excluído, os apps deixam de recebê-lo.</li>
<li><strong>iPhone e iPad.</strong> Em Ajustes &gt; Privacidade e Segurança &gt; Rastreamento, você pode desligar o rastreamento para o Golf Haiku ou para todos os apps.</li>
<li><strong>Analytics, medição de campanhas e relatórios de falhas.</strong> Não há um botão no app para desligá-los. Você pode se opor por e-mail: apagamos os dados ligados à sua instalação e a deixamos de fora das análises seguintes.</li>
<li><strong>O placar do Buraco do dia.</strong> Entrar é escolha sua, e “Leave” (sair) no placar apaga seus dados ali a qualquer momento.</li>
<li><strong>Desinstalar.</strong> Desinstalar o app apaga todos os dados que ele guardou no aparelho, incluindo o ID de instalação, e encerra toda a coleta.</li>
</ul>
<p>Você não precisa nos dar nenhum dado para jogar, e recusar o consentimento não impede o jogo: você ainda pode ver anúncios, só que não personalizados.</p>` },
        { id: 'seus-direitos', h: 'Seus direitos', html: `
<p>Onde quer que você more, pode nos pedir para:</p>
<ul>
<li>confirmar se tratamos dados sobre você e lhe dar uma cópia;</li>
<li>corrigi-los;</li>
<li>apagá-los;</li>
<li>enviá-los a você ou a outro serviço em formato portável;</li>
<li>interromper ou limitar um uso deles, ou se opor a um uso baseado em legítimo interesse;</li>
<li>informar com quem os compartilhamos.</li>
</ul>
<p>Você também pode retirar seu consentimento a qualquer momento, sem afetar o que foi feito antes. Não tomamos decisões sobre você baseadas só em tratamento automatizado que tenham efeitos jurídicos ou impacto parecido.</p>
<h3 class="h4">Brasil (LGPD)</h3>
<p>Você tem os direitos do artigo 18 da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), entre eles: confirmação da existência de tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos, portabilidade, eliminação dos dados tratados com seu consentimento, informação sobre com quem compartilhamos dados e sobre as consequências de não dar consentimento, e revogação do consentimento. Você também pode peticionar à ${ext(LINKS.anpd, 'Autoridade Nacional de Proteção de Dados (ANPD)')}.</p>
<h3 class="h4">Espaço Econômico Europeu, Reino Unido e Suíça</h3>
<p>Você tem os direitos de acesso, retificação, apagamento, limitação, portabilidade e oposição, além do direito de retirar o consentimento. Você pode reclamar à autoridade de proteção de dados do lugar onde mora ou trabalha, como o ICO no Reino Unido ou o FDPIC na Suíça.</p>
<h3 class="h4">Estados Unidos</h3>
<p>Algumas leis estaduais, como a CCPA da Califórnia, alterada pela CPRA, dão a você o direito de saber quais informações pessoais coletamos, de acessá-las, corrigi-las e apagá-las, de recusar a venda ou o compartilhamento delas e de não ser tratado de forma diferente por exercer esses direitos. Você também pode fazer um pedido por meio de um agente autorizado.</p>
<p>Coletamos, a partir do app no seu aparelho e para as finalidades desta política, estas categorias de informações pessoais: identificadores (ID de instalação, ID de publicidade, endereço IP e, se você entrar no placar do Buraco do dia, o ID anônimo dele), informações comerciais (registros de compras), atividade na internet ou em outras redes eletrônicas (eventos do jogo, interações com anúncios e, se você entrar no placar, seus resultados do dia) e localização aproximada obtida pelo IP. Elas são divulgadas aos prestadores de serviço listados acima.</p>
<p>Não vendemos informações pessoais por dinheiro. Permitir que o Google e as redes de “Outras redes de anúncios” usem seu ID de publicidade e dados relacionados para anúncios personalizados pode contar como “venda” ou “compartilhamento” para publicidade comportamental entre contextos segundo essas leis. Você pode recusar isso em “Privacy settings” no app (onde aparece) ou nas configurações de anúncios do aparelho. Não coletamos informações pessoais sensíveis e não vendemos nem compartilhamos, sabendo, informações pessoais de menores de 16 anos.</p>
<h3 class="h4">Como fazer um pedido</h3>
<p>Escreva para ${mail} com seu <strong>ID do jogador</strong> ("Player ID", no menu de pausa, toque para copiar). Como não há contas e não sabemos quem você é, é por esse ID que encontramos seus dados; se você não tem mais o app, conte o modelo do aparelho, mais ou menos quando jogou e, se houve compra, o número do pedido no recibo do Google Play ou da App Store. Se conseguirmos ligar seu pedido a um ID de instalação, apagamos ou exportamos os dados de analytics, compras e falhas ligados a ele nos nossos prestadores, exceto registros que a lei nos obriga a manter, como os registros fiscais das compras. Se não conseguirmos ligar o pedido a nenhum dado, avisamos você. No placar do Buraco do dia, “Leave” (sair) apaga seus dados na hora; sem o app, conte seu nome no placar e os dias em que jogou. Os dados de anúncios que o Google e as outras redes tratam como controladores independentes seguem as políticas de cada um, e você pode exercer seus direitos diretamente com eles. Respondemos dentro dos prazos da lei que se aplica a você.</p>` },
        { id: 'transferencia-internacional', h: 'Transferência internacional', html: `
<p>Estamos no Brasil, e nossos prestadores podem tratar dados nos Estados Unidos e em outros países. Quando os dados saem do seu país, a transferência se apoia em garantias reconhecidas pela lei, como as cláusulas contratuais padrão dos termos de tratamento de dados dos prestadores ou uma decisão de adequação. As redes de “Outras redes de anúncios” também podem tratar dados nos Estados Unidos e na Ásia.</p>
<p>O placar do Buraco do dia, se você entrar nele, fica guardado em servidores do Google nos Estados Unidos: seu nome no placar, seus resultados com as tacadas, suas sequências de dias e o ID anônimo do placar. Pela LGPD, essa transferência se apoia no artigo 33, inciso II, alínea b: as cláusulas contratuais padrão dos termos de tratamento de dados do Google para o Firebase, que obrigam o Google a proteger os dados como a LGPD exige. Para quem está no Espaço Econômico Europeu, no Reino Unido ou na Suíça, ela se apoia nas garantias desses mesmos termos, como as cláusulas contratuais padrão da Comissão Europeia.</p>` },
        { id: 'retencao', h: 'Por quanto tempo guardamos os dados', html: `
<ul>
<li><strong>No seu aparelho:</strong> até você desinstalar o app ou limpar os dados dele.</li>
<li><strong>Analytics (PostHog):</strong> pelo tempo necessário para entender e melhorar o jogo, e nunca além do período de retenção configurado no nosso projeto do PostHog.</li>
<li><strong>Relatórios de falhas (Crashlytics):</strong> pelo tempo necessário para corrigir os problemas que eles mostram, e nunca além do período de retenção do Firebase para dados de falhas.</li>
<li><strong>Medição de campanhas (Google Analytics, Tenjin):</strong> pelo tempo necessário para medir nossas campanhas, e nunca além dos períodos de retenção configurados na nossa propriedade do Google Analytics e na nossa conta da Tenjin.</li>
<li><strong>Compras (RevenueCat, Google Play, App Store):</strong> pelo tempo necessário para entregar, restaurar e dar suporte às suas compras, e pelo prazo que as leis fiscais e contábeis exigirem.</li>
<li><strong>Placar do Buraco do dia (Firebase):</strong> os resultados e as tacadas de cada dia são apagados automaticamente 30 dias depois de chegar, e seu registro no placar (nome e sequências) 60 dias depois do seu último resultado, ou na hora em que você sai. IDs bloqueados por trapaça ficam guardados pelo tempo necessário para manter o placar justo.</li>
<li><strong>Anúncios (Google):</strong> de acordo com as políticas de retenção do próprio Google.</li>
<li><strong>Seus e-mails para nós:</strong> pelo tempo necessário para atender o pedido e manter registro de que o atendemos.</li>
</ul>` },
        { id: 'seguranca', h: 'Segurança', html: `
<p>O app envia dados a esses prestadores por conexões criptografadas (HTTPS). O acesso aos painéis deles é restrito a quem trabalha no Golf Haiku. Nenhum sistema é totalmente seguro: se um incidente puder afetar você, tomaremos as medidas que a lei exige, incluindo avisar as autoridades e você quando for o caso.</p>` },
        { id: 'criancas', h: 'Crianças', html: `
<p>O Golf Haiku é feito para o público em geral e não é direcionado a crianças menores de 13 anos. Ele não tem chat, e os nomes no placar do Buraco do dia vêm só de listas fixas de palavras. Não coletamos, sabendo, dados pessoais de menores de 13 anos, ou da idade mínima definida pela lei do lugar onde moram. Se você acredita que uma criança usou o app e que dados sobre ela foram coletados, escreva para nós e apagaremos os dados que conseguirmos ligar à instalação dela.</p>` },
        { id: 'mudancas', h: 'Mudanças nesta política', html: `
<p>Quando mudarmos esta política, publicaremos a nova versão nesta página com uma nova data de vigência. Se a mudança for relevante, como um novo parceiro recebendo dados, também avisaremos no app ou na página da loja antes de ela valer, e pediremos seu consentimento de novo quando a lei exigir.</p>` },
        { id: 'contato', h: 'Contato', html: `
<p>Dúvidas, pedidos ou reclamações: ${mail}. Este também é o nosso canal de atendimento aos titulares de dados previsto na LGPD. Ficamos em São Paulo, Brasil. Para falar diretamente com o Google, o RevenueCat, o PostHog ou a Tenjin, use os links das políticas deles acima.</p>` },
      ],
    },
  };

  const terms = {
    paths: paths.terms,
    en: {
      title: 'Golf Haiku Terms of Use',
      desc: 'Terms of use for Golf Haiku, a minigolf game for Android and iOS: your licence, coins and virtual items, purchases, ads, fair play and governing law.',
      h1: 'Terms of Use',
      lead: 'The agreement between you and us for using Golf Haiku, our minigolf game. Please read it together with the Privacy Policy.',
      related: `Read also the <a href="${paths.privacy.en}">Privacy Policy</a>.`,
      sections: [
        { id: 'who-we-are', h: 'Who we are and your agreement', html: `
<p>Golf Haiku is published by ${company}, a company registered in Brazil under CNPJ <span class="num">${cnpj}</span>, based in São Paulo (“we”, “us”, “our”). By downloading, installing or using Golf Haiku, you agree to these terms. If you do not agree, do not use the app.</p>
<p>If you are under 18, or under the age of majority where you live, use the app and make purchases only with permission from a parent or guardian.</p>` },
        { id: 'licence', h: 'Your licence', html: `
<p>We give you a personal, limited, non-exclusive, non-transferable and revocable licence to download and use Golf Haiku on devices you own or control, for your own non-commercial entertainment. The store you got the app from has its own rules, which also apply: the ${ext(LINKS.playTerms.en, 'Google Play Terms of Service')} or, on iOS, Apple's ${ext(LINKS.appleEula, 'Licensed Application End User License Agreement')}.</p>` },
        { id: 'virtual-items', h: 'Coins and other virtual items', html: `
<ul>
<li>Coins, balls and other items in the game are virtual. You get a licence to use them in Golf Haiku; you do not own them.</li>
<li>They have no cash value. They cannot be exchanged for money or anything outside the game, or sold, traded or transferred to another person, device or app.</li>
<li>They are stored only on your device. If you uninstall the app, clear its data, reset or change your device, they are lost and we cannot recover them, because we keep no copy.</li>
<li>Purchases that are not used up, like “No ads”, can be brought back on the same store account with “Restore purchases” in the pause menu. Coins from coin packs are used up when they are delivered and cannot be restored, and we do not guarantee that the coins included in the starter pack will be restored.</li>
<li>We may change the game's economy (prices in coins, rewards, how many balls you get) to keep it fair and fun. We will not remove coins or items you already have, except to correct an error or to undo items obtained by cheating or abuse.</li>
</ul>` },
        { id: 'purchases', h: 'In-app purchases', html: `
<ul>
<li>Purchases are made through Google Play or the App Store, with the payment method of your store account, at the price the store shows (in your currency, with the taxes the store applies). The store processes the payment under its own terms; we never receive your card details.</li>
<li>A purchase is delivered on the install where you make it. If something you paid for does not arrive, close and reopen the app, try “Restore purchases” or email us with the order number.</li>
<li>Refunds are requested from the store and follow its policies: ${ext(LINKS.playRefund.en, 'Google Play')} or ${ext(LINKS.appleRefund, 'Apple')}. If the store cannot help, email us and we will see what we can do.</li>
<li>Nothing in these terms limits the rights you have under consumer protection law, including the Brazilian Consumer Protection Code (Código de Defesa do Consumidor) where it applies, such as rights about defective products and the right of withdrawal where the law grants it.</li>
</ul>` },
        { id: 'ads', h: 'Ads', html: `
<ul>
<li>Golf Haiku is free and funded by ads. Rewarded ads are optional: watching one to the end gives the reward shown in the app. If an ad does not load or is not watched to the end, there is no reward.</li>
<li>Full-screen ads appear at natural breaks, never in the middle of a shot. “No ads” (and the starter pack) removes them; rewarded ads stay available if you want their rewards.</li>
<li>Ads are provided by Google and its partners. We do not control every ad, and anything you do with an advertiser, such as a purchase, is between you and them. If you see an ad that seems inappropriate, tell us.</li>
<li>The Privacy Policy explains how ads use data.</li>
</ul>` },
        { id: 'fair-play', h: 'Fair play', html: `
<p>You agree not to:</p>
<ul>
<li>cheat, use bots or exploits, or edit the app's saved data to get coins, balls or items you have not earned or paid for;</li>
<li>modify, tamper with or bypass the app's ads, purchases or security, or fake ad views or taps;</li>
<li>decompile, reverse engineer or modify the app to cheat, to abuse it or to copy it, except where the law allows it despite this restriction;</li>
<li>distribute, rent, sell or publish copies or modified versions of the app;</li>
<li>use the app for anything unlawful or in a way that harms the app, other people or our partners.</li>
</ul>
<p>If you break these rules, we may remove items obtained that way, and your licence ends.</p>` },
        { id: 'our-content', h: 'Our content', html: `
<p>The Golf Haiku software, graphics, sounds, name and logo we created are ours and protected by intellectual property laws. These terms give you no rights to it beyond the licence above. Some parts of the app use open source software, licensed under its own terms. If you send us ideas or feedback, we may use them freely, without any obligation to you.</p>` },
        { id: 'privacy', h: 'Privacy', html: `
<p>The <a href="${paths.privacy.en}">Privacy Policy</a> explains what data the app uses and the choices you have.</p>` },
        { id: 'availability', h: 'Changes to the app and availability', html: `
<p>We may update Golf Haiku, change or remove features, holes or items, or stop offering the app. Some updates may be needed to keep playing. Where it is reasonable, we will give notice before we stop offering the app. Unless the law says otherwise, stopping the app or removing features does not entitle you to compensation for virtual items.</p>` },
        { id: 'no-warranties', h: 'No warranties', html: `
<p>We work to make Golf Haiku fun and reliable, but it is provided “as is” and “as available”. To the extent the law allows, we do not promise that it will work without interruptions or errors, that it fits a particular purpose or that your progress will never be lost. This does not affect guarantees that consumer law gives you and that cannot be excluded.</p>` },
        { id: 'liability', h: 'Limitation of liability', html: `
<p>To the extent the law allows, we are not liable for indirect or consequential losses, or for the loss of progress, coins or other virtual items. Our total liability to you for any claim related to the app is limited to the amount you paid for in-app purchases in the 12 months before the claim. Nothing in these terms limits liability that the law does not allow to be limited, such as for fraud, wilful misconduct or gross negligence, or the rights consumers have by law.</p>` },
        { id: 'ending', h: 'Ending these terms', html: `
<p>You can stop at any time by uninstalling the app. Your licence ends automatically if you break these terms. Sections that by their nature should continue, such as those on our content, warranties, liability and governing law, continue after that.</p>` },
        { id: 'changes', h: 'Changes to these terms', html: `
<p>We may update these terms, for example when the app or the law changes. We will publish the new version on this page with a new effective date and, before significant changes apply, tell you in the app or on the store listing. If you keep using the app after a change takes effect, the new terms apply; if you do not agree, stop using the app.</p>` },
        { id: 'law', h: 'Governing law and courts', html: `
<p>These terms are governed by the laws of Brazil. The courts of the city of São Paulo, State of São Paulo, Brazil, have jurisdiction over disputes. If you are a consumer, this does not take away the protection of the mandatory laws of the country where you live, or your right to bring a claim in the courts where you live when that law gives you that right.</p>` },
        { id: 'app-store', h: 'If you downloaded the app from the App Store', html: `
<ul>
<li>These terms are between you and us, not Apple. Apple is not responsible for the app or its content.</li>
<li>Apple has no obligation to provide maintenance or support for the app.</li>
<li>If the app fails to meet an applicable warranty, you may notify Apple, and Apple will refund the price you paid for the app, if any. To the extent the law allows, Apple has no other warranty obligation for the app.</li>
<li>Apple is not responsible for claims by you or anyone else relating to the app, or for investigating, defending or settling claims that the app infringes someone else's intellectual property.</li>
<li>Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you.</li>
</ul>` },
        { id: 'general', h: 'General', html: `
<p>If any part of these terms is found invalid, the rest stays in force. If we do not enforce a right straight away, we do not give it up. These terms, together with the store rules mentioned above, are the whole agreement between you and us about the app. They are published in English and Portuguese; if the versions differ, the Portuguese version prevails for users in Brazil.</p>` },
        { id: 'contact', h: 'Contact', html: `
<p>Questions about these terms: ${mail}. We are based in São Paulo, Brazil.</p>` },
      ],
    },
    pt: {
      title: 'Termos de Uso do Golf Haiku',
      desc: 'Termos de uso do Golf Haiku, jogo de minigolfe para Android e iOS: sua licença, moedas e itens virtuais, compras, anúncios, jogo limpo e lei aplicável.',
      h1: 'Termos de Uso',
      lead: 'O acordo entre você e nós para o uso do Golf Haiku, nosso jogo de minigolfe. Leia junto com a Política de Privacidade.',
      related: `Veja também a <a href="${paths.privacy.pt}">Política de Privacidade</a>.`,
      sections: [
        { id: 'quem-somos', h: 'Quem somos e aceitação', html: `
<p>O Golf Haiku é publicado pela ${company}, empresa brasileira inscrita no CNPJ sob o nº <span class="num">${cnpj}</span>, com sede em São Paulo (“nós”). Ao baixar, instalar ou usar o Golf Haiku, você concorda com estes termos. Se não concordar, não use o app.</p>
<p>Se você tem menos de 18 anos, ou não atingiu a maioridade onde mora, use o app e faça compras só com a permissão de um dos pais ou responsável.</p>` },
        { id: 'licenca', h: 'Sua licença', html: `
<p>Nós concedemos a você uma licença pessoal, limitada, não exclusiva, intransferível e revogável para baixar e usar o Golf Haiku em aparelhos que sejam seus ou que você controle, para o seu entretenimento e sem fins comerciais. A loja de onde você baixou o app tem regras próprias, que também valem: os ${ext(LINKS.playTerms.pt, 'Termos de Serviço do Google Play')} ou, no iOS, o ${ext(LINKS.appleEula, 'Contrato de Licença de Usuário Final de Aplicativo Licenciado')} da Apple.</p>` },
        { id: 'itens-virtuais', h: 'Moedas e outros itens virtuais', html: `
<ul>
<li>Moedas, bolas e outros itens do jogo são virtuais. Você recebe uma licença para usá-los no Golf Haiku; eles não são sua propriedade.</li>
<li>Eles não têm valor em dinheiro. Não podem ser trocados por dinheiro ou por nada fora do jogo, nem vendidos, negociados ou transferidos para outra pessoa, aparelho ou app.</li>
<li>Eles ficam guardados só no seu aparelho. Se você desinstalar o app, limpar os dados dele, resetar ou trocar de aparelho, eles se perdem e não conseguimos recuperá-los, porque não guardamos cópia.</li>
<li>Compras que não se esgotam com o uso, como “No ads” (sem anúncios), podem ser recuperadas na mesma conta da loja com “Restore purchases” (restaurar compras), no menu de pausa. As moedas dos pacotes de moedas são consumidas quando entregues e não podem ser restauradas, e não garantimos a restauração das moedas incluídas no pacote inicial.</li>
<li>Podemos mudar a economia do jogo (preços em moedas, recompensas, quantas bolas você recebe) para mantê-lo justo e divertido. Não retiramos moedas ou itens que você já tem, exceto para corrigir um erro ou desfazer itens obtidos com trapaça ou abuso.</li>
</ul>` },
        { id: 'compras', h: 'Compras no app', html: `
<ul>
<li>As compras são feitas pelo Google Play ou pela App Store, com a forma de pagamento da sua conta na loja, pelo preço que a loja mostra (na sua moeda, com os impostos que a loja aplicar). A loja processa o pagamento nos termos dela; nunca recebemos os dados do seu cartão.</li>
<li>A compra é entregue na instalação em que foi feita. Se algo que você pagou não chegar, feche e abra o app de novo, tente “Restore purchases” ou escreva para nós com o número do pedido.</li>
<li>Reembolsos são pedidos à loja e seguem as políticas dela: ${ext(LINKS.playRefund.pt, 'Google Play')} ou ${ext(LINKS.appleRefund, 'Apple')}. Se a loja não resolver, escreva para nós e vamos ver o que podemos fazer.</li>
<li>Nada nestes termos limita os direitos que você tem pelas leis de defesa do consumidor, incluindo o Código de Defesa do Consumidor (CDC) quando ele se aplica, como os direitos sobre produtos com defeito e o direito de arrependimento nos casos em que a lei o garante.</li>
</ul>` },
        { id: 'anuncios', h: 'Anúncios', html: `
<ul>
<li>O Golf Haiku é gratuito e se mantém com anúncios. Os anúncios premiados são opcionais: assistir a um até o fim dá a recompensa mostrada no app. Se o anúncio não carregar ou não for assistido até o fim, não há recompensa.</li>
<li>Os anúncios em tela cheia aparecem em pausas naturais, nunca no meio de uma tacada. “No ads” (e o pacote inicial) remove esses anúncios; os anúncios premiados continuam disponíveis se você quiser as recompensas.</li>
<li>Os anúncios são fornecidos pelo Google e pelos parceiros dele. Não controlamos cada anúncio, e o que você fizer com um anunciante, como uma compra, é entre você e ele. Se vir um anúncio que pareça inadequado, nos avise.</li>
<li>A Política de Privacidade explica como os anúncios usam dados.</li>
</ul>` },
        { id: 'jogo-limpo', h: 'Jogo limpo', html: `
<p>Você concorda em não:</p>
<ul>
<li>trapacear, usar bots ou explorar falhas, nem editar os dados salvos do app para ganhar moedas, bolas ou itens que não conquistou ou pagou;</li>
<li>modificar, adulterar ou contornar os anúncios, as compras ou a segurança do app, nem simular visualizações ou toques em anúncios;</li>
<li>descompilar, fazer engenharia reversa ou modificar o app para trapacear, abusar dele ou copiá-lo, exceto quando a lei permitir mesmo com esta restrição;</li>
<li>distribuir, alugar, vender ou publicar cópias ou versões modificadas do app;</li>
<li>usar o app para algo ilegal ou de um jeito que prejudique o app, outras pessoas ou nossos parceiros.</li>
</ul>
<p>Se você descumprir essas regras, podemos remover os itens obtidos dessa forma, e sua licença termina.</p>` },
        { id: 'nosso-conteudo', h: 'Nosso conteúdo', html: `
<p>O software, os gráficos, os sons, o nome e o logo do Golf Haiku que criamos são nossos e protegidos pelas leis de propriedade intelectual. Estes termos não dão a você nenhum direito sobre ele além da licença acima. Algumas partes do app usam software de código aberto, licenciado sob os próprios termos. Se você nos mandar ideias ou sugestões, podemos usá-las livremente, sem nenhuma obrigação com você.</p>` },
        { id: 'privacidade', h: 'Privacidade', html: `
<p>A <a href="${paths.privacy.pt}">Política de Privacidade</a> explica quais dados o app usa e quais escolhas você tem.</p>` },
        { id: 'disponibilidade', h: 'Mudanças no app e disponibilidade', html: `
<p>Podemos atualizar o Golf Haiku, mudar ou remover funções, buracos ou itens, ou deixar de oferecer o app. Algumas atualizações podem ser necessárias para continuar jogando. Quando for razoável, avisaremos antes de deixar de oferecer o app. Salvo quando a lei disser o contrário, o encerramento do app ou a remoção de funções não dá direito a compensação por itens virtuais.</p>` },
        { id: 'sem-garantias', h: 'Sem garantias', html: `
<p>Trabalhamos para que o Golf Haiku seja divertido e confiável, mas ele é oferecido “no estado em que se encontra” e “conforme disponível”. Na medida permitida pela lei, não garantimos que ele funcione sem interrupções ou erros, que sirva a um fim específico ou que seu progresso nunca se perca. Isso não afeta as garantias que a lei do consumidor dá a você e que não podem ser afastadas.</p>` },
        { id: 'responsabilidade', h: 'Limitação de responsabilidade', html: `
<p>Na medida permitida pela lei, não respondemos por perdas indiretas ou consequentes, nem pela perda de progresso, moedas ou outros itens virtuais. Nossa responsabilidade total com você por qualquer reclamação ligada ao app fica limitada ao valor que você pagou em compras no app nos 12 meses anteriores à reclamação. Nada nestes termos limita a responsabilidade que a lei não permite limitar, como em caso de fraude, dolo ou culpa grave, nem os direitos que o consumidor tem por lei.</p>` },
        { id: 'encerramento', h: 'Encerramento', html: `
<p>Você pode parar quando quiser, desinstalando o app. Sua licença termina automaticamente se você descumprir estes termos. As cláusulas que, pela natureza, devem continuar valendo, como as de conteúdo, garantias, responsabilidade e lei aplicável, continuam depois disso.</p>` },
        { id: 'mudancas', h: 'Mudanças nestes termos', html: `
<p>Podemos atualizar estes termos, por exemplo quando o app ou a lei mudar. Publicaremos a nova versão nesta página com uma nova data de vigência e, antes que mudanças relevantes passem a valer, avisaremos no app ou na página da loja. Se você continuar usando o app depois que a mudança entrar em vigor, os novos termos se aplicam; se não concordar, pare de usar o app.</p>` },
        { id: 'lei-e-foro', h: 'Lei aplicável e foro', html: `
<p>Estes termos são regidos pelas leis do Brasil. Fica eleito o foro da Comarca de São Paulo, Estado de São Paulo, para resolver disputas. Se você é consumidor, isso não tira a proteção das leis obrigatórias do país onde você mora nem o seu direito de entrar com uma ação no foro do seu domicílio quando essa lei garantir esse direito.</p>` },
        { id: 'app-store', h: 'Se você baixou o app na App Store', html: `
<ul>
<li>Estes termos são entre você e nós, não com a Apple. A Apple não é responsável pelo app nem pelo conteúdo dele.</li>
<li>A Apple não tem obrigação de oferecer manutenção ou suporte para o app.</li>
<li>Se o app não cumprir uma garantia aplicável, você pode avisar a Apple, que reembolsará o preço pago pelo app, se houver. Na medida permitida pela lei, a Apple não tem nenhuma outra obrigação de garantia em relação ao app.</li>
<li>A Apple não é responsável por reclamações suas ou de terceiros relacionadas ao app, nem por investigar, defender ou resolver alegações de que o app viola a propriedade intelectual de terceiros.</li>
<li>A Apple e suas subsidiárias são terceiras beneficiárias destes termos e podem exigir o cumprimento deles por você.</li>
</ul>` },
        { id: 'disposicoes-gerais', h: 'Disposições gerais', html: `
<p>Se alguma parte destes termos for considerada inválida, o restante continua valendo. Se não exigirmos um direito imediatamente, não estamos abrindo mão dele. Estes termos, junto com as regras da loja mencionadas acima, formam todo o acordo entre você e nós sobre o app. Eles são publicados em português e em inglês; se as versões divergirem, a versão em português prevalece para usuários no Brasil.</p>` },
        { id: 'contato', h: 'Contato', html: `
<p>Dúvidas sobre estes termos: ${mail}. Ficamos em São Paulo, Brasil.</p>` },
      ],
    },
  };

  return { privacy, terms };
};
