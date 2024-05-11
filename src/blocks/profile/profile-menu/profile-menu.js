const profileMenu = document.querySelector(".profile-menu");

if (profileMenu) {

  const navLinks = profileMenu.querySelectorAll(".profile-menu__nav-link");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("js-active");
    }
  });
}