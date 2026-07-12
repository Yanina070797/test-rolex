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
