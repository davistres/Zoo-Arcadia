document.addEventListener("DOMContentLoaded", function () {
  const menuConnexion = document.getElementById("menuConnexion");
  const menuDeconnexion = document.getElementById("menuDeconnexion");
  const menuConnexionMobile = document.getElementById("menuConnexionMobile");
  const menuDeconnexionMobile = document.getElementById(
    "menuDeconnexionMobile"
  );
  const adminLink = document.querySelector(".admin");
  const employeLink = document.querySelector(".employe");
  const veterinaireLink = document.querySelector(".veterinaire");

  const savedRole = localStorage.getItem("role");

  function updateMenuForRole(role) {
    // Le code existant pour mettre à jour les menus
  }

  if (savedRole) {
    updateMenuForRole(savedRole);
  }

  if (menuDeconnexion) {
    menuDeconnexion.addEventListener("click", logout);
  }
  if (menuDeconnexionMobile) {
    menuDeconnexionMobile.addEventListener("click", logout);
  }

  function logout() {
    localStorage.removeItem("role");
    location.reload();
  }
});
