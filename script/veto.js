/* Comptes rendus vétérinaires */
const animalReports = {
  lion: {},
  elephant: {},
  jaguar: {},
};

// Enregistrer les comptes rendus
document.querySelectorAll(".btn-save-report").forEach((button) => {
  button.addEventListener("click", (event) => {
    const animal = event.target.dataset.animal;
    const healthStatus = document.getElementById(
      `vet-health-status-${animal}`
    ).value;
    const vetNote = document.getElementById(`vet-note-${animal}`).value;

    animalReports[animal].healthStatus = healthStatus;
    animalReports[animal].vetNote = vetNote;

    alert(`Compte rendu pour ${animal} enregistré !`);
  });
});

/* Commentaires sur les habitats */
const habitatComments = {
  savane: "",
  jungle: "",
  marais: "",
};

// Enregistrer les commentaires sur les habitats
document.querySelectorAll(".btn-save-habitat-comment").forEach((button) => {
  button.addEventListener("click", (event) => {
    const habitat = event.target.dataset.habitat;
    const comment = document.getElementById(`vet-comment-${habitat}`).value;

    habitatComments[habitat] = comment;

    alert(`Commentaire sur l'habitat ${habitat} enregistré !`);
  });
});

/* Afficher l'historique de nourriture des animaux (récupéré depuis l'employé) */
const foodConsumption = {
  lion: [
    { date: "2023-09-21", time: "12:00", food: "Viande", quantity: 10 },
    { date: "2023-09-22", time: "12:00", food: "Viande", quantity: 8 },
  ],
  elephant: [
    { date: "2023-09-21", time: "14:00", food: "Herbe", quantity: 50 },
    { date: "2023-09-22", time: "14:00", food: "Herbe", quantity: 55 },
  ],
  jaguar: [{ date: "2023-09-21", time: "13:00", food: "Viande", quantity: 9 }],
};

// Afficher les logs de nourriture
Object.keys(foodConsumption).forEach((animal) => {
  const logContainer = document.getElementById(`food-log-${animal}`);
  foodConsumption[animal].forEach((entry) => {
    const logEntry = document.createElement("p");
    logEntry.textContent = `${entry.date} à ${entry.time} : ${entry.quantity}kg de ${entry.food}`;
    logContainer.appendChild(logEntry);
  });
});
