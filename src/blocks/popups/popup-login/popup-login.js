window.addEventListener("load", popupLoginHandler);

function popupLoginHandler () {
  const popupLogin = document.querySelector(".popup-login");
  const openPopupLoginBtns = document.querySelectorAll(".js-popup-login-open");
  if (!popupLogin && !openPopupLoginBtns) return false;

  // Hide Mobile menu when Popup Login is open
  const headerNav = document.querySelector(".header nav.header__nav");

  // Open Popup Login
  openPopupLoginBtns.forEach(openBtn => {
    openBtn.addEventListener("click", () => {
      popupLogin.classList.add("js-popup-open");
      blockScrollBody();
      headerNav.classList.remove("js-mobile-nav-open");
    });
  });

  // Close Popup Login
  const closeBtn = popupLogin.querySelector(".popup-login__close");

  function closePopupLogin () {
    popupLogin.classList.remove("js-popup-open");
    popupLogin.querySelector("form").reset();
    unblockScrollBody();
  }

  closeBtn.addEventListener("click", closePopupLogin);

  document.body.addEventListener('click', (evt) => {
    if (evt.target === popupLogin) closePopupLogin();
  });


  // Toggle view password
  const viewPasswordBtn = popupLogin.querySelector(".login-form__label-eye-toggle");
  const passwordInput = popupLogin.querySelector(".login-form__label--password input");


  viewPasswordBtn.addEventListener("click", () => {
    viewPasswordBtn.classList.toggle("view");
    if (viewPasswordBtn.classList.contains("view")) {
      passwordInput.setAttribute("type", "text");
    } else {
      passwordInput.setAttribute("type", "password");
    }
  });

}