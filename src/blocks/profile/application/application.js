const applications = document.querySelectorAll(".application");

if (applications) {

  applications.forEach(application => {
    const title = application.querySelector(".application__title");
    title.addEventListener("click", () => {
      title.classList.toggle("js-close", !title.classList.contains("js-close"));
    });
  });

}