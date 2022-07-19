let firstPatient = document.querySelector("#first__patient");
let tdWeight = document.querySelector(".info-peso");
let weight = tdWeight.textContent;
let tdHeight = document.querySelector(".info-altura");
let height = tdHeight.textContent;

console.log(firstPatient);
console.log(tdWeight);
console.log(weight);
console.log(tdHeight);
console.log(height);

let imc = weight / (height * height);
console.log(imc);
document.write(imc);