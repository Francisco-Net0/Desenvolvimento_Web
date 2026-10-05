<?php
//ProdutoDAO.php

require_once('Conexao.php');

class ProdutoDAO {
    private $pdo;
    private $erro;

    public function __construct() 
    {
        $conn = new Conexao();
        $this->pdo = $conn->getConexao();
    }

    public function getErro() 
    {
        return $this->erro;
    }

    public function inserir($produto)
    {
        $sql = "INSERT INTO produtos(nome, valor) VALUES (?, ?)";
        try {
            $stmt = $this->pdo->prepare($sql);
            $stmt->bindParam(1, $produto['nome'], PDO::PARAM_STR);
            $stmt->bindParam(2, $produto['valor'], PDO::PARAM_INT);
            return $stmt->execute();
        }
        catch(\Exception $e) {
            $this->erro = "Erro ao inserir: " . $e->getMessage();
            return false;
        }
    }

    public function getProdutos() 
    {
        $sql = "SELECT * FROM produtos";
        try{
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_OBJ); //retorna objetos
        }
        catch(\Exception $e) {
            $this->erro = "Erro ao buscar produtos: " 
                        . $e->getMessage();
            return false;
        }
    }

    public function getProduto($id) 
    {
        $sql = "SELECT * FROM produtos WHERE id = ?";
        try{
            $stmt = $this->pdo->prepare($sql);
            $stmt->bindParam(1, $id, PDO::PARAM_INT);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_OBJ); //retorna o obj
        }
        catch(\Exception $e) {
            $this->erro = "Erro ao buscar produtos: " 
                        . $e->getMessage();
            return false;
        }
    }
}