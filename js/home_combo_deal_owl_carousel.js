$('.owl-carousel').owlCarousel({
  autoplay: true,
  autoplayHoverPause: true,
  items: 3,
  nav: true,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    500: {
      items: 1,
      nav: true
    },
    768: {
      items: 2,
      nav: true
    },
    1000: {
      items: 3,
      nav: true
    }
  }
});
