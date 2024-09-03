import input from 'readline-sync';

console.log("Conversor de Milhas para Quilometros ...");

// Entrada
let milhas = Number(input.question("Informe o valor em Milhas: "));

// Processamento
let km = milhas / 0.62137;

// Saida
console.log(milhas + " Milhas equivale a " + km + " Km");
