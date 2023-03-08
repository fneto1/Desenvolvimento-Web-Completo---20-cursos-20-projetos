function exibirArtigo(id, callbackSucesso, callbackErro){

    if(id > 3){
        callbackSucesso('Funções de callback em JS', 'DonPollo king of ohio')
    } else {
        callbackErro('trrrrr')
    }
}

let callbackSucesso = function(titulo, descricao){
    console.log(titulo, descricao)
}

let callbackErro = function(erro){
    console.log(erro)
}

exibirArtigo(2, callbackSucesso, callbackErro)