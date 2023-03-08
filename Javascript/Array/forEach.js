let nomes = ['wandao', 'alface', 'don pollo', 'cobra', 'papinho', 'dump']

nomes.forEach(function(valor, indice, array){
    console.log(indice, valor)

    if(valor == 'alface'){
        array[indice] = 'deinho'
    }
})

console.log(nomes)

let f = function (valor, indice, array){
    console.log(valor)
}

nomes.forEach(f)