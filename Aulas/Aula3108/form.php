<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <h1>Formulário de Produtos</h1>
    <form method="get" action="formsubmited.php">
        <p>
            Nome do produto:<br />
            <input type="text" name="nomeproduto" />
        </p>
        <p>
            Valor:<br />
            <input type="text" name="valor" />
        </p>
        <p><button type="submit">Salvar</button></p>
    </form>
</body>
</html>