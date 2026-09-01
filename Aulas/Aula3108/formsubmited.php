<?php

//recuperar os dados do formulário (nomeproduto e valor)
$nomeproduto = $_GET["nomeproduto"];
$valor = $_GET["valor"];

echo "Produto: $nomeproduto - $valor,00 reais <br />";
echo '<a href="form.php">Voltar</a>';

?>