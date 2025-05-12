const dados = {
    nome: "João",
    idade: 30,
    profissão: "Programador",
    Robbie: "Jogar cod",
    cidade: "Santa isabel",
    raca: "Pardo",
    saudacao: function(){
        console.log(`Olá meu nome é ${this.nome}, eu tenho ${this.idade} anos de idade, trabalho como ${this.profissão}, minha paixão é ${this.Robbie}, moro na cidade de ${this.cidade}, e me considero ${this.raca}.`);
    }
}


dados.saudacao();