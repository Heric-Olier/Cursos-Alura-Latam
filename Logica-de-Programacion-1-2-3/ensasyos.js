/*let numbers = "110";

let sum = 0;
let binary = numbers.split("").reverse();

for (let i = 0; i < binary.length; i++) {
    sum += binary[i] * Math.pow(2, i);
}
console.log(sum);*/

const cortar = (ingrediente) => {
  console.log("Cortar " + ingrediente);
};

function mezclarIngredientes(n) {
  if (n <= 0) return;

  console.log("Mezclar #" + n);
  mezclarIngredientes(n - 1);
}

function comer() {
  console.log("Comer");
}

function hacerEnsaladaMixta() {
  cortar("tomate");
  cortar("lechuga");
  cortar("cebolla");
  mezclarIngredientes(5);
  comer();
}

hacerEnsaladaMixta();
