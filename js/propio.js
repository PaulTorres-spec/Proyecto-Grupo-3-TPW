window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".personalizado-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const navbar = document.querySelector(".custom-navbar");
const toggler = document.querySelector(".navbar-toggler");
const collapse = document.querySelector(".navbar-collapse");
toggler.addEventListener("click", () => {
  if (collapse.classList.contains("show")) {
    navbar.classList.remove("menu-open");
  } else {
    navbar.classList.add("menu-open");
  }
  navbar.classList.toggle("menu-open", !collapse.classList.contains("show"));
});
