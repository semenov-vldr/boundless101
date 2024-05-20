const detailCourse = document.querySelector(".detail-course.detail-course--tabs");

if (detailCourse) {

  const tabs = detailCourse.querySelectorAll(".detail-course__tab[data-tab]");
  const bodyList = detailCourse.querySelectorAll(".detail-course__body[data-tab]");

  tabs.forEach(tab => {
    const dataTab = tab.dataset.tab;

    tab.addEventListener("click", () => {

      tabs.forEach(tab => tab.classList.remove("js-active"));
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