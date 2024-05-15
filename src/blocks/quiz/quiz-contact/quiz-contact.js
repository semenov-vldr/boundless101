const quizContact = document.querySelector(".quiz.quiz--contact");

if (quizContact) {

  const quizBody = document.querySelector(".quiz__body");
  const contactForm = document.querySelector(".quiz__contact-form");
  const submitBtn = document.querySelector(".quiz__contact-form-submit");
  const inputs = quizContact.querySelectorAll("input:required");

  function successForm () {
    quizBody.classList.add("js-hidden");

    setTimeout(() => {
      quizBody.classList.remove("js-hidden");
      contactForm.reset();
    }, 5000);
  };

  const handleChange = () => {
    for	(const input of inputs) {
      if (input.value === "") {
        submitBtn.disabled = true;
        return;
      }
    }
    submitBtn.disabled = false;
  }

  inputs.forEach(input => {
    input.onkeydown = input.onkeyup = input.onkeypress = input.change = handleChange;
  });


  async function postData (url="", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await response.json();
  };



  contactForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const data = new FormData(contactForm);

    const url = "https://httpbin.org/post";

    postData(url, data).then(response => {
      if (response.status < 300) {
        console.log("Форма успешно отправлена");
        successForm();
      } else {
        console.log("Ошибка при отправке формы");
      }
    }).catch(() => console.log("Catch Ошибка"));
  });
}