let patients = document.querySelectorAll(".paciente");
let addPatientBtn = document.querySelector("#adicionar-paciente"); // selecionamos el boton de agregar pacientes




//*! Evento para adicionar un nuevo paciente

addPatientBtn.addEventListener("click", function (event) {
  event.preventDefault(); //con esta propiedad prevenimos que la pagina se recargue luego de darle click al boton
  let form = document.querySelector("#add-form"); // selecionamos el formulario
  let nameForm = form.nombre.value;
  let weightForm = form.peso.value;
  let heightForm = form.altura.value;
  let fatnessForm = form.gordura.value;
  
  console.log(nameForm);
  console.log(weightForm);
  console.log(heightForm);
  console.log(fatnessForm);

  let patientTr = document.createElement("tr"); // creamos una nueva fila
  let nameTd = document.createElement("td"); // creamos una nueva columna
  let weightTd = document.createElement("td");  // creamos una nueva columna
  let heightTd = document.createElement("td");  // creamos una nueva columna
  let fatnessTd = document.createElement("td");  // creamos una nueva columna
  let imcTd = document.createElement("td");  // creamos una nueva columna



  //*! Validacion de los datos ingresados

  if (nameForm == "" || weightForm == "" || heightForm == "" || fatnessForm == "") {
    alert("Por favor, complete todos los campos");
    return;
  }
});


//*! Calculamos el IMC de los pacientes

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
