// Quiz Study
const quizStudy = document.getElementById("quiz-study");

if (quizStudy) {

  const questions = quizStudy.querySelector(".quiz__questions");
  const results = quizStudy.querySelector(".quiz__results");
  const btnNext = quizStudy.querySelector(".quiz__button-next");
  const quizQuestionsItems = questions.querySelectorAll(".quiz__questions-item");

  let questionCount = 0;

  function quizDisplay (questionCount) {
    quizQuestionsItems.forEach(question => question.classList.add("hidden"));

    btnNext.disabled = true;

    if (questionCount < quizQuestionsItems.length) {
      quizQuestionsItems[questionCount].classList.remove("hidden");
    } else {
      btnNext.disabled = false;
      results.classList.remove("hidden");
    }
  }


  function handleQuestion (questionNumber) {
    const answersQuestions = Array.from(quizQuestionsItems[questionNumber]
      .querySelectorAll("input[type='radio']"));

    const isSelected = answersQuestions.some(input => input.checked);
    btnNext.disabled = !isSelected;
  }

  quizStudy.addEventListener("change", () => {
    handleQuestion(questionCount);
  });


  btnNext.addEventListener("click", () => {
    questionCount++;
    quizDisplay (questionCount);
  });


}