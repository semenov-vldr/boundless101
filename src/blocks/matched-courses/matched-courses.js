const matchedCourses = document.querySelector(".matched-courses");

if (matchedCourses) {

  const sortItems = matchedCourses.querySelectorAll(".courses-sort__item");

  sortItems.forEach(item => {
    item.addEventListener("click", () => {
      sortItems.forEach(i => i.classList.remove("js-active"));
      item.classList.add("js-active");
    });
  });


}