let firstPatient = document.querySelector("#first__patient");   
let tdWeight = document.querySelector(".info-peso");    // peso
let weight = tdWeight.textContent;      // peso do paciente
let tdHeight = document.querySelector(".info-altura");   // altura
let height = tdHeight.textContent;   // altura do paciente

console.log(firstPatient);  // mostra o primeiro paciente
console.log(tdWeight);  // mostra o peso do paciente
console.log(weight);            // mostra o peso do paciente
console.log(tdHeight);  // mostra a altura do paciente
console.log(height);        // mostra a altura do paciente

let imc = weight / (height * height);   // calcula o imc
console.log(imc);   // mostra o imc
document.write(imc);    // mostra o imc no documento


// Language: javascript 