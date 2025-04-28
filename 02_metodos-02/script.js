const cachorro = {
    raca: "SRD",
    uivar: function (){
        console.log("AUUUUUUUUUUUUU");
    },
    latir: function(){
        console.log("AU AU AU AU");
    },
    setRaca: function(raca){
        this.raca = raca
    }
    
};

console.log(cachorro.raca);
cachorro.setRaca("Pastor alemão");
console.log(cachorro.raca);
