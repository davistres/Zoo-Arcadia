// DOM Elements
const menuConnexion = document.getElementById("menuConnexion");
const menuDeconnexion = document.getElementById("menuDeconnexion");
const menuConnexionMobile = document.getElementById("menuConnexionMobile");
const menuDeconnexionMobile = document.getElementById("menuDeconnexionMobile");
const loginForm = document.getElementById("c-login-form");
const errorMessage = document.getElementById("errorMessage");
const adminLink = document.querySelector(".admin");
const employeLink = document.querySelector(".employe");
const veterinaireLink = document.querySelector(".veterinaire");

// Sauvegarde du rôle dans LocalStorage
const savedRole = localStorage.getItem("role");

// Gestion des états des menus
function updateMenuForRole(role) {
  // Cacher tous les liens de rôle
  adminLink.style.display = "none";
  employeLink.style.display = "none";
  veterinaireLink.style.display = "none";

  // Montrer le bon lien selon le rôle
  if (role === "admin") {
    adminLink.style.display = "block";
    document.querySelector(".mobile-menu .admin").style.display = "block";
  } else if (role === "employe") {
    employeLink.style.display = "block";
    document.querySelector(".mobile-menu .employe").style.display = "block";
  } else if (role === "veterinaire") {
    veterinaireLink.style.display = "block";
    document.querySelector(".mobile-menu .veterinaire").style.display = "block";
  }

  // Mise à jour des menus Connexion/Déconnexion
  menuConnexion.style.display = "none";
  menuDeconnexion.style.display = "block";
  menuConnexionMobile.style.display = "none";
  menuDeconnexionMobile.style.display = "block";
}

// Si un rôle est déjà sauvegardé, mettre à jour les menus
if (savedRole) {
  updateMenuForRole(savedRole);
}

// Gestion de la soumission du formulaire de connexion
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const password = document.getElementById("password").value;

  // Définition des mots de passe pour chaque rôle
  const passwords = {
    "0003": "admin",
    "0001": "employe",
    "0002": "veterinaire",
  };

  // Vérification du mot de passe
  const role = passwords[password];
  if (role) {
    // Sauvegarder le rôle dans LocalStorage
    localStorage.setItem("role", role);

    // Mettre à jour les menus
    updateMenuForRole(role);

    // Cacher le formulaire de connexion
    loginForm.style.display = "none";
  } else {
    // Afficher un message d'erreur si le mot de passe est incorrect
    errorMessage.textContent = "Mot de passe incorrect.";
  }
});

// Gestion de la déconnexion
menuDeconnexion.addEventListener("click", function () {
  localStorage.removeItem("role"); // Supprimer le rôle sauvegardé
  location.reload(); // Recharger la page pour réinitialiser l'état
});

menuDeconnexionMobile.addEventListener("click", function () {
  localStorage.removeItem("role"); // Supprimer le rôle sauvegardé
  location.reload(); // Recharger la page pour réinitialiser l'état
});
