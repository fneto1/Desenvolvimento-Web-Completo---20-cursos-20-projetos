let altura = 0
let largura = 0
let vidas = 1
let tempo = 30
let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel == 'normal'){
    criaMosquitoTempo = 1500
} else if (nivel == 'dificil'){
    criaMosquitoTempo = 1000
} else if (nivel == 'muitodificil'){
    criaMosquitoTempo = 750
}



function ajustaTamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoTela()

//cronometro


let cronometro = setInterval(function () {
    tempo--
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('tempo').innerHTML = tempo;
    }
}, 1000)


//função para posições randomicas

function mosquito() {

    //limpar a tela e verifica as vidas
    //caso remova o elemento antes da criação (appendChild), as vidas não são contabilizadas
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = "fimDeJogo.html"
        } else {

            document.getElementById('v' + vidas).src = "/img/coracao_vazio.png"

            vidas++
        }

    }

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar elemento html

    let mosquito = document.createElement('img')
    mosquito.src = "/img/mosca.png"
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }



    document.body.appendChild(mosquito) //criação do elemento mosquito
}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}





