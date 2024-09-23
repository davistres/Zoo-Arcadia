// Éléments du DOM
const menuConnexion = document.getElementById("menuConnexion");
const menuDeconnexion = document.getElementById("menuDeconnexion");
const loginForm = document.getElementById("c-login-form");
const errorMessage = document.getElementById("errorMessage");

const adminLink = document.querySelector(".admin");
const employeLink = document.querySelector(".employe");
const veterinaireLink = document.querySelector(".veterinaire");

// Simulation de connexion avec mot de passe
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page lors de la soumission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Mots de passe définis pour chaque rôle
  const passwords = {
    "0003": "admin",
    "0001": "employe",
    "0002": "veterinaire",
  };

  // Réinitialiser le message d'erreur
  errorMessage.textContent = "";

  // Vérification du mot de passe
  const role = passwords[password];
  if (role) {
    // Si le mot de passe est correct, cacher le formulaire
    loginForm.style.display = "none";

    // Afficher Déconnexion et cacher Connexion
    menuConnexion.classList.add("hidden");
    menuDeconnexion.classList.remove("hidden");

    // Afficher l'onglet correspondant au rôle
    if (role === "admin") {
      adminLink.style.display = "block";
    } else if (role === "employe") {
      employeLink.style.display = "block";
    } else if (role === "veterinaire") {
      veterinaireLink.style.display = "block";
    }
  } else {
    // Si le mot de passe est incorrect, afficher un message d'erreur
    errorMessage.textContent = "Mot de passe incorrect.";
  }
});

// Déconnexion (réinitialiser l'état)
menuDeconnexion.addEventListener("click", function () {
  // Réinitialiser le menu et afficher le formulaire
  menuConnexion.classList.remove("hidden");
  menuDeconnexion.classList.add("hidden");

  // Cacher tous les onglets
  adminLink.style.display = "none";
  employeLink.style.display = "none";
  veterinaireLink.style.display = "none";

  // Réafficher le formulaire de connexion
  loginForm.style.display = "block";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  errorMessage.textContent = ""; // Réinitialiser le message d'erreur
});
