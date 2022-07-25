let patients = document.querySelectorAll(".paciente");

//*! Creamos una funcion para calcular el IMC de los pacientes

let calculateImc = function (weight, height) {
  let imc = weight / (height * height);
  return imc.toFixed(2);
};

//*! Creamos una funcion para calcular el peso y la altura de los pacientes

let validatePatientWeight = (weight) => {
  if (weight >= 0 && weight <= 1000) {
    return true;
  }
  return false;
};

let validatePatientHeight = (height) => {
  if (height >= 0 && height <= 3.0) {
    return true;
  }
  return false;
};

//*! Recorremos los pacientes y calculamos el IMC

for (let i = 0; i < patients.length; i++) {
  let patient = patients[i];
  let tdWeight = patient.querySelector(".info-peso"); // peso
  let weight = tdWeight.textContent; // peso del paciente
  let tdHeight = patient.querySelector(".info-altura"); // altura
  let height = tdHeight.textContent; // altura del paciente
  let tdImc = patient.querySelector(".info-imc"); // imc

  let weightIsValid = validatePatientWeight(weight);
  let heightIsValid = validatePatientHeight(height);

  if (!weightIsValid) {
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
    tdImc.textContent = calculateImc(weight, height);
  }
}
