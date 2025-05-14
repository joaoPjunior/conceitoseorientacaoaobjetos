const cachorro = {
    nome: "SND",
    latir: function(){
        console.log("AU AU AU AU AU");
    },
    uivar: function(){
        console.log("AUUUUUUUUUUUUUUUU!");
    },
    rosnar: function(){
        console.log("GRRRRRRRRRRRRRRR!");
    },
    setNome: function(nome){
        this.nome = nome;
    }
}


cachorro.latir();
cachorro.uivar();
cachorro.rosnar();
cachorro.nome = "Bidu";
console.log(cachorro.nome);