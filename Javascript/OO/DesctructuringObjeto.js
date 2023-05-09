let produto = {
    descricao: 'Notebook',
    marca: 'Acer',
    preco: 5500,
    especificacoes: {
        processador: "Ryzen5",
        memoriaRam: "16 gb",
        ssd: 512,
        placaDeVideo: "GTX 1650"
    }
}

let {marca, especificacoes:{processador}} = produto

console.log(marca, processador)

//atribuindo variaveis aos atributos do objeto

let {descricao:d, especificacoes:e, especificacoes:{ssd:s}, desconto = "5%"} = produto

console.log(d, e, s, desconto)