Object.prototype.atributo = "Don pollo"

let animal = {
    voa: 'sim'
}

let vertebrado = {
    __proto__: animal,
    isVertebrado: 'sim'
}

let ave = {
    __proto__: vertebrado,
    ave: 'aguia'
}

console.log(ave.ave)
console.log(ave.isVertebrado)
console.log(ave.voa)
console.log(ave.atributo)