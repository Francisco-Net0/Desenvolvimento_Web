<?php

//Conexao.php
class Conexao {

    public function getConexao()
    {
        try {
            $pdo = new PDO(
                "mysql:host=localhost;dbname=dbaula2809",
                "root",
                ""
            );
            return $pdo;
        } catch (\Exception $e) {
            echo "Erro ao conectar: " . $e->getMessage();
        }
    }

}