<?php
//salvarproduto.php

require_once("../classes/ProdutoDAO.php");

$produto = [
    'nome' => 'Coxinha',
    'valor' => '8'
];

$produtoDAO = new ProdutoDAO();

if($produtoDAO->inserir($produto)) {
    echo "Produto add com sucesso";
}
else {
    echo $produtoDAO->getErro();
}