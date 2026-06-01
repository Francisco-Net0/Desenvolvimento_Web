window.onload = function() {
    // Cria uma requisição HTTP
    const req = new XMLHttpRequest();
    // Configura a requisição para buscar o arquivo JSON
    req.open("GET", "http://127.0.0.1:5500/Aula/Aula0106/frutas.json"); 
    // Envia a requisição
    req.send(); 
    // Executa quando a resposta da requisição é recebida
    req.onload = function() {
        // Converte o JSON recebido em um array JavaScript
        const frutas = JSON.parse(req.responseText);
        // Obtém o elemento HTML com id="lista"
        const lista = document.getElementById("lista");
        for (let item of frutas) {
            // Cria um elemento <li>
            const li = document.createElement("li");
            // Define o nome da fruta como texto do <li>
            li.textContent = item.nome;
            // Adiciona o <li> dentro da lista
            lista.append(li);
            // Exibe o nome da fruta no console
            console.log(item.nome)
        }
    };
};

window.onload = async function () {
    try {
        // Faz uma requisição HTTP para buscar o arquivo JSON
        const resposta = await fetch("http://127.0.0.1:5500/Aula/Aula0106/frutas.json");
        // Converte a resposta recebida em um objeto/array JavaScript
        const frutas = await resposta.json();
        // Obtém o elemento HTML com id="lista"
        const lista = document.getElementById("lista");
        // Percorre cada fruta presente no array
        for (const item of frutas) {
            // Cria um novo elemento <li>
            const li = document.createElement("li");
            // Define o nome da fruta como conteúdo do <li>
            li.textContent = item.nome;
            // Adiciona o <li> dentro da lista
            lista.append(li);
            // Exibe o nome da fruta no console
            console.log(item.nome);
        }
    } catch (erro) {
        // Captura e exibe qualquer erro ocorrido durante a requisição
        console.error("Erro ao carregar o JSON:", erro);
    }
};