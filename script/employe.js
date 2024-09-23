/* Valider les commentaires */

const pendingComments = [
  { id: 1, text: "Super zoo, très propre !" },
  { id: 2, text: "Le personnel est très accueillant !" },
];

// Conteneur pour afficher les commentaires en attente
const pendingCommentsContainer = document.getElementById(
  "employee-pending-comments"
);

pendingComments.forEach((comment) => {
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("employee-comment");

  const commentText = document.createElement("p");
  commentText.textContent = comment.text;

  const approveButton = document.createElement("button");
  approveButton.textContent = "Valider";
  approveButton.classList.add("btn");
  approveButton.addEventListener("click", () => approveComment(comment));

  const rejectButton = document.createElement("button");
  rejectButton.textContent = "Rejeter";
  rejectButton.classList.add("btn");
  rejectButton.addEventListener("click", () => rejectComment(commentDiv));

  commentDiv.append(commentText, approveButton, rejectButton);
  pendingCommentsContainer.append(commentDiv);
});

// Fonction pour approuver un commentaire
function approveComment(comment) {
  const approvedCommentsContainer = document.querySelector(".avis-container");
  const newCard = document.createElement("div");
  newCard.classList.add("avis-card");

  newCard.innerHTML = `
    <h3 class="avis-title">Un visiteur</h3>
    <p class="avis-text">${comment.text}</p>
  `;
  approvedCommentsContainer.append(newCard);

  alert("Commentaire approuvé !");
}

// Fonction pour rejeter un commentaire
function rejectComment(commentElement) {
  commentElement.remove(); // Supprime l'élément du DOM
  alert("Commentaire rejeté !");
}

/* Modification des services */

// Fonction pour mettre à jour un service
function updateService(serviceId) {
  const description = document.getElementById(
    `service-description-${serviceId}`
  ).value;
  alert(`Service ${serviceId} mis à jour : ${description}`);
}

/* Ajouter la consommation de nourriture */

const foodForm = document.getElementById("employee-food-form");
const foodLog = document.getElementById("employee-food-log");

foodForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const animal = document.getElementById("employee-animal-select").value;
  const date = document.getElementById("employee-food-date").value;
  const time = document.getElementById("employee-food-time").value;
  const foodType = document.getElementById("employee-food-type").value;
  const quantity = document.getElementById("employee-food-quantity").value;

  const logEntry = document.createElement("p");
  logEntry.textContent = `${animal} a mangé ${quantity} kg de ${foodType} le ${date} à ${time}`;
  foodLog.appendChild(logEntry);

  alert("Consommation de nourriture ajoutée !");
});

/* Voir les messages de contact */

// Liste des messages de contact
const contactMessages = [
  {
    email: "visiteur1@example.com",
    message: "J'aimerais savoir les horaires...",
  },
  {
    email: "visiteur2@example.com",
    message: "Est-ce possible de visiter en groupe ?",
  },
];

// Conteneur des messages de contact
const contactMessagesContainer = document.getElementById(
  "employee-contact-messages"
);

contactMessages.forEach((msg) => {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("employee-message");

  messageDiv.innerHTML = `
    <p><strong>Email :</strong> ${msg.email}</p>
    <p><strong>Message :</strong> ${msg.message}</p>
  `;
  contactMessagesContainer.appendChild(messageDiv);
});
