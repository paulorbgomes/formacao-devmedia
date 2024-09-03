// Funcao sem parametro ...
function ola(){
    console.log("Ola! Seja bem-vindo!");
};

function retorna(){
    return 100;
};

ola();
const valor = retorna();
console.log(valor);

// Funcao com parametro ...
function olaP(nome){
    console.log(`Ola, ${nome}!`);
}
olaP("Paulo Gomes");

// Arrow Function
/*
function media(n1, n2){
    return (n1 + n2)/2;
}
let valorMedia= media(10, 9);
console.log(valorMedia);
*/
const media = (n1, n2) => (n1 + n2)/2;
console.log(media(8, 9));