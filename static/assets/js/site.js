// gabrielpalmyro.com: language hint and one-shot reveals. The page is
// complete without this file. No tracking.
(function () {
  'use strict';
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
  };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };
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

  // ---- one-shot reveals (CSS gates them on prefers-reduced-motion) ----
  if (!('IntersectionObserver' in window)) return;
  var els = $$('[data-reveal]');
  document.documentElement.classList.add('rv');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (el) { io.observe(el); });
})();
