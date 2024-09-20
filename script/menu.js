const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active"); // Afficher ou cacher le menu mobile
});
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active"); // Retirer la classe active pour cacher le menu
});
