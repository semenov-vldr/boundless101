const popups = {
  login: {
    classPopup: ".popup-login",
    classOpen: ".js-popup-login-open"
  },

  register: {
    classPopup: ".popup-register",
    classOpen: ".js-popup-register-open"
  }
}


window.addEventListener("load", () => {
  popupHandler (popups.login.classPopup, popups.login.classOpen);
  popupHandler (popups.register.classPopup, popups.register.classOpen);
});



function popupHandler (classPopup, classOpen) {
  const popup = document.querySelector(classPopup);
  const openPopupLoginBtns = document.querySelectorAll(classOpen);
  if (!popup || !openPopupLoginBtns) return false;

  // Hide Mobile menu when Popup is open
  const headerNav = document.querySelector(".header nav.header__nav");

  // Open Popup
  openPopupLoginBtns.forEach(openBtn => {
    openBtn.addEventListener("click", () => {
      document.querySelectorAll(".popup").forEach(popup => closePopupLogin (popup));
      popup.classList.add("js-popup-open");
      blockScrollBody();
      headerNav.classList.remove("js-mobile-nav-open");
    });
  });

  // Close Popup
  const closeBtn = popup.querySelector(".popup__close");

  function closePopupLogin (popup) {
    popup.classList.remove("js-popup-open");
    popup.querySelector("form").reset();
    unblockScrollBody();
  }

  closeBtn.addEventListener("click", () => closePopupLogin(popup));

  document.body.addEventListener('click', (evt) => {
    if (evt.target === popup) closePopupLogin(popup);
  });


  // Toggle view password
  const viewPasswordBtn = popup.querySelector(".form-group-eye-toggle");
  const passwordInput = popup.querySelector(".form-group--password input");


  viewPasswordBtn.addEventListener("click", () => {
    viewPasswordBtn.classList.toggle("view");
    const isView = viewPasswordBtn.classList.contains("view");
    passwordInput.setAttribute("type", `${isView ? "text" : "password"}`);
  });

}