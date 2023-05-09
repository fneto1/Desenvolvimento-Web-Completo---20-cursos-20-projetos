//notação de classe

class Produto{
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao(){
        console.log(`${this.descricao} por apenas R$ ${this.preco}`)
    }
}

let produto = new Produto("Notebook Acer Nitro 5", 5000)

produto.verDescricao()

//literal (Conjunto chave-valor)

let produtoLiteral = {
    descricao: "Notebook Dell",
    preco: 6000,
    especificacoes: {
        processador: "Ryzen 5",
        placaDeVideo: "GTX 1650",
        memoriaRam: "16 gb"
    },
    
    verDescricao: function(){
        console.log(`${this.descricao} por apenas R$ ${this.preco}`)
    },

    literalEspecificacao(){
        console.log(`O notebook ${this.descricao} possui ${this.especificacoes.memoriaRam}, uma placa de video ${this.especificacoes.placaDeVideo} e processador ${this.especificacoes.processador}`)
    }
}

produtoLiteral.verDescricao()
console.log(`preco do notebook: ${produtoLiteral.preco}`)
produtoLiteral.literalEspecificacao()