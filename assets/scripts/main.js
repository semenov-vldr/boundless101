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

AOS.init();
"use strict";

var images = document.querySelectorAll("img");
if (images) {
  images.forEach(function (img) {
    return img.setAttribute("loading", "lazy");
  });
}
"use strict";

var detailCourseTabs = document.querySelectorAll(".detail-course__tab[data-tab]");
if (detailCourseTabs) {
  var bodyList = document.querySelectorAll(".detail-course__body[data-tab]");
  detailCourseTabs.forEach(function (tab) {
    var dataTab = tab.dataset.tab;
    tab.addEventListener("click", function () {
      detailCourseTabs.forEach(function (tab) {
        return tab.classList.remove("js-active");
      });
      tab.classList.add("js-active");
      bodyList.forEach(function (bodyItem) {
        return bodyItem.classList.add("js-hidden");
      });
      bodyList.forEach(function (bodyItem) {
        var dataBody = bodyItem.dataset.tab;
        if (dataTab === dataBody) {
          bodyItem.classList.remove("js-hidden");
        }
      });
    });
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

  // window.onscroll = function () {
  //   header.classList.toggle('js-scroll', window.scrollY > 1);
  // };

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
"use strict";

var popups = {
  login: {
    classPopup: ".popup-login",
    classOpen: ".js-popup-login-open"
  },
  register: {
    classPopup: ".popup-register",
    classOpen: ".js-popup-register-open"
  }
};
window.addEventListener("load", function () {
  popupHandler(popups.login.classPopup, popups.login.classOpen);
  popupHandler(popups.register.classPopup, popups.register.classOpen);
});
function popupHandler(classPopup, classOpen) {
  var popup = document.querySelector(classPopup);
  var openPopupLoginBtns = document.querySelectorAll(classOpen);
  if (!popup || !openPopupLoginBtns) return false;

  // Hide Mobile menu when Popup is open
  var headerNav = document.querySelector(".header nav.header__nav");

  // Open Popup
  openPopupLoginBtns.forEach(function (openBtn) {
    openBtn.addEventListener("click", function () {
      document.querySelectorAll(".popup").forEach(function (popup) {
        return closePopupLogin(popup);
      });
      popup.classList.add("js-popup-open");
      blockScrollBody();
      headerNav.classList.remove("js-mobile-nav-open");
    });
  });

  // Close Popup
  var closeBtn = popup.querySelector(".popup__close");
  function closePopupLogin(popup) {
    popup.classList.remove("js-popup-open");
    popup.querySelector("form").reset();
    unblockScrollBody();
  }
  closeBtn.addEventListener("click", function () {
    return closePopupLogin(popup);
  });
  document.body.addEventListener('click', function (evt) {
    if (evt.target === popup) closePopupLogin(popup);
  });

  // Toggle view password
  var viewPasswordBtn = popup.querySelector(".form-group-eye-toggle");
  var passwordInput = popup.querySelector(".form-group--password input");
  viewPasswordBtn.addEventListener("click", function () {
    viewPasswordBtn.classList.toggle("view");
    var isView = viewPasswordBtn.classList.contains("view");
    passwordInput.setAttribute("type", "".concat(isView ? "text" : "password"));
  });
}
"use strict";
"use strict";

var applications = document.querySelectorAll(".application");
if (applications) {
  applications.forEach(function (application) {
    var title = application.querySelector(".application__title");
    title.addEventListener("click", function () {
      title.classList.toggle("js-close", !title.classList.contains("js-close"));
    });
  });
}
"use strict";

var profileMain = document.querySelector(".profile-main");
if (profileMain) {
  var tabs = profileMain.querySelectorAll(".profile-main__tabs-item");
  var contents = profileMain.querySelectorAll(".profile-main__content");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        return tab.classList.remove("js-active");
      });
      tab.classList.add("js-active");
      var dataTab = tab.dataset.tab;
      contents.forEach(function (cont) {
        return cont.classList.add("js-hidden");
      });
      var content = profileMain.querySelector("[data-cont='".concat(dataTab, "']"));
      content.classList.remove("js-hidden");
    });
  });
}
"use strict";

var profileMenu = document.querySelector(".profile-menu");
if (profileMenu) {
  var navLinks = profileMenu.querySelectorAll(".profile-menu__nav-link");
  navLinks.forEach(function (link) {
    if (link.href === window.location.href) {
      link.classList.add("js-active");
    }
  });
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var quizContact = document.querySelector(".quiz.quiz--contact");
if (quizContact) {
  var successForm = function successForm() {
    quizBody.classList.add("js-hidden");
    setTimeout(function () {
      quizBody.classList.remove("js-hidden");
      contactForm.reset();
    }, 5000);
  };
  var postData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var url,
        data,
        response,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
            data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.next = 4;
            return fetch(url, {
              method: "POST",
              body: data
            });
          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();
          case 7:
            return _context.abrupt("return", _context.sent);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function postData() {
      return _ref.apply(this, arguments);
    };
  }();
  var quizBody = document.querySelector(".quiz__body");
  var contactForm = document.querySelector(".quiz__contact-form");
  var submitBtn = document.querySelector(".quiz__contact-form-submit");
  var inputs = quizContact.querySelectorAll("input:required");
  ;
  var handleChange = function handleChange() {
    var _iterator = _createForOfIteratorHelper(inputs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var input = _step.value;
        if (input.value === "") {
          submitBtn.disabled = true;
          return;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    submitBtn.disabled = false;
  };
  inputs.forEach(function (input) {
    input.onkeydown = input.onkeyup = input.onkeypress = input.change = handleChange;
  });
  ;
  contactForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var data = new FormData(contactForm);
    var url = "https://httpbin.org/post";
    postData(url, data).then(function (response) {
      if (response.status < 300) {
        console.log("Форма успешно отправлена");
        successForm();
      } else {
        console.log("Ошибка при отправке формы");
      }
    })["catch"](function () {
      return console.log("Catch Ошибка");
    });
  });
}