

console.log(Math.ceil(11.588))
console.log(Math.floor(11.588))
console.log(Math.round(11.588))

function numeroAleatorio(min, max){
    return Math.round(Math.random()*((max - min)*max))
}

console.log(numeroAleatorio(10, 20))