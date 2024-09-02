const swiperReviews = new Swiper(".reviews__swiper", {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    types: "bullets",
  },

  breakpoints: {
    320: {
      direction: "horizontal",
      slidesPerView: 1.2,
      spaceBetween: 40,
    },
    640: {
      direction: "horizontal",
      slidesPerView: 2.2,
      spaceBetween: 40,
    },
    1000: {
      direction: "vertical",
      slidesPerView: "auto",
      freeMode: true,
      mousewheel: true,
      spaceBetween: 32,
      centeredSlides: true,
    }
  }
});