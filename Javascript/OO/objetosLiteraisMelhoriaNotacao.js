let nome = "Jaspion"
let idade = 27
let sexo = "Masculino"
let profissao = "Herói"

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibeResumo: function(){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, ${this.profissao}`)
    }

}
console.log(objeto)
objeto.exibeResumo()

let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibeResumo(){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, ${this.profissao}`)
    }

}

console.log(objeto2)
objeto2.exibeResumo()

objeto2.nome = "Don Pollo"

console.log(objeto2)
objeto2.exibeResumo()