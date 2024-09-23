/* Gestion des comptes utilisateurs */
const userList = document.getElementById("user-list");
const users = [];

// Créer un nouveau compte
document
  .getElementById("create-user-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const userType = document.getElementById("user-type").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = { type: userType, username, password };
    users.push(user);

    const listItem = document.createElement("li");
    listItem.textContent = `${userType} : ${username}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.addEventListener("click", () => {
      users.splice(users.indexOf(user), 1);
      listItem.remove();
    });

    listItem.appendChild(deleteBtn);
    userList.appendChild(listItem);

    alert("Compte créé avec succès !");
  });

/* Gestion du contenu */
document.querySelector(".btn-save-hours").addEventListener("click", () => {
  const hours = document.getElementById("zoo-hours").value;
  alert(`Horaires sauvegardés : ${hours}`);
});

document.querySelector(".btn-save-services").addEventListener("click", () => {
  const services = document.getElementById("zoo-services").value;
  alert(`Services sauvegardés : ${services}`);
});

document.querySelector(".btn-save-habitats").addEventListener("click", () => {
  const habitats = document.getElementById("zoo-habitats").value;
  alert(`Habitats sauvegardés : ${habitats}`);
});

document.querySelector(".btn-save-animals").addEventListener("click", () => {
  const animals = document.getElementById("zoo-animals").value;
  alert(`Liste des animaux sauvegardée : ${animals}`);
});

/* Comptes rendus vétérinaires */
const vetReports = [
  { animal: "lion", date: "2023-09-21", report: "Lion en bonne santé" },
  {
    animal: "elephant",
    date: "2023-09-21",
    report: "Elephant blessé à la patte",
  },
  { animal: "jaguar", date: "2023-09-21", report: "Jaguar en forme" },
];

document.querySelector(".btn-apply-filters").addEventListener("click", () => {
  const animalFilter = document.getElementById("filter-animal").value;
  const dateFilter = document.getElementById("filter-date").value;
  const reportContainer = document.getElementById("vet-reports-container");

  reportContainer.innerHTML = ""; // Vider l'affichage actuel

  vetReports.forEach((report) => {
    if (
      (animalFilter === "all" || report.animal === animalFilter) &&
      (!dateFilter || report.date === dateFilter)
    ) {
      const reportDiv = document.createElement("div");
      reportDiv.classList.add("vet-report");
      reportDiv.innerHTML = `<p>${report.animal} - ${report.date} : ${report.report}</p>`;
      reportContainer.appendChild(reportDiv);
    }
  });
});

/* Dashboard des consultations */
const consultationCounts = {
  lion: 0,
  elephant: 0,
  jaguar: 0,
};

// Simuler les clics sur les images des animaux
document.querySelectorAll(".h-habitatanimal img").forEach((img) => {
  img.addEventListener("click", (event) => {
    const animal = event.target.dataset.animal;
    consultationCounts[animal]++;
    document.getElementById(`${animal}-count`).textContent =
      consultationCounts[animal];
  });
});
