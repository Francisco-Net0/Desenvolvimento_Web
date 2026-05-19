window.onload = function () {
    const frutas = ["Abacate", "Banana", "Laranja", "Maça", "Uva"];
    listarFrutas();

    // ação para o botao salvar
    const btnSalvar = document.getElementById("btnSalvar")
    btnSalvar.addEventListener('click', function() {
        const novaFruta = document.getElementById("fruta")
        frutas.push(novaFruta.value)
        listarFrutas();
        novaFruta.value = ""
    })

    function listarFrutas() {
        // percorrer o array e adicionar cada fruta dentro da ul lista-frutas no html
        const listaFrutas = document.getElementById("lista-frutas");
        // limpar o ul "lista-frutas"
        listaFrutas.innerHTML = ""

        for (let i = 0; i < frutas.length; i++) {
            const novoItem = document.createElement("li");
            novoItem.textContent = frutas[i];

            // adiciona o novoItem dentro de lista-frutas
            listaFrutas.append(novoItem);
        }
    }
};
