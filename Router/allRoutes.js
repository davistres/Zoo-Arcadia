import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route(
    "/connexion",
    "Connexion",
    "/pages/connexion.html",
    "/script/connexion.js"
  ),
  new Route("/contact", "Contactez nous", "/pages/contact.html"),
  new Route(
    "/habitats",
    "Tous les habitats",
    "/pages/habitats.html",
    "/script/habitat.js"
  ),
  new Route("/services", "Tous les services", "/pages/services.html"),
  new Route(
    "/compteadmin",
    "Administrateur",
    "/pages/admin.html",
    "/script/admin.js"
  ),
  new Route(
    "/compteveto",
    "Vétérinaire",
    "/pages/veto.html",
    "/script/veto.js"
  ),
  new Route(
    "/compteemploye",
    "Employé",
    "/pages/employe.html",
    "/script/employe.js"
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo ARCADIA";
