
  const swiperInst = document.querySelector('.institutions__list.swiper');
  const mySwiper = new Swiper(swiperInst, {

    breakpoints: {
      1100: {
        slidesPerView: 2.4,
        spaceBetween: 30,
      },

      940: {
        slidesPerView: 2.5,
      },

      640: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },

      480: {
        slidesPerView: 1.8,
      },

      320: {
        slidesPerView: 1.2,
        spaceBetween: 12,
      },

    }

  });
