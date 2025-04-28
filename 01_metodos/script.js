const dados = {
    nome: "João Paulo",
    cidade: "Paraíba",
    rua: "Avenida dos andradas",
    numero: 47,
    bairro: "Jardim santa isabel",
    cep: 15570000,
    saudacao: function(){
        console.log(`Olá meu nome é ${this.nome}, moro na cidade de ${this.cidade}, na ${this.rua}, numero ${this.numero}, no bairro ${this.bairro} do cep ${this.cep}`)
    }
}


dados.saudacao();