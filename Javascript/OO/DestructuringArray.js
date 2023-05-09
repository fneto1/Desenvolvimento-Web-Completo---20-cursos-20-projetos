//destructuring
let frutas = ['Abacaxi', 'Maçã', 'Melancia', 'Melão', 'Uva', 'Caju']

let [c, d] = frutas

console.log(c, d)

let [a, ,b,] = frutas //pular um indice

console.log(a, b)


let [p, r, ...rest] = frutas //utilizando rest/spread

console.log(rest)

//--------------------//

let coisas = [['Abacaxi', 'Maçã', 'Melancia', 'Melão', 'Uva', 'Caju'], ["Wandão", "Don Pollo"]]

let[ [,,,y], [ , x]] = coisas

console.log(y, x)