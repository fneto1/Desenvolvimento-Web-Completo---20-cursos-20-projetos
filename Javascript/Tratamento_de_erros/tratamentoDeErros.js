

let video = Array();

video[1] = Array();

video[1]['nome'] = 'One Piece'
video[1]['categoria'] = 'Anime'

//console.log(video[1])

function getVideo(video){

    try {
        console.log(video[0]['nome'])
    } catch(erro){
        console.log("Erro capturado")
        tratarErro(erro)
        throw new Error("Houve um erro")
    }finally {
        console.log("Não tem nada aqui")
    }
}

function tratarErro(erro){
    console.log(erro)
}

getVideo(video)