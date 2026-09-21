<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loja de Informática</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light p-4">

    <div class="container" style="max-width: 500px;">
        <h1 class="text-center mb-4">Loja de Informática</h1>

        <form action="processa.php" method="POST" class="bg-white p-4 border rounded shadow-sm">

            <div class="mb-3">
                <label for="produto" class="form-label fw-bold">Produto:</label>
                <select name="produto" id="produto" class="form-select" required>
                    <option value="teclado">Teclado Mecânico - R$ 120,00</option>
                    <option value="monitor">Monitor - R$ 850,00</option>
                    <option value="cadeira">Cadeira Gamer - R$ 1.200,00</option>
                    <option value="mouse">Mouse Gamer - R$ 150,00</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="quantidade" class="form-label fw-bold">Quantidade:</label>
                <input type="number" name="quantidade" id="quantidade" class="form-control" min="1" value="1" required>
            </div>

            <div class="mb-3">
                <label for="pagamento" class="form-label fw-bold">Forma de pagamento:</label>
                <select name="pagamento" id="pagamento" class="form-select" required>
                    <option value="pix">PIX</option>
                    <option value="cartao">Cartão de Crédito</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="parcelas" class="form-label fw-bold">Número de parcelas:</label>
                <select name="parcelas" id="parcelas" class="form-select" required>
                    <option value="1">1x</option>
                    <option value="2">2x</option>
                    <option value="3">3x</option>
                    <option value="4">4x</option>
                    <option value="5">5x</option>
                    <option value="6">6x</option>
                    <option value="7">7x</option>
                    <option value="8">8x</option>
                    <option value="9">9x</option>
                    <option value="10">10x</option>
                    <option value="11">11x</option>
                    <option value="12">12x</option>
                </select>
            </div>

            <button type="submit" class="btn btn-primary w-100">Finalizar Compra</button>

        </form>
    </div>

</body>

</html>