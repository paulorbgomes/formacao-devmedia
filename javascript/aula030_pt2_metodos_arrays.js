// Metodos do objeto array ...
// forEach() ...
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Se nao for necessario retornar um array, utilizamos o metodo forEach()
const mostraValores = (valor) => {
    console.log(valor);
}
array.forEach(mostraValores);

// map() ...
// Se for necessario retornar um array, utilizamos o metodo map() ...
const multiplicaValor = (valor) => {
    return (valor = valor * 5);
}
var novoArray = array.map(multiplicaValor);
console.log(novoArray);

// filter() ...
// Retorna um array filtrado para valores do arrey que retornam true para uma determinada condicao ...
const retornaPar = (valor) => {
    return (valor % 2 == 0);
}
novoArray = array.filter(retornaPar);
console.log(novoArray);

// reduce() ...
// Reduz o array para um unico valor ...
const funcaoUm = (valorInicial, valor) => {
    return valorInicial + valor;
}
var valorReduzido = array.reduce(funcaoUm);
console.log(valorReduzido);