let addPatientBtn = document.querySelector("#adicionar-paciente"); // selecionamos el boton de agregar pacientes

//*! Evento para adicionar un nuevo paciente

addPatientBtn.addEventListener("click", function (event) {
  event.preventDefault(); //con esta propiedad prevenimos que la pagina se recargue luego de darle click al boton
  let form = document.querySelector("#add-form"); // selecionamos el formulario
  let table = document.querySelector("#tabla-pacientes"); // selecionamos la tabla
  let patient = capturePatientData(form); // capturamos los datos del formulario
  let patientTr = buildPatientTr(patient); // creamos la fila del paciente
  //todo: VALIDAR PACIENTE//

  let errores = validatePatient(patient);
  if (errores.length > 0) {
    showMessageError(errores);
    return;
  }

  table.appendChild(patientTr);
  form.reset(); // reseteamos el formulario

  let errorMessage = document.querySelector("#error-message");
  errorMessage.innerHTML = "";

  /* Validacion de los datos ingresados */
});

//! Creamos los elementos de la tabla de pacientes TR y TD

let buildPatientTr = function (patient) {
  /* Crear los elementos de la tabla */
  let patientTr = document.createElement("tr"); // creamos una nueva fila
  patientTr.classList.add("paciente"); // agregamos la clase paciente
  /* Agregamos las columnas a la fila */
  patientTr.appendChild(buildPatientTd(patient.nameForm, "info-nombre"));
  patientTr.appendChild(buildPatientTd(patient.weightForm, "info-peso"));
  patientTr.appendChild(buildPatientTd(patient.heightForm, "info-altura"));
  patientTr.appendChild(buildPatientTd(patient.fatnessForm, "info-gordura"));
  patientTr.appendChild(
    buildPatientTd(
      calculateImc(patient.weightForm, patient.heightForm),
      "info-imc"
    )
  );

  return patientTr;
};

let buildPatientTd = function (dato, clase) {
  let td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;
  return td;
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

//! validacion de los datos ingresados

let validatePatient = (patient) => {
  let errores = [];
  if (patient.nameForm.length == 0) {
    errores.push("El nombre no puede estar vacio");
  }
  if (patient.weightForm.length == 0) {
    errores.push("El peso no puede estar vacio");
  }

  if (patient.heightForm.length == 0) {
    errores.push("La altura no puede estar vacia");
  }

  if (patient.fatnessForm.length == 0) {
    errores.push("El % de gordura no puede estar vacia");
  }

  if (!validatePatientWeight(patient.weightForm)) {
    errores.push("El peso es invalido");
  }

  if (!validatePatientHeight(patient.heightForm)) {
    errores.push("La altura es invalida");
  }
  return errores;
};

let showMessageError = (errores) => {
  let ul = document.querySelector("#error-message");
  ul.innerHTML = "";

  errores.forEach(function (error) {
    let li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });
};
