const menuBtn = document.querySelector(".menuBtn");
const navLinks = document.querySelector(".nav__links");
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("active");
});
