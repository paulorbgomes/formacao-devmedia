let cursos_idiomas = [
    {nome: "Ingles", preco: 2500, carga_horaria: 160},
    {nome: "Espanhol", preco: 1500, carga_horaria: 110},
    {nome: "Frances", preco: 3600, carga_horaria: 200},
    {nome: "Chines", preco: 5500, carga_horaria: 400},
    {nome: "Alemao", preco: 3800, carga_horaria: 230}
];

for(let dados of cursos_idiomas){
    console.log("Nome do curso: " + dados.nome);
    console.log("Carga horaria do curso: " + dados.carga_horaria + " horas");
    console.log("Preco do curso: R$ " + dados.preco + ",00");
    if(dados.preco / dados.carga_horaria >= 15) {
        console.log("Hora/aula superior ou igual a R$15,00");
    }
    else{
        console.log("Hora/aula inferior a R$15,00");
    }
    console.log("\n");
}
