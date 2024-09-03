const listaNomes = ["Paulo", "Gomes", "Ricardo", "Pedro"];
const mostraNomes = (nome) => console.log(nome);
// forEach() ...
listaNomes.forEach(mostraNomes);

// filter() ...
const verificaNome = (nome) => nome == "Paulo" ? true : false;
const novoArray = listaNomes.filter(verificaNome);
console.log(novoArray);

// map() ...
const agenda = [
    {nome: "Paulo", telefone: "tel01"},
    {nome: "Gomes", telefone: "tel02"},
    {nome: "Ricardo", telefone: "tel03"},
];
const novaAgenda = agenda.map((contato) => contato.telefone);
console.log(novaAgenda);

