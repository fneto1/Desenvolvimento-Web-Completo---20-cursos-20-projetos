//rest

function soma(...param){
    let resultado = 0

    console.log(param)

/*     param.forEach((v) => {
        resultado += v
    }) */

    for(let arg of param){
        resultado += arg
    }

    return resultado
}

console.log(soma(1, 2, 3, 4, 5, 6))

function multiplicacao(m, ...p){
    let resultado = 0

    for(let arg of p){
        resultado += arg * m
    }

    return resultado
}

console.log(multiplicacao(2, 2, 3, 4, 5, 6))