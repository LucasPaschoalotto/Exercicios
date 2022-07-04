const listaNomes = require("./components/listaNomes.json");
var consoleLista = listaNomes.forEach(pessoa => console.log(pessoa));

var listaFiltrada = listaNomes.map(pessoa => console.log(pessoa.nome));
