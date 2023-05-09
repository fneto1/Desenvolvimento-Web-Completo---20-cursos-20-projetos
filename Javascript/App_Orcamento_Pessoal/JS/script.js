class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == null || this[i] == ''){
                return false
            }
        }
        return true
    }
}

class BD{
    constructor(){
        let id = localStorage.getItem('id') 

        if(id == null){
            localStorage.setItem('id', 0) //atribui uma key 'padrão' e um valor inicial para ela (ex.: key: id = value: 0)
        }
    }
    
    getProximoId(){
        let proximoId = localStorage.getItem('id') //armazena o value da key
        return parseInt(proximoId) + 1 //soma +1 para criarmos uma nova key

    }

    gravarDespesa(despesa){
        let id = this.getProximoId() //gera um id para cada instancia de despesa

        localStorage.setItem(id, JSON.stringify(despesa)) //armazena a despesa na key gerada

        localStorage.setItem('id', id) //atualiza o id para a execução da função para criação de novo id
    }

    recuperarTodosRegistros(){

        //array de despesas
        let listaDespesas = Array()
        
        //recupera o valor total de id
        let id = localStorage.getItem('id')

        //recupera todas as despesas cadastradas em localStorage
        for(let i = 1; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))
            
            if(despesa == null){
                continue
            }

            despesa.id = i
            listaDespesas.push(despesa)
        }
            return listaDespesas
    }

    pesquisar(despesa){
        let despesasFiltradas = Array()

        despesasFiltradas = this.recuperarTodosRegistros()

        //ano
        if(despesa.ano != ''){
            despesasFiltradas = despesasFiltradas.filter((d) => d.ano == despesa.ano)
        }

        //mes
        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter((d) => d.mes == despesa.mes)
        }

        //dia
        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter((d) => d.dia == despesa.dia)
        }

        //tipo
        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter((d) => d.tipo == despesa.tipo)
        }

        //descricao
        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter((d) => d.descricao == despesa.descricao)
        }

        //valor
        if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter((d) => d.valor == despesa.valor)
        }

        //console.log(despesasFiltradas)

        return despesasFiltradas
    }

    remover(id){
        localStorage.removeItem(id)
    }
}

let Bd = new BD()

function cadastrarDespesa(){
   let ano = document.getElementById('ano')
   let mes = document.getElementById('mes')
   let dia = document.getElementById('dia')
   let tipo = document.getElementById('tipo')
   let descricao = document.getElementById('descricao')
   let valor = document.getElementById('valor')

   let despesa = new Despesa(
    ano.value, 
    mes.value, 
    dia.value, 
    tipo.value, 
    descricao.value, 
    valor.value)

    if(despesa.validarDados()){
        Bd.gravarDespesa(despesa)
        let sucesso = true
        modalRegistraDespesa(sucesso)
        $('#modalRegistraDespesa').modal('show')
        ano.value=""
        mes.value=""
        dia.value=""
        tipo.value=""
        descricao.value=""
        valor.value=""
    } else {
        let erro = false
        modalRegistraDespesa(erro)
        $('#modalRegistraDespesa').modal('show')
    }
}

function modalRegistraDespesa(validou){
    if(validou){
        document.getElementById('tituloModal').className = 'modal-title text-success'
        document.getElementById('tituloModal').innerHTML = 'Sucesso'
        document.getElementById('corpoModal').innerHTML = 'Despesa cadastrada!'
        document.getElementById('botaoModal').className = 'btn btn-primary btn-success'
    } else {
        document.getElementById('tituloModal').className = 'modal-title text-danger'
        document.getElementById('tituloModal').innerHTML = 'Ocorreu um erro'
        document.getElementById('corpoModal').innerHTML = 'É necessário preencher todos os campos!'
        document.getElementById('botaoModal').className = 'btn btn-primary btn-danger'   
    }

}

function carregaListaDespesas(despesas = Array(), filtro = false){

    if(despesas.length == 0 && filtro == false){
        despesas = Bd.recuperarTodosRegistros()
    }
    
    //tbody
    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''

    despesas.forEach(function(i){

        //inserindo linhas na tabela (tr)
        let linha = listaDespesas.insertRow()

        //inserindo as colunas (td)
        if(i.mes<10){i.mes = "0"+i.mes}
        linha.insertCell(0).innerHTML = `${i.dia}/${i.mes}/${i.ano}`
        switch(i.tipo){
            case '1': i.tipo = 'Alimentação'
            break
            case '2': i.tipo = 'Educação'
            break
            case '3': i.tipo = 'Lazer'
            break
            case '4': i.tipo = 'Saúde'
            break
            case '5': i.tipo = 'Transporte'
            break
        }
        linha.insertCell(1).innerHTML = i.tipo
        linha.insertCell(2).innerHTML = i.descricao
        linha.insertCell(3).innerHTML = `R$ ${i.valor}`

        //criando elemento de exclusao
        let btn = document.createElement("button") //criando a tag botão via JS
        btn.className = 'btn btn-danger' //atribuindo a classe ao botao
        btn.innerHTML = '<i class="fas fa-times"></i>' //adicionando uma tag na tag de botao
        btn.id = `idDespesa${i.id}` //adicionando um id para a tag de botao

        //funcao de remoção
        btn.onclick = function(){
            let id = this.id.replace('idDespesa', '') //extraindo a string do id do botao
            Bd.remover(id) //chamando o método de exclusao
            window.location.reload() //atualiza a pagina apos a remoção
        }
        linha.insertCell(4).append(btn) //o comando append irá inserir o botão btn na tabela
        console.log(i)
    })
}

function pesquisarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let pesquisaDespesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

    let arrayDespesas = Bd.pesquisar(pesquisaDespesa)

    carregaListaDespesas(arrayDespesas, true)
    
   
}
