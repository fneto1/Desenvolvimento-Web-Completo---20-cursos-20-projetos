//string
let titulo = 'Don Pollo, king of Ohio'

console.log(titulo)
console.log(...titulo)

let tituloVet = [...titulo]

console.log(tituloVet)

/* for(let i = 0; i<tituloVet.length; i++){
    if(tituloVet[i] == 'o' || tituloVet[i] == 'O'){
        tituloVet[i] = 'x'
    }
}

console.log(tituloVet) */

//array

let cursos1 = ['Node JS e MongoDB', 'ES6, Typescript e Angular 4']
let cursos2 = ['Multiplataforma Android/IOS', 'Introdução ao GNU/Linux']

let listaCursoCompleto = ['Web Completo', ...cursos1, ...cursos2]

/* for(let i = 0; i<listaCursoCompleto.length; i++){
    console.log(`${i}: ${listaCursoCompleto[i]}`)
} */

listaCursoCompleto.forEach(
    (valor, indice) => {
    console.log(indice, valor)
}
)

//objetos

let endereco = {
    rua: "Rua dos gordos",
    numero: 782
}

let pessoa = {
    nome: "Don pollo",
    idade: 42,
    ...endereco
}

console.log(pessoa)


