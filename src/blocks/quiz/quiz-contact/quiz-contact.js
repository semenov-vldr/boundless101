const quizContact = document.querySelector(".quiz.quiz--contact");

if (quizContact) {

  const contactForm = document.querySelector(".quiz__contact-form");

  const inputs = quizContact.querySelectorAll("input:required");

  contactForm.addEventListener("change", () => {

    const isEmptyInputs = Array.from(inputs).some(input => !input.value);

    if (!isEmptyInputs) {
      console.log("valid")
    } else {
      console.log("dgewg")
    }


  })




}