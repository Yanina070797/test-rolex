//Dark-mode
const body = document.querySelector(".body");
const headerButtons = document.querySelectorAll(
  ".header-dark-button, .header-light-button",
);

headerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    body.classList.toggle("is-dark");
  });
});

// Feedbacks slider

const feedbackItems = document.querySelectorAll(".feedback-list-item");
const feedbackNextButton = document.querySelector(".feedbacks-next-button");
const feedbackBackButton = document.querySelector(".feedbacks-back-button");

let currentFeedbackIndex = 0;

function showFeedback() {
  feedbackItems.forEach((feedback) => {
    feedback.classList.remove("is-active");
  });

  feedbackItems[currentFeedbackIndex].classList.add("is-active");
}

feedbackNextButton.addEventListener("click", () => {
  if (currentFeedbackIndex < feedbackItems.length - 1) {
    currentFeedbackIndex++;

    showFeedback();
  }
});

feedbackBackButton.addEventListener("click", () => {
  if (currentFeedbackIndex > 0) {
    currentFeedbackIndex--;

    showFeedback();
  }
});

//Burger-menu close and open
const headerBurgerMenuButton = document.querySelector(
  ".header-burger-menu-button",
);
const mobileBurgerMenuCloseButton = document.querySelector(
  ".mobile-burger-menu-close-button",
);
const mobileBurgerMenu = document.querySelector(".mobile-burger-menu");

headerBurgerMenuButton.addEventListener("click", () => {
  mobileBurgerMenu.classList.add("is-open");
});

mobileBurgerMenuCloseButton.addEventListener("click", () => {
  mobileBurgerMenu.classList.remove("is-open");
});
