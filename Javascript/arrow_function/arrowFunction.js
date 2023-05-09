let quadrado = function (x){
    return Math.pow(x, 2)
}

console.log(`O quadrado de 3 é: ${quadrado(3)}`)

let cubo = (x) =>{
    return Math.pow(x, 3)
}

console.log(`O cubo de 3 é: ${cubo(3)}`)

//ou com retorno implicito

let mult = x => Math.pow(x, 3)

let parOuImpar = x => x%2 == 0 ? 'par' : 'impar'

console.log(parOuImpar(7))
