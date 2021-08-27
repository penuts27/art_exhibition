"use strict";

var swiper = new Swiper('.mySwiper', {
  // cssMode: true,
  // default setting for mobile
  mousewheel: true,
  slidesPerView: 1,
  spaceBetween: 15,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 30
    // },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 800,
  // 400or600or800屬於常見值，values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // true=動畫僅一次,whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});
//# sourceMappingURL=all.js.map
