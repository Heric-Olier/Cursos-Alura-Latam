let addPatientBtn = document.querySelector("#adicionar-paciente"); // selecionamos el boton de agregar pacientes

//*! Evento para adicionar un nuevo paciente

addPatientBtn.addEventListener("click", function (event) {
  event.preventDefault(); //con esta propiedad prevenimos que la pagina se recargue luego de darle click al boton
  let form = document.querySelector("#add-form"); // selecionamos el formulario
  let table = document.querySelector("#tabla-pacientes"); // selecionamos la tabla
  let patient = capturePatientData(form); // capturamos los datos del formulario
  let patientTr = buildPatientTr(patient); // creamos la fila del paciente
  table.appendChild(patientTr);

  /* Validacion de los datos ingresados */

  if (
    patient.nameForm == "" ||
    patient.heightFormweightForm == "" ||
    patient.heightForm == "" ||
    patient.fatnessForm == ""
  ) {
    alert("Por favor, complete todos los campos");
    return false;
  }
});

//! Creamos los elementos de la tabla de pacientes TR y TD

let buildPatientTr = function (patient) {
  /* Crear los elementos de la tabla */
  let patientTr = document.createElement("tr"); // creamos una nueva fila
  patientTr.classList.add("paciente"); // agregamos la clase paciente
  let nameTd = document.createElement("td"); // creamos una nueva columna
  nameTd.classList.add("info-nombre"); // agregamos la clase info-nombre

  let weightTd = document.createElement("td"); // creamos una nueva columna
  let heightTd = document.createElement("td"); // creamos una nueva columna
  let fatnessTd = document.createElement("td"); // creamos una nueva columna
  let imcTd = document.createElement("td"); // creamos una nueva columna

  /* Agregamos los valores a las columnas */
  nameTd.textContent = patient.nameForm;
  weightTd.textContent = patient.weightForm;
  heightTd.textContent = patient.heightForm;
  fatnessTd.textContent = patient.fatnessForm;
  imcTd.textContent = calculateImc(patient.weightForm, patient.heightForm);

  /* Agregamos las columnas a la fila */
  patientTr.appendChild(nameTd);
  patientTr.appendChild(weightTd);
  patientTr.appendChild(heightTd);
  patientTr.appendChild(fatnessTd);
  patientTr.appendChild(imcTd);

  return patientTr;
};

//! Capturamos los datos del formulario

let capturePatientData = function (form) {
  /* Obtenemos los datos del formulario */
  let patient = {
    nameForm: form.nombre.value,
    weightForm: form.peso.value,
    heightForm: form.altura.value,
    fatnessForm: form.gordura.value,
  };

  return patient;
};
