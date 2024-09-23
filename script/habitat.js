/* Pop up */
// Sélectionne les boutons qui ouvrent la pop-up
const openPopupButtons = document.querySelectorAll(".open-popup");
// Sélectionne la pop-up et ses éléments
const popupOverlay = document.getElementById("popup-overlay");
const popupImage = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupSurnom = document.getElementById("popup-surnom");
const popupAge = document.getElementById("popup-age");
const popupPoids = document.getElementById("popup-poids");
const popupHauteur = document.getElementById("popup-hauteur");
const popupLongueur = document.getElementById("popup-longueur");
const popupHabitat = document.getElementById("popup-habitat");
const closePopup = document.getElementById("close-popup");

// Fonction pour ouvrir la pop-up et remplir son contenu
openPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Récupérer les données à partir des attributs data-*
    const image = button.getAttribute("data-image");
    const title = button.getAttribute("data-title");
    const surnom = button.getAttribute("data-surnom");
    const age = button.getAttribute("data-age");
    const poids = button.getAttribute("data-poids");
    const hauteur = button.getAttribute("data-hauteur");
    const longueur = button.getAttribute("data-longueur");
    const habitat = button.getAttribute("data-habitat");

    // Remplir les éléments de la pop-up avec ces données
    popupImage.src = image;
    popupTitle.textContent = title;
    popupSurnom.textContent = surnom;
    popupAge.textContent = age;
    popupPoids.textContent = poids;
    popupHauteur.textContent = hauteur;
    popupLongueur.textContent = longueur;
    popupHabitat.textContent = habitat;

    // Afficher la pop-up
    popupOverlay.style.display = "flex";
  });
});

// Fermer la pop-up en cliquant sur la croix
closePopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

// Fermer la pop-up en cliquant à l'extérieur du contenu
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});

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
