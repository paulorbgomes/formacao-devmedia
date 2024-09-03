// Sistema que calcula os juros de uma dívida com base no número de dias passados

import input from 'readline-sync';

console.log("Aplicacao de Juros ...");

// Variaveis globais
let juros = null;
let valorFinal = null;
let diasAtraso = null;
let valorDivida = Number(input.question("Valor da divida: R$ "));

if(valorDivida > 0){
    diasAtraso = Number(input.question("Informe a quantidade de dias de atraso: "));
    if(diasAtraso > 0){
        if(diasAtraso > 15){
            juros = 10;
            valorFinal = valorDivida + (valorDivida * juros/100);
        }
        else{
            juros = 5;
            valorFinal = valorDivida + (valorDivida * juros/100);
        }
        console.log("Valor da divida: R$ " + valorDivida);
        console.log("Quantidade de dias em atraso: " + diasAtraso);
        console.log("Taxa de juros: " + juros + " %");
        console.log("Total a pagar (divida + juros): R$ " + valorFinal);
    }
    else{
        console.log("Sua divida nao se encontra em atraso. Valor a pagar: R$ " + valorDivida);
    }
}
else{
    console.log("Voce nao possui dividas. Aplicacao encerrada!");
}