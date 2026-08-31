<?php
    $nome = "Francisco";
    $idade = 19;
    $salario = 10500;
    $verdade = true;

    if ($verdade == true) {
        $verdade = "verdade";
    } else {
        $verdade = "mentira";
    }

    $subTitulo = "Introdução ao PHP";
    $listLangs = ["PHP", "Java", "JS", "Python", "C#", "Pascal"];
    # print_r($listLangs)
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 31/08</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        h1 {
            margin-top: 30px;
        }

        #sub {
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <?php echo "<h1 class='text-center'>DEVW - Aula 31/08!</h1>"; ?>
        <h1 class="text-center">
            <?php echo $subTitulo; ?>
        </h1>
        <p id="sub">
            <?php echo "Me chamo $nome, tenho $idade anos, ganho R$ $salario e isso é $verdade"; ?>
        </p>
        <?php for ($i = 0; $i < count($listLangs); $i++) : ?>
            <p>
                Linguagem da posição <?php echo $i; ?> : <?php echo $listLangs[$i]; ?>
            </p>
        <?php endfor; ?>
    </div>
</body>
</html>