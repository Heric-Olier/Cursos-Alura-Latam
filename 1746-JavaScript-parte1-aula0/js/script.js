let firstPatient = document.querySelector("#first__patient");   
let tdWeight = document.querySelector(".info-peso");    // peso
let weight = tdWeight.textContent;      // peso do paciente
let tdHeight = document.querySelector(".info-altura");   // altura
let height = tdHeight.textContent;   // altura do paciente
let tdImc = document.querySelector(".info-imc");  // imc


let imc = weight / (height * height);   
tdImc.textContent = imc.toFixed(2);  


console.log(firstPatient);  
console.log(tdWeight); 
console.log(weight);           
console.log(tdHeight);  
console.log(height);       
console.log(imc);  