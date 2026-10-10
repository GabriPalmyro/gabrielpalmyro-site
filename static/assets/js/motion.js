// Scroll depth for the home page (GSAP 3 + ScrollTrigger, vendored).
// Bundled after the two vendor files by scripts/build.mjs and loaded by
// site.js only on wide screens with a fine pointer and no reduced-motion
// preference. Transforms only, scrubbed to the scroll position (ease "none"
// keeps scroll and position 1:1, which is what makes it read as depth rather
// than as an animation playing on its own).
(function () {
  'use strict';
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();
  mm.add('(min-width: 961px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', function () {
    // 1. Hero layers. As the hero scrolls away, far layers lag behind (+y) and
    //    the near layer leads (-y). Distances are small on purpose: the copy
    //    and the buttons stay at reading speed and never move.
    var hero = document.querySelector('.hero');
    if (hero) {
      var layers = [
        ['plate', 56],  // background: the stage behind the photo, slowest
        ['name', 44],   // the name sits behind the photo plane
        ['photo', 24],  // middle
        ['apps', -48],  // foreground: the app icons, fastest
      ];
      var tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      });
      layers.forEach(function (l) {
        var el = hero.querySelector('[data-layer="' + l[0] + '"]');
        if (el) tl.to(el, { y: l[1] }, 0);
      });
    }

    // 2. App icons: each icon drifts against its own entry while the entry
    //    crosses the viewport, so the icon reads as a layer above the text.
    gsap.utils.toArray('[data-layer="app-icon"]').forEach(function (el) {
      gsap.fromTo(el, { y: 28 }, {
        y: -28,
        ease: 'none',
        scrollTrigger: { trigger: el.closest('.app') || el, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });

    // Fonts and lazy images can move trigger positions after load.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    window.addEventListener('load', function () { ScrollTrigger.refresh(); }, { once: true });
  });
})();
