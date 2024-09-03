import entradaDados from 'readline-sync';

let nome = entradaDados.question("Digite seu nome: ");
console.log("Bem-vindo, " + nome);