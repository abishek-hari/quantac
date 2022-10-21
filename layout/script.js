const hamburger = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
