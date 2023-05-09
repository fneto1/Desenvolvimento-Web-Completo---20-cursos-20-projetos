let BicicletaFactory = function(cor, aro, modelo){
    //logica
    return{
        cor,
        aro,
        modelo,

        pedalar(){
            console.log(`${this.modelo} pedalando`)
        }
    }
}

let caloi = new BicicletaFactory("azul", 16, "Poty")
let monark = new BicicletaFactory("Vermelho", 24, "Barra circular")

console.log(caloi.modelo)

monark.pedalar()