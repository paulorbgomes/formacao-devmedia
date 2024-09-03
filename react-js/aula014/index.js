// Revisão array.map ...
let array = [3, 6, 10, 12, 15];

const triplo = array.map((entrada) => entrada * 3);
console.log(array);
console.log(triplo);

const numerosPares = array.filter((entrada) => entrada % 2 === 0);
console.log(numerosPares);
