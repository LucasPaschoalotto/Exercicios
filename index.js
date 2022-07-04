const lista = require("./components/listaNomes.js");
const cImc = require("./funcoes/calcularImc.js");
const cGordura = require("./funcoes/calcularGordura.js");

console.log("Lista Inicial:");
console.log(lista.listaNomes);


for(let i = 0; i < lista.listaNomes.length; i++){
    lista.listaNomes[i].imc = cImc(lista.listaNomes[i].peso, lista.listaNomes[i].altura);
    lista.listaNomes[i].gordura = cGordura(lista.listaNomes[i].imc, lista.listaNomes[i].idade, lista.listaNomes[i].sexo);
}

console.log("Lista atualizada:");
console.log(lista.listaNomes);
