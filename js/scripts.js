//Dark-mode
const body = document.querySelector(".body");
const headerDarkButton = document.querySelector(".header-dark-button");

headerDarkButton.addEventListener("click", () => {
  body.classList.toggle("is-dark");
});
