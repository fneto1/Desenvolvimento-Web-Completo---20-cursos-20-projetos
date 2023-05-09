class Animal{
    constructor(){
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }

    dormir() {
        console.log('dormir')
    }

}

class Cachorro extends Animal{
    constructor(){
        super()
        this.orelhas = 'Grandes e caídas'
    }

    correr() {
        console.log('correr')
    }

    rosnar(){
        console.log('rosnar')
    }
}

class Passaro extends Animal{
    constructor(){
        super()
        this.bico = 'curto'
    }

    voar() {
        console.log('voar')
    }

}

let cachorro = new Cachorro()
let passaro = new Passaro()

console.log(cachorro)
console.log(passaro)

cachorro.cor = 'amarelo'

console.log(cachorro)

cachorro.dormir()

class Papagaio extends Passaro{
    constructor(){
        super()
        this.fala = true
    }
}

let louro = new Papagaio()

console.log(louro)