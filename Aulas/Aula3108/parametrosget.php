<?php 
//parametrosget.php?nome=George&idade=28

$nome = $_GET["nome"];
echo "Nome: $nome <br />";

//isset verifica se uma posição do array está definida
if(isset($_GET["idade"])) {
    $idade = $_GET["idade"];
    echo "Idade: " . $idade;
}
else{
    echo "Idade não definida";
}


?>