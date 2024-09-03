import input from 'readline-sync';
console.log("\n");

// Tabela_1 (salario x ano):
let tabela1 = [
    {salario: 510.00, ano: 2010},
    {salario: 545.00, ano: 2011},
    {salario: 622.00, ano: 2012},
    {salario: 678.00, ano: 2013},
    {salario: 724.00, ano: 2014},
    {salario: 788.00, ano: 2015},
    {salario: 880.00, ano: 2016},
    {salario: 937.00, ano: 2017},
    {salario: 954.00, ano: 2018},
    {salario: 998.00, ano: 2019},
    {salario: 1045.00, ano: 2020}
];

// Tabela_2 (ipca x ano):
let tabela2 = [
    {ipca: 5.91, ano: 2010},
    {ipca: 6.50, ano: 2011},
    {ipca: 5.84, ano: 2012},
    {ipca: 5.91, ano: 2013},
    {ipca: 6.41, ano: 2014},
    {ipca: 10.67, ano: 2015},
    {ipca: 6.29, ano: 2016},
    {ipca: 2.95, ano: 2017},
    {ipca: 3.75, ano: 2018},
    {ipca: 4.31, ano: 2019},
    {ipca: 4.52, ano: 2020}
];

console.log("1 - Listar os salarios minimos de 2010 a 2020");
console.log("2 - Listar o indice IPCA de 2010 a 2020");
console.log("3 - Comparacao entre o percentual de aumento salarial e o IPCA");
console.log("\n");
let opcao = Number(input.question("Digite o numero da sua escolha: "));
console.log("\n");

switch(opcao){
    case 1:
        for(var i of tabela1){
            console.log("Ano: ".padEnd(40,".") + i.ano);
            console.log("Salario minimo: ".padEnd(40,".") + "R$ " + i.salario.toFixed(2).replace(".",","));
            console.log("\n");
        }
        break;
    case 2:
        for(var i of tabela2){
            console.log("Ano: ".padEnd(40,".") + i.ano);
            console.log("Inflacao IPCA: ".padEnd(40,".") + "R$ " + i.ipca.toFixed(2).replace(".",",") + "%");
            console.log("\n");
        }
        break;
    case 3:
        for(var i = 0; i < tabela1.length; i++){
            console.log("Ano: ".padEnd(40,".") + tabela1[i].ano);
            console.log("Salario minimo: ".padEnd(40,".") + "R$ " + tabela1[i].salario.toFixed(2).replace(".",","));

            if(i == 0){
                console.log("Crescimento salarial: ".padEnd(40,".") + "-");
            }
            else{
                var diferenca = tabela1[i].salario - tabela1[i-1].salario;
                var percentual = (diferenca / tabela1[i-1].salario) * 100;
                console.log("Crescimento salarial: ".padEnd(40,".") + percentual.toFixed(2).replace(".",",") + "%");
            }
            console.log("Inflacao IPCA: ".padEnd(40,".") + "R$ " + tabela2[i].ipca.toFixed(2).replace(".",",") + "%");
            console.log("\n");
        }
        break;
    default:
        console.log("Opcao Invalida!");
        console.log("\n");
        break;
}