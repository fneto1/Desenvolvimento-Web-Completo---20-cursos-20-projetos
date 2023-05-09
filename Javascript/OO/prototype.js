//literal

let a1 = {
    cor: "Amarelo",
    modelo: "Teco-teco",
    levantarVoo(){
        console.log("Voar")
    }
}

let AviaoF = function(){
    this.cor = 'Azul'
    this.modelo = "AirBus"
    this.levantarVoo = function(){
        console.log("Voar")
    }
}

let a2 = new AviaoF()

class AviaoC {
    constructor(){
        this.cor = 'Branco'
        this.modelo = "Boeing 787"
    }
    levantarVoo() {
        console.log("Voar")
    }
}

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)