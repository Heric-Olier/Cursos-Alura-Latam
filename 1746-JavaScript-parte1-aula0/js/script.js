let patients = document.querySelectorAll(".paciente");

for (let i = 0; i < patients.length; i++) {
    let patient = patients[i];
    let tdWeight = patient.querySelector(".info-peso"); // peso
    let weight = tdWeight.textContent; // peso del paciente
    let tdHeight = patient.querySelector(".info-altura"); // altura
    let height = tdHeight.textContent; // altura del paciente
    let tdImc = patient.querySelector(".info-imc"); // imc
    
    let weightIsValid = true;
    let heightIsValid = true;
    
    if (weight < 0 || weight > 1000 || height < 0 || height > 3.0) {
      tdImc.textContent = "Datos inválidos";
      weightIsValid = false;
      heightIsValid = false;
    }
    
    if (weightIsValid && heightIsValid) {
      let imc = weight / (height * height);
      tdImc.textContent = imc.toFixed(2);
    }
    
  }
  



