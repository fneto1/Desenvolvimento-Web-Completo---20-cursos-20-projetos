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

class Avestruz extends Passaro{
    constructor(nome, cor, tamanho, peso, bico){
        super(nome, cor, tamanho, peso, bico)
    }

    voar(){
        console.log('não sabe voar')
    }
}

let papagaio = new Papagaio('claudinho', 'verde', 10, 20, 'médio', true)
let avestruz = new Avestruz('rob', 'preto', 60, 150, 'bico fino')

console.log(avestruz)
avestruz.voar()


