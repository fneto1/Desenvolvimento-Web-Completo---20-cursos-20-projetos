//utilizando classes

class Cadeira {
    constructor(qtde_pernas, giratoria, cor){
        this._qtde_pernas = qtde_pernas
        this._giratoria = giratoria
        this._cor = cor
    }

    //getters e setters

    get qtde_pernas(){
        return this._qtde_pernas
    }

    set qtde_pernas(qtde_pernas){
        this._qtde_pernas = qtde_pernas
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

console.log(cadeira1.qtde_pernas)

//como utilizar o setter no JS
cadeira1.qtde_pernas = 8

console.log(cadeira1.qtde_pernas)








