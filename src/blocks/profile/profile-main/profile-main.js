const profileMain = document.querySelector(".profile-main");

if (profileMain) {

  const tabs = profileMain.querySelectorAll(".profile-main__tabs-item");
  const contents = profileMain.querySelectorAll(".profile-main__content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(tab => tab.classList.remove("js-active"));
      tab.classList.add("js-active");
      const dataTab = tab.dataset.tab;
      contents.forEach(cont => cont.classList.add("js-hidden"));
      const content = profileMain.querySelector(`[data-cont='${dataTab}']`);
      content.classList.remove("js-hidden");
    });
  });

}