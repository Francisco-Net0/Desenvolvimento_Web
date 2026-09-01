<?php
    $subTitulo = "Introdução ao PHP";
    $listLangs = ["PHP", "Java", "JS", "C#", "Pascal"];
    //print_r($listLangs); //printa a estrutura do array
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 31/08</title>
</head>
<body>
    <?php echo "<h1>DEVW - Aula 31/08</h1>" ?>
    <h2><?php echo $subTitulo ?></h2>
    <?php for($i = 0; $i < count($listLangs); $i++) : //inicio do laço ?>
    <p>Linguagem da pos. <?php echo $i ?>: <?php echo $listLangs[$i] ?></p>
    <?php endfor; //fim do laço ?>
</body>
</html>