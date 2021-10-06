const menuToggle = document.querySelector(".menu-toggle input");
const nav2 = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav2.classList.toggle("slide");
});
