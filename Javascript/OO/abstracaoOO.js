class Carro{

    constructor(marca, ano, modelo){
        this.marca = marca
        this.ano = ano
        this.modelo = modelo
    }


   getMarca(){
    return this.marca
   }
   
   setMarca(marca){
     this.marca = marca
   }



}

c1 = new Carro()
c2 = new Carro("VW", 2022, "Gol")

c1.marca = "Fiat"
c1.ano = 2023
c1.modelo = "Argo"

console.log(c1.getMarca())

c1.setMarca("Gurgel")

console.log(c1.getMarca())

console.log(c1)
console.log(c2)