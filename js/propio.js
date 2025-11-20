window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".personalizado-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const navbar = document.querySelector(".personalizado-navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ============================
   NAVBAR – abrir/cerrar menú
============================ */
const toggler = document.querySelector(".navbar-toggler");
const collapse = document.querySelector(".navbar-collapse");

toggler.addEventListener("click", () => {
  const isOpen = collapse.classList.contains("show");
  navbar.classList.toggle("menu-open", !isOpen);
});

/* ============================
   SLIDER TARJETAS – flechas
============================ */
function moverSlider(direccion) {
  const slider = document.getElementById("cardSlider");

  // Calcula el ancho real de una tarjeta con su gap
  const card = slider.querySelector(".card-item");
  const cardWidth = card.offsetWidth + 20; // 20px es tu gap en el CSS

  slider.scrollBy({
    left: direccion * cardWidth,
    behavior: "smooth",
  });
}
