const pessoa = {
    Nome: "João Paulo",
    Idade: 31,
    Profissão:"Programador",
    Sexo: "Masculino",
    saudacao: function(){
        console.log(`Olá meu nome é ${this.Nome}, tenho a idade de ${this.Idade} anos, trabalho como ${this.Profissão}, e me identifico como sexo ${this.Sexo}.`);
    }
}

pessoa.saudacao()