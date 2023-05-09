//um software de marcenaria
//cadeira e sofá

//paradigma procedural

//array de cadeiras

let cadeiras = new Array()

cadeiras[0] = new Array()

cadeiras[0]['qtde_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = "azul"

cadeiras[1] = new Array()
cadeiras[1]['qtde_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = "vermelho"

function gira_cadeira(i){
    if(cadeiras[i]["giratoria"] == true){
        console.log("gira")
    } else {
        console.log("não gira")
    }
}

function adiciona_cadeira(qtde_pernas, giratoria, cor){
    novaCadeira = new Array()

    novaCadeira['qtde_pernas'] = qtde_pernas
    novaCadeira['giratoria'] = giratoria
    novaCadeira['cor'] = cor

    cadeiras.push(novaCadeira)
}

adiciona_cadeira(3, false, 'verde')

for(let i=0; i<cadeiras.length; i++){
    console.log(cadeiras[i])
}

//utilizando classes

class Cadeira {
    constructor(qtde_pernas, giratoria, cor){
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira(){
        if (this.giratoria == true){
            console.log("gira")
        } else {
            console.log("não gira")
        }
    }
}

let cadeira1 = new Cadeira(4, false, 'amarelo')
let cadeira2 = new Cadeira(1, true, 'preto')

cadeira1.girarCadeira()
cadeira2.girarCadeira()

//criando um array de objetos

let cadeirasObjeto = []

cadeirasObjeto.push(cadeira1)
cadeirasObjeto.push(cadeira2)

console.log(cadeirasObjeto)

for(let i=0; i<cadeirasObjeto.length; i++){
    console.log(cadeirasObjeto[i])
}









