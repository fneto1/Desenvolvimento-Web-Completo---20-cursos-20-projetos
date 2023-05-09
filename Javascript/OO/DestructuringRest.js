//array

let numeros = [10, 20, 30, 40]

let [x, ...resto] = numeros

console.log(x)
console.log(resto)

//objeto

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

let {a, ...y} = obj

console.log(a)
console.log(y)