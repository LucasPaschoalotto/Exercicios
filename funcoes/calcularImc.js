function calcularImc(peso, altura){
    var imc = (peso / (altura * altura));
    return parseFloat(imc.toFixed(2));
}

module.exports = calcularImc;