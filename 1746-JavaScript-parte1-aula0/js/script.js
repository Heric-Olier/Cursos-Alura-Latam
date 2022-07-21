let patients = document.querySelectorAll(".paciente");
let addPatientBtn = document.querySelector("#adicionar-paciente");

addPatientBtn.addEventListener("click", function () {
  alert("Paciente adicionado com sucesso!");
});

for (let i = 0; i < patients.length; i++) {
  let patient = patients[i];
  let tdWeight = patient.querySelector(".info-peso"); // peso
  let weight = tdWeight.textContent; // peso del paciente
  let tdHeight = patient.querySelector(".info-altura"); // altura
  let height = tdHeight.textContent; // altura del paciente
  let tdImc = patient.querySelector(".info-imc"); // imc

  let weightIsValid = true;
  let heightIsValid = true;

  if (weight < 0 || weight > 1000) {
    tdImc.textContent = "Peso inválido";
    weightIsValid = false;
    patient.classList.add("invalid-patient");
  }

  if (height < 0 || height > 3.0) {
    tdImc.textContent = "Altura inválida";
    heightIsValid = false;
    patient.classList.add("invalid-patient");
  }

  if (weightIsValid && heightIsValid) {
    let imc = weight / (height * height);
    tdImc.textContent = imc.toFixed(2);
  }
}
