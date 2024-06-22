const matchedCourses = document.querySelector(".matched-courses");

if (matchedCourses) {

  const sortItems = matchedCourses.querySelectorAll(".courses-sort__item");

  sortItems.forEach(item => {
    item.addEventListener("click", () => {
      sortItems.forEach(i => i.classList.remove("js-active"));
      item.classList.add("js-active");
    });
  });



  // Rating

  const ratings = document.querySelectorAll(".rating");

  if (ratings) {

    ratings.forEach(rating => {
      const dataRating = +rating.dataset.rating;
      const ratingStarSrc = rating.dataset.starSrc;

      for(let i = 1; i <= dataRating; i++) {
        const tagImg = document.createElement("img");
        tagImg.src= ratingStarSrc;
        rating.appendChild(tagImg);
      }
    });

  }


}