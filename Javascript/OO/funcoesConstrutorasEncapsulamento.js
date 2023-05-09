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
        this.velocidadeAtual = velocidade
    }

    this.acelerar = () =>{
        let velocidade = this.getVelocidadeAtual() + 10
        if(velocidade > this.velocidadeMaxima){
            velocidade = this.velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
    }
}

let carro = new Carro('Amarelo', 'Fiat 147', 120, 120)


let Carro2 = function(cor, modelo, velocidadeAtual){

    var velocidadeMaxima = 120
    var quilometrosRodados = 0

    this.cor = cor
    this.modelo = modelo
    this.velocidadeAtual = velocidadeAtual

    //metodos
    this.getVelocidadeAtual = () =>{
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = (velocidade) => {
        this.velocidadeAtual = velocidade
    }

    this.acelerar = () =>{
        let velocidade = this.getVelocidadeAtual() + 10
        if(velocidade > velocidadeMaxima){
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
        setQuilometrosRodados(0.5)
        console.log(quilometrosRodados)
    }

    var setQuilometrosRodados = (q) =>{
        quilometrosRodados += q
    }
    
}

let carro2 = new Carro2('Amarelo', 'Fiat 147', 0)

console.log(carro2.getVelocidadeAtual())
carro2.acelerar()
console.log(carro2.getVelocidadeAtual())

