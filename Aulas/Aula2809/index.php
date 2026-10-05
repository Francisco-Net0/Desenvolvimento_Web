<?php
    require_once("classes/ProdutoDAO.php");
    $produtoDAO = new ProdutoDAO();
    $listaProdutos = $produtoDAO->getProdutos();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Produtos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Navegação / Header -->
    <header class="navbar">
        <div class="navbar-container">
            <a href="index.php" class="brand-logo">
                <span>📦 CRUD Produtos</span>
            </a>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.php" class="nav-link active">Produtos</a></li>
                    <li><a href="addproduto.php" class="nav-link">Cadastrar Produto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Conteúdo Principal -->
    <main class="container">
        <div class="card">
            <div class="card-header">
                <div>
                    <h1 class="card-title">Produtos Cadastrados</h1>
                    <p class="card-subtitle">Gerenciamento de cadastro de produtos</p>
                </div>
                <a href="addproduto.php" class="btn btn-primary">
                    + Cadastrar Produto
                </a>
            </div>

            <!-- Tabela de Produtos -->
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="col-id">ID</th>
                            <th>Nome do Produto</th>
                            <th>Valor</th>
                            <th class="col-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php foreach($listaProdutos as $produto) : ?>
                        <tr>
                            <td class="col-id"><?php echo $produto->id ?></td>
                            <td><?php echo $produto->nome ?></td>
                            <td>
                                <span class="badge">R$ <?php echo number_format($produto->valor, 2, '.', '') ?></span>
                            </td>
                            <td class="col-actions">
                                <div class="table-actions">
                                    <a href="<?php echo 'addproduto.php?id=' . $produto->id ?>" class="btn btn-warning btn-sm">Editar</a>
                                    <a href="#" class="btn btn-danger btn-sm">Excluir</a>
                                </div>
                            </td>
                        </tr>
                    <?php endforeach; ?> 
                    </tbody>
                </table>
            </div>
        </div>
    </main>

    <!-- Rodapé -->
    <footer class="footer">
        <p>Disciplina DEVW - Aula 28/09</p>
    </footer>

</body>
</html>
