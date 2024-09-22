import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/connexion", "Connexion", "/pages/connexion.html"),
  new Route("/contact", "Contactez nous", "/pages/contact.html"),
  new Route(
    "/habitats",
    "Tous les habitats",
    "/pages/habitats.html",
    "/script/habitat.js"
  ),
  new Route("/services", "Tous les services", "/pages/services.html"),
  new Route(
    "/savane",
    "Tous les habitats: SAVANE",
    "/pages/habitats/savane.html"
  ),
  new Route(
    "/jungle",
    "Tous les habitats: JUNGLE",
    "/pages/habitats/jungle.html"
  ),
  new Route(
    "/marais",
    "Tous les habitats: MARAIS",
    "/pages/habitats/marais.html"
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo ARCADIA";
