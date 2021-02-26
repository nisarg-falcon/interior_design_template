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
    loop:true,
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
var projects = new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    spaceBetween: 20,
    breakpoints: {
      767: {
        loop:false,
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
        loop:false,
        centeredSlides: true
      },
    }
});