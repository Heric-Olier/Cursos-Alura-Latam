let patients2 = document.querySelectorAll(".paciente");
console.log(patients);

patients2.forEach((patient) => {
  patient.addEventListener("dblclick", function () {
    this.remove();

  });
});
