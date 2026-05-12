window.onload = function () {
    // Cria o titulo
    const titulo = document.createElement("h1");
    titulo.id = "titulo";
    titulo.textContent = "Links Favoritos";

    // Cria a div de descriçao
    const divDescricao = document.createElement("div");
    divDescricao.classList.add("mb-3");
    const inputDescricao = document.createElement("input");
    inputDescricao.classList.add("form-control");
    inputDescricao.id = "descricao";
    inputDescricao.placeholder = "Descrição do link";
    // Adiciona o input na div
    divDescricao.append(inputDescricao);

    // Cria a div de endereço
    const divEndereco = document.createElement("div");
    divEndereco.classList.add("mb-3");
    const inputEndereco = document.createElement("input");
    inputEndereco.classList.add("form-control");
    inputEndereco.id = "endereco";
    inputEndereco.placeholder = "Endereço do link";
    // Adiciona o input na div
    divEndereco.append(inputEndereco);

    // Cria o botao
    const botao = document.createElement("button");
    botao.classList.add("btn", "btn-primary", "mb-3");
    botao.id = "adicionar";
    botao.textContent = "Adicionar Link";
    botao.onclick = adicionarLink;

    // Cria a lista
    const lista = document.createElement("ul");
    lista.id = "listarLinks";
    lista.classList.add("list-group");

    // Painel
    const painel = document.getElementById("painel");

    // Adiciona tudo no painel
    painel.append(
        titulo,
        divDescricao,
        divEndereco,
        botao,
        lista
    );
};

function adicionarLink() {
    const descricao = document.getElementById("descricao").value;
    const endereco = document.getElementById("endereco").value;

    if (descricao == "" || endereco == "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Cria item da lista
    const item = document.createElement("li");
    item.classList.add("list-group-item");

    // Cria o link
    const link = document.createElement("a");
    link.href = endereco;
    link.target = "_blank";
    link.textContent = descricao;

    // Adiciona link no item
    item.append(link);

    // Adiciona item na lista
    document.getElementById("listarLinks").append(item);

    // Limpa os campos
    document.getElementById("descricao").value = "";
    document.getElementById("endereco").value = "";
}