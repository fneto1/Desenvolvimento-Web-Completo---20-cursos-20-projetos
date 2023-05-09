<?php

namespace App\Controllers;

//recursos
use App\Connection;
use MF\Controller\Action;
use App\Models\Produto;
use App\Models\Info;
use MF\Model\Container;
class IndexController extends Action{


    public function index() {

        //$this->view->dados = array('Sofá', 'Cadeira', 'Cama');

        //Instância de conexão
        $conn = Connection::getDb();

        //Instanciar modelo
        $produto = new Produto($conn);

        $produtos = $produto->getProdutos();

        $this->view->dados = $produtos;

            $this->render('index', 'layout1');
    }

    public function sobreNos(){
        //$this->view->dados = array('Notebook', 'Celular', 'Cama');
        //Instância de conexão
        $conn = Connection::getDb();

        //Instanciar modelo
        $info = new Info($conn);

        $informacoes = $info->getInfo();

        $this->view->dados = $informacoes;
        $this->render('sobreNos', 'layout1');
    }


}
