let frutas = Array('banana', 'maça', 'pinha')


let carros = Array('fiat', 'chevrolet', 'vw', 'renault')


let motos = ['honda', 'yamaha', 'shineray']

let organizado = carros.sort()

console.log(organizado)

console.log(organizado.indexOf('fiat'))

let numeros = [30, 55, 28, 102, 256, 42, 1, 22]

console.log(numeros.sort())

//função para ordenação de numeros
function ordena(x, y){
    return x - y
}

console.log(numeros.sort(ordena))