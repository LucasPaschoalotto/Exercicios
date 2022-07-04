function calcularGordura(imc, idade, sexo){
    if (sexo == "masculino"){
        sexo = 1;
    } else if (sexo == "feminino"){
        sexo = 0;
    }
    let gorduraCorporal = (1.2 * imc) + (0.23 * idade) - (10.8 * sexo) - 5.4;
    return parseFloat(gorduraCorporal.toFixed(2));
}

module.exports = calcularGordura;