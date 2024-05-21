const detailCourseTabs = document.querySelectorAll(".detail-course__tab[data-tab]");

if (detailCourseTabs) {

  const bodyList = document.querySelectorAll(".detail-course__body[data-tab]");

  detailCourseTabs.forEach(tab => {
    const dataTab = tab.dataset.tab;

    tab.addEventListener("click", () => {
      detailCourseTabs.forEach(tab => tab.classList.remove("js-active"));
      tab.classList.add("js-active");
      bodyList.forEach(bodyItem => bodyItem.classList.add("js-hidden"));

      bodyList.forEach(bodyItem => {
        const dataBody = bodyItem.dataset.tab;
        if (dataTab === dataBody) {
          bodyItem.classList.remove("js-hidden");
        }
      });
    });
  });


}