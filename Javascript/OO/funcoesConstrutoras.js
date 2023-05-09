let Carro = function(cor, modelo, velocidadeAtual, velocidadeMaxima){
    this.cor = cor
    this.modelo = modelo
    this.velocidadeAtual = velocidadeAtual
    this.velocidadeMaxima = velocidadeMaxima

    //metodos
    this.getVelocidadeAtual = () =>{
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = (velocidade) => {
        this.velocidadeAtual += velocidade
    }

    this.acelerar = () =>{
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }
}

let carro = new Carro('Amarelo', 'Fiat 147', 0, 120)

//console.log(carro)

carro.acelerar()
console.log(carro.getVelocidadeAtual())
