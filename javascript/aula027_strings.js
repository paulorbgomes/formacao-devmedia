let nome = "Paulo";
let sobrenome = "Gomes";
let nomeCompleto = nome + " " + sobrenome;

console.log(`Obtendo o tipo da variavel: ${typeof(nomeCompleto)}`);
console.log(`Obtendo o tamanho da string: ${nomeCompleto.length}`);
console.log(`Convertendo para letras maiusculas: ${nomeCompleto.toUpperCase()}`);
console.log(`Convertendo para letras minusculas: ${nomeCompleto.toLowerCase()}`);
console.log(`Remocao de espacos em branco (inicio e fim): ${nomeCompleto.trim()}`);
console.log(`Substituicao de substring: ${nomeCompleto.replace("Gomes","Barboza")}`);
console.log(`Substring dentro de string: ${nomeCompleto.indexOf("Gomes")}`);
console.log(`Separacao de strings: ${nomeCompleto.split(" ")}`);