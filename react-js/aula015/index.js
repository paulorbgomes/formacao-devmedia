let numeros1 = [3, 6, 10, 12, 15];
console.log(numeros1);
for (let i = 0; i < numeros1.length; i++) {
  numeros1[i] = 3 * numeros1[i];
}
console.log(numeros1);

// Metodo array.map
let numeros2 = [3, 6, 10, 12, 15];
const vetorTriplo = numeros2.map((numero) => 3 * numero);
console.log(vetorTriplo);

// Metodo array.filter
const pares = numeros2.filter((numero) => numero % 2 == 0);
console.log(pares);