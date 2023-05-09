class Animal{
    constructor(nome, cor, tamanho, peso){
        this.nome = nome
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir() {
        console.log('dormir')
    }

}

class Passaro extends Animal{
    constructor(nome, cor, tamanho, peso, bico){
        super(nome, cor, tamanho, peso)
        this.bico = bico
    }

    voar() {
        console.log('voar')
    }

}

class Papagaio extends Passaro{
    constructor(nome, cor, tamanho, peso, bico, fala){
        super(nome, cor, tamanho, peso, bico)
        this.fala = fala
    }

    falar(){
        console.log('fala')
    }
}

let passaro = new Passaro()

let louro = new Papagaio('claudinho', 'verde', 10, 20, 'médio', true)

let filhote = new Papagaio('rob', 'amarelo', 5, 3, 'pequeno', false)


console.log(louro)
console.log(filhote)