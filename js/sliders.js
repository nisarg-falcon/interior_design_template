var swiper = new Swiper('.floatingSlider__slider', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.controls__right',
      prevEl: '.controls__left',
    },
});
var projects = new Swiper('.projects_slider', {
    slidesPerView: 2,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          centeredSlides: true
        },
      }
});