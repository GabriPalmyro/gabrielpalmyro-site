// gabrielpalmyro.com: language hint, nav state, app index, one-shot reveals,
// and the desktop parallax loader. The page is complete without this file.
// No tracking. No scroll listeners: IntersectionObserver only.
(function () {
  'use strict';
  var doc = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
  };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };
  var mq = function (q) { return window.matchMedia && window.matchMedia(q).matches; };
  var motionSrc = document.currentScript && document.currentScript.getAttribute('data-motion');
  var langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'])
    .map(function (l) { return String(l).toLowerCase(); });
  var prefersPt = langs[0] && langs[0].indexOf('pt') === 0;

  // ---- language: remember explicit choices, suggest (never redirect) ----
  $$('[data-lang-switch]').forEach(function (a) {
    a.addEventListener('click', function () { store.set('gp-lang', a.getAttribute('data-lang-switch')); });
  });
  var hint = document.querySelector('[data-lang-hint]');
  if (hint && !store.get('gp-lang') && !store.get('gp-lang-hint-dismissed')) {
    var target = hint.getAttribute('data-lang-hint');
    if ((target === 'pt' && prefersPt) || (target === 'en' && !prefersPt)) hint.hidden = false;
  }
  $$('[data-lang-dismiss]').forEach(function (b) {
    b.addEventListener('click', function () {
      store.set('gp-lang-hint-dismissed', '1');
      if (hint) hint.hidden = true;
    });
  });

  if (!('IntersectionObserver' in window)) return;

  // ---- nav: shadow once the top of the page has scrolled away ----
  var sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:24px;pointer-events:none';
  document.body.prepend(sentinel);
  new IntersectionObserver(function (e) { doc.classList.toggle('scrolled', !e[0].isIntersecting); }).observe(sentinel);

  // ---- apps index: mark the app being read (state, works with reduced motion) ----
  var links = {};
  $$('[data-spy-link]').forEach(function (a) { links[a.getAttribute('data-spy-link')] = a; });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var a = links[e.target.getAttribute('data-spy')];
      if (!a) return;
      if (e.isIntersecting) {
        Object.keys(links).forEach(function (k) { links[k].removeAttribute('aria-current'); });
        a.setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('[data-spy]').forEach(function (el) { spy.observe(el); });

  // ---- one-shot reveal for the app entries (CSS gates it on reduced motion) ----
  var els = $$('[data-reveal]');
  if (els.length) {
    doc.classList.add('rv');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    els.forEach(function (el) { io.observe(el); });
  }

  // ---- parallax: GSAP + ScrollTrigger, desktop with a fine pointer only ----
  // Loaded on demand so phones, tablets and reduced-motion visitors never
  // download it. motion.js re-checks the same query through gsap.matchMedia.
  var wantsDepth = motionSrc && document.querySelector('[data-layer]') &&
    mq('(min-width: 961px) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  if (wantsDepth) {
    var s = document.createElement('script');
    s.src = motionSrc;
    s.async = true;
    document.head.appendChild(s);
  }
})();
