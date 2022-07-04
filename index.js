const listaNomes = require("./components/listaNomes.json");
var consoleLista = listaNomes.forEach(item => console.log(item));

var listaFiltrada = listaNomes.map(pessoa => console.log(pessoa.nome));
