<?php 
    $usuarios = [
        "0" => [
            "nome" => "John",
            "email" => "john@gmail.com",
        ],
        "1" => [
            "nome" => "Paul",
            "email" => "paul@gmail.com"
        ]
    ];
    //print_r($usuarios);
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuários</title>
</head>
<body>
    <ul>
    <?php foreach ($usuarios as $usuario) : ?>
        <li><?php echo $usuario["nome"] . " / " . $usuario["email"]  ?></li>
    <?php endforeach; ?>
    </ul>
</body>
</html>