let addPatientBtn = document.querySelector("#adicionar-paciente"); // selecionamos el boton de agregar pacientes

//*! Evento para adicionar un nuevo paciente

addPatientBtn.addEventListener("click", function (event) {
  event.preventDefault(); //con esta propiedad prevenimos que la pagina se recargue luego de darle click al boton
  let form = document.querySelector("#add-form"); // selecionamos el formulario
  let table = document.querySelector("#tabla-pacientes"); // selecionamos la tabla
  let nameForm = form.nombre.value;
  let weightForm = form.peso.value;
  let heightForm = form.altura.value;
  let fatnessForm = form.gordura.value;


  let patientTr = document.createElement("tr"); // creamos una nueva fila
  let nameTd = document.createElement("td"); // creamos una nueva columna
  let weightTd = document.createElement("td");  // creamos una nueva columna
  let heightTd = document.createElement("td");  // creamos una nueva columna
  let fatnessTd = document.createElement("td");  // creamos una nueva columna
  let imcTd = document.createElement("td");  // creamos una nueva columna

  /* Agregamos los valores a las columnas */

  nameTd.textContent = nameForm;
  weightTd.textContent = weightForm;
  heightTd.textContent = heightForm;
  fatnessTd.textContent = fatnessForm;
  imcTd.textContent = calculateImc(weightForm, heightForm);

  patientTr.appendChild(nameTd);
  patientTr.appendChild(weightTd);
  patientTr.appendChild(heightTd);
  patientTr.appendChild(fatnessTd);
  patientTr.appendChild(imcTd);

  table.appendChild(patientTr);

  /* Validacion de los datos ingresados */

  if (nameForm == "" || weightForm == "" || heightForm == "" || fatnessForm == "") {
    alert("Por favor, complete todos los campos");
    return;
  }
});


// agregamos a localStorage los nuevos pacientes

