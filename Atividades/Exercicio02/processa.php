<?php

// Verifica se os dados foram enviados pelo formulário
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo "<div class='container mt-4 alert alert-danger'>";
    echo "<h2>Erro: formulário não enviado corretamente.</h2>";
    echo "<a href='index.php' class='alert-link'>Voltar para a página inicial</a>";
    echo "</div>";
    exit;
}

// Recebe os dados do formulário
$produto = $_POST["produto"];
$quantidade = (int) $_POST["quantidade"];
$pagamento = $_POST["pagamento"];
$parcelas = (int) $_POST["parcelas"];

// Validação da quantidade
if ($quantidade <= 0) {
    echo "<div class='container mt-4 alert alert-danger'>";
    echo "<h2>Erro: a quantidade deve ser maior que 0.</h2>";
    echo "<a href='index.php' class='alert-link'>Voltar para a página inicial</a>";
    echo "</div>";
    exit;
}

// Validação das parcelas
if ($parcelas < 1 || $parcelas > 12) {
    echo "<div class='container mt-4 alert alert-danger'>";
    echo "<h2>Erro: o número de parcelas deve estar entre 1 e 12.</h2>";
    echo "<a href='index.php' class='alert-link'>Voltar para a página inicial</a>";
    echo "</div>";
    exit;
}

// Define o preço do produto usando estrutura condicional
if ($produto == "teclado") {
    $nomeProduto = "Teclado Mecânico";
    $valorUnitario = 120.00;

} elseif ($produto == "monitor") {
    $nomeProduto = "Monitor";
    $valorUnitario = 850.00;

} elseif ($produto == "cadeira") {
    $nomeProduto = "Cadeira Gamer";
    $valorUnitario = 1200.00;

} elseif ($produto == "mouse") {
    $nomeProduto = "Mouse Gamer";
    $valorUnitario = 150.00;

} else {
    echo "<div class='container mt-4 alert alert-danger'>";
    echo "<h2>Erro: produto inválido.</h2>";
    echo "<a href='index.php' class='alert-link'>Voltar para a página inicial</a>";
    echo "</div>";
    exit;
}

// Calcula o subtotal
$subtotal = $valorUnitario * $quantidade;

// Inicializa valores
$desconto = 0;
$juros = 0;
$total = $subtotal;
$valorParcela = 0;

// Regras de pagamento
if ($pagamento == "pix") {

    // PIX tem 5% de desconto
    $desconto = $subtotal * 0.05;
    $total = $subtotal - $desconto;

} elseif ($pagamento == "cartao") {

    // Cartão de 1 a 3 parcelas: sem juros
    if ($parcelas >= 1 && $parcelas <= 3) {

        $total = $subtotal;

    } else {

        // Cartão de 4 a 12 parcelas:
        // juros de 1,5% ao mês
        $juros = $subtotal * 0.015 * $parcelas;
        $total = $subtotal + $juros;
    }

    // Calcula o valor de cada parcela
    $valorParcela = $total / $parcelas;

} else {
    echo "<div class='container mt-4 alert alert-danger'>";
    echo "<h2>Erro: forma de pagamento inválida.</h2>";
    echo "<a href='index.php' class='alert-link'>Voltar para a página inicial</a>";
    echo "</div>";
    exit;
}

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resumo da Compra</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light p-4">

    <div class="container" style="max-width: 600px;">

        <h1 class="text-center mb-4">Resumo da Compra</h1>

        <div class="card p-3 mb-3">
            <p class="mb-2"><strong>Produto:</strong> <?php echo $nomeProduto; ?></p>
            <p class="mb-2"><strong>Valor unitário:</strong> R$ <?php echo number_format($valorUnitario, 2, ',', '.'); ?></p>
            <p class="mb-2"><strong>Quantidade:</strong> <?php echo $quantidade; ?></p>
            <p class="mb-0"><strong>Subtotal:</strong> R$ <?php echo number_format($subtotal, 2, ',', '.'); ?></p>
        </div>

        <?php if ($pagamento == "pix") { ?>

            <div class="card p-3 mb-3">
                <p class="mb-2"><strong>Forma de pagamento:</strong> PIX</p>
                <p class="mb-0"><strong>Desconto de 5%:</strong> R$ <?php echo number_format($desconto, 2, ',', '.'); ?></p>
            </div>

        <?php } else { ?>

            <div class="card p-3 mb-3">
                <p class="mb-2"><strong>Forma de pagamento:</strong> Cartão de Crédito</p>
                <p class="mb-2"><strong>Parcelas:</strong> <?php echo $parcelas; ?>x</p>

                <?php if ($juros > 0) { ?>
                    <p class="mb-2"><strong>Juros:</strong> R$ <?php echo number_format($juros, 2, ',', '.'); ?></p>
                <?php } else { ?>
                    <p class="mb-2"><strong>Juros:</strong> Sem juros</p>
                <?php } ?>

                <p class="mb-0"><strong>Valor de cada parcela:</strong> R$ <?php echo number_format($valorParcela, 2, ',', '.'); ?></p>
            </div>

        <?php } ?>

        <div class="alert alert-success">
            <h2 class="h4 mb-0">Valor total: R$ <?php echo number_format($total, 2, ',', '.'); ?></h2>
        </div>

        <div class="text-center mt-4">
            <a href="index.php" class="btn btn-secondary">Voltar para a página inicial</a>
        </div>

    </div>

</body>

</html>