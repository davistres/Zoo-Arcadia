/* Valider les commentaires */

const pendingComments = [
  { id: 1, text: "Super zoo, très propre !" },
  { id: 2, text: "Le personnel est très accueillant !" },
];

const pendingCommentsContainer = document.getElementById("pending-comments");

pendingComments.forEach((comment) => {
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  const commentText = document.createElement("p");
  commentText.textContent = comment.text;

  const approveButton = document.createElement("button");
  approveButton.textContent = "Valider";
  approveButton.addEventListener("click", () => approveComment(comment));

  const rejectButton = document.createElement("button");
  rejectButton.textContent = "Rejeter";
  rejectButton.addEventListener("click", () => rejectComment(comment.id));

  commentDiv.append(commentText, approveButton, rejectButton);
  pendingCommentsContainer.append(commentDiv);
});

function approveComment(comment) {
  const approvedCommentsContainer = document.querySelector(".avis-container");
  const newCard = document.createElement("div");
  newCard.classList.add("avis-card");

  newCard.innerHTML = `<h3 class="avis-title">Un visiteur</h3><p class="avis-text">${comment.text}</p>`;
  approvedCommentsContainer.append(newCard);

  alert("Commentaire approuvé !");
}

function rejectComment(id) {
  const commentToDelete = pendingComments.find((comment) => comment.id === id);
  commentToDelete.remove(); // Supprimer l'élément du DOM
}

/* Modification des services */

function updateService(serviceId) {
  const description = document.getElementById(
    `service-description-${serviceId}`
  ).value;
  alert(`Service ${serviceId} mis à jour : ${description}`);
}

/* Ajouter la consommation de la nourriture */
const foodForm = document.getElementById("food-form");
const foodLog = document.getElementById("food-log");

foodForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const animal = document.getElementById("animal-select").value;
  const date = document.getElementById("food-date").value;
  const time = document.getElementById("food-time").value;
  const foodType = document.getElementById("food-type").value;
  const quantity = document.getElementById("food-quantity").value;

  const logEntry = document.createElement("p");
  logEntry.textContent = `${animal} a mangé ${quantity}kg de ${foodType} le ${date} à ${time}`;
  foodLog.appendChild(logEntry);

  alert("Consommation de nourriture ajoutée !");
});

/* Voir les messages de contact */

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

const contactMessagesContainer = document.getElementById("contact-messages");

contactMessages.forEach((msg) => {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  messageDiv.innerHTML = `<p><strong>Email :</strong> ${msg.email}</p><p><strong>Message :</strong> ${msg.message}</p>`;
  contactMessagesContainer.appendChild(messageDiv);
});

<script type="module" src="script/employe.js"></script>;
