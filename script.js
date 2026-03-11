const allAnswerEl = document.querySelectorAll(".question-answer");
// const allShowEl = document.querySelectorAll(".show-icon");
const questionEl = document.querySelectorAll(".question-container");

function removeActive() {
  allAnswerEl.forEach((answer) => {
    if (answer.classList.contains("active")) {
      const icon = answer.closest(".faq-item").querySelector(".show-icon");

      icon.src = "./images/icon-plus.svg";
      answer.classList.remove("active");
    }
  });
}

questionEl.forEach((question) => {
  question.addEventListener("click", function () {
    const faqItem = this.closest(".faq-item");
    const icon = question.querySelector(".show-icon");
    const answer = faqItem.querySelector(".question-answer");

    if (answer.classList.contains("active")) {
      icon.src = "./images/icon-plus.svg";
      removeActive();
    } else {
      icon.src = "./images/icon-minus.svg";
      removeActive();
      answer.classList.add("active");
    }
  });
});

// 115.5
