//array

let numeros = [10, 20, 30, 40]

function teste([a, b]){
    console.log(a, b)
}

teste(numeros)

//objetos

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

function testeObj({a:x, c:y}){
    console.log(x, y)
}

testeObj(obj)
