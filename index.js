import fetch from 'node-fetch';

var cep = "12505110";

function obterDadosCep(cep){
    fetch(`http://viacep.com.br/ws/${cep}/json`,{
        method: "GET"
    })
        .then(response => {
            if (!response){
                throw new Error("Erro de Requisição");
            } else {
            return response.json();
            }
        })            
        .then(json => console.log("CEP: " + json.cep + "\nLogradouro: " + json.logradouro + "\nBairro: " + json.bairro + "\nLocalidade: " + json.localidade + "\nUF: " + json.uf))
        .catch(error => console.log(error));        

}

obterDadosCep(cep);
