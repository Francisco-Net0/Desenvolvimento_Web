<?php

require_once("classes/ProdutoDAO.php");

$produtoDAO = new ProdutoDAO();

//verificar se é edição do produto
if(isset($_GET['id'])) {
    //busco o produto a ser editado
    $produto = $produtoDAO->getProduto($_GET['id']);
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {    
    if($produtoDAO->inserir($_POST)){
        $msg = "Produto inserido com sucesso";
    }
    else {
        $msg = $produtoDAO->getErro();
    }
}

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Produtos</title>
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
                    <li><a href="index.php" class="nav-link">Produtos</a></li>
                    <li><a href="addproduto.php" class="nav-link active">Cadastrar Produto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Conteúdo Principal -->
    <main class="container">
        <div class="card">
            <div class="card-header">
                <div>
                    <h1 class="card-title">Formulário de Produtos</h1>
                    <p class="card-subtitle"><?php echo $msg ?? '' ?></p>
                </div>
                <a href="index.php" class="btn btn-secondary">
                    ← Voltar para Lista
                </a>
            </div>

            <!-- Formulário de Cadastro / Edição -->
            <form method="POST">
                <div class="form-group">
                    <label for="nome" class="form-label">Nome do Produto</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        class="form-control" 
                        placeholder="Digite o nome completo do produto" 
                        value="<?php echo $produto->nome ?? '' ?>" 
                        required
                    >
                </div>

                <div class="form-group">
                    <label for="valor" class="form-label">Valor Unitário</label>
                    <input 
                        type="text" 
                        id="valor" 
                        name="valor" 
                        class="form-control" 
                        placeholder="Ex: 5.00"
                        value="<?php echo $produto->valor ?? '' ?>" 
                        required
                    >
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">
                        Salvar Produto
                    </button>
                    <a href="index.php" class="btn btn-secondary">Cancelar</a>
                </div>
            </form>
        </div>
    </main>

    <!-- Rodapé -->
    <footer class="footer">
        <p>Disciplina DEVW - Aula 28/09</p>
    </footer>

</body>
</html>
