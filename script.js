const allAnswerEl = document.querySelectorAll(".question-answer");
const allShowEl = document.querySelectorAll(".show-icon");

function removeActive() {
  allAnswerEl.forEach((answer) => {
    if (answer.classList.contains("active")) {
      const icon = answer.closest(".faq-item").querySelector(".show-icon");

      icon.src = "./images/icon-plus.svg";
      answer.classList.remove("active");
    }
  });
}

allShowEl.forEach((icon) => {
  icon.addEventListener("click", function () {
    const faqItem = this.closest(".faq-item");
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
