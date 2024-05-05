"use strict";

var html = document.querySelector('html');
var classBlockScroll = "js-no-scroll";
function blockScrollBody() {
  if (!html.classList.contains(classBlockScroll)) {
    html.classList.add(classBlockScroll);
  }
}
;
function unblockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  }
}
;
function toggleBlockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  } else {
    html.classList.add(classBlockScroll);
  }
}
;
"use strict";
"use strict";

var images = document.querySelectorAll("img");
if (images) {
  images.forEach(function (img) {
    return img.setAttribute("loading", "lazy");
  });
}
"use strict";

function mobileNav() {
  var header = document.querySelector("header.header");
  if (!header) return;
  var nav = header.querySelector(".header__nav");
  var burger = header.querySelector(".header__burger");
  var navLinks = nav.querySelectorAll(".header-nav__link");
  function closeMenu() {
    nav.classList.remove("js-mobile-nav-open");
    unblockScrollBody();
  }
  ;

  // Открытие мобильного меню Бургер
  burger.addEventListener("click", function () {
    nav.classList.toggle("js-mobile-nav-open");
    toggleBlockScrollBody();

    // Скрытие меню по клику вне блока
    if (nav.classList.contains("js-mobile-nav-open")) {
      document.addEventListener("click", function (evt) {
        if (!evt.target.closest(".header")) closeMenu();
      });
    }
  });
  window.onscroll = function () {
    header.classList.toggle('js-scroll', window.scrollY > 1);
  };
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", closeMenu);
  });
}
mobileNav();

// const roadMapSlider = document.querySelector("#nont");
// if (roadMapSlider) {
//   console.log(roadMapSlider);
//   const swiperSlides = roadMapSlider.querySelectorAll(".swiper-slide");
//   swiperSlides.forEach(slide => {
//     slide.classList.remove('swiper-slide-active');
//   });
//   const dataSlide_5 = roadMapSlider.querySelector(".swiper-slide[data-slide='5']");
//   dataSlide_5.classList.add('swiper-slide-active');
// }
"use strict";

var customSelectList = document.querySelectorAll(".custom-select");
if (customSelectList) {
  customSelectList.forEach(function (customSelect) {
    var selectBtn = customSelect.querySelector(".select-button");
    var optionsList = customSelect.querySelectorAll(".select-dropdown li");

    // add click event to select button
    selectBtn.addEventListener("click", function () {
      // add/remove active class on the container element
      customSelect.classList.toggle("active");
      // update the aria-expanded attribute based on the current state
      selectBtn.setAttribute("aria-expanded", selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true");
    });
    optionsList.forEach(function (option) {
      function handler(e) {
        var clickedValue = this.querySelector("span");
        // Click Events
        if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
          selectBtn.textContent = clickedValue.textContent;
          customSelect.classList.remove("active");
        }
        // Key Events
        if (e.key === "Enter") {
          selectBtn.textContent = this.textContent;
          customSelect.classList.remove("active");
        }
      }
      option.addEventListener("keyup", handler);
      option.addEventListener("click", handler);
    });
  });
}
"use strict";
"use strict";

var swiperInst = document.querySelector('.institutions__list.swiper');
var mySwiper = new Swiper(swiperInst, {
  breakpoints: {
    1100: {
      slidesPerView: 2.4,
      spaceBetween: 30
    },
    940: {
      slidesPerView: 2.5
    },
    640: {
      slidesPerView: 2.3,
      spaceBetween: 24
    },
    480: {
      slidesPerView: 1.8
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 12
    }
  }
});
"use strict";

function hideLoader() {
  var loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hide');
    setTimeout(function () {
      //loader.remove();
    }, 500);
  }
}
;
window.addEventListener('load', hideLoader);