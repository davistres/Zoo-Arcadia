// Sélectionnez tous les boutons
const buttons = document.querySelectorAll(".learn-more-btn");

// Ajouter un événement de clic à chaque bouton
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Obtenez l'ID de l'habitat associé au bouton cliqué
    const habitatId = event.target.getAttribute("data-habitat");
    const habitat = document.getElementById(habitatId);

    // Si l'habitat est déjà ouvert, le fermer
    if (habitat.classList.contains("active")) {
      habitat.classList.remove("active");
    } else {
      // Fermer tous les autres habitats
      document.querySelectorAll(".h-habitat-item").forEach((item) => {
        item.classList.remove("active");
      });

      // Ouvrir l'habitat sélectionné
      habitat.classList.add("active");
    }
  });
});

/* Pop up */
// Sélectionner les éléments
const openPopupBtn = document.querySelector(".open-popup-btn");
const popup = document.getElementById("popup");
const closePopupBtn = document.querySelector(".close-popup-btn");

// Ouvrir le pop-up
openPopupBtn.addEventListener("click", () => {
  popup.style.display = "flex"; // Afficher le pop-up
});

// Fermer le pop-up en cliquant sur le bouton de fermeture
closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none"; // Cacher le pop-up
});

// Fermer le pop-up en cliquant en dehors du contenu
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none"; // Cacher le pop-up
  }
});
