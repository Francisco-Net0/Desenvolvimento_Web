window.onload = function(){
    // Cria uma nova div com a class nova-div
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("nova-div")
    // Cria um novo titulo e adiciona na div
    const novoH1 = document.createElement("h1")
    novoH1.textContent = "Aula 11/05"
    novaDiv.append(novoH1)
    // Cria um novo paragrafo com ja com o texto
    const novoPa = document.createElement("p")
    novoPa.textContent = "Nova div criada..."
    // Adiciona o paragrafo na div.conteudo
    novaDiv.append(novoPa)
    const conteudo = document.getElementById("conteudo")
    conteudo.append(novaDiv)
}

function salvar() {
    const texto = document.getElementById("texto")

    const novoP = document.createElement("p")
    novoP.textContent = texto.value

    const painelTextos = document.getElementById("painelTextos")

    painelTextos.append(document.createElement("hr"))
    painelTextos.append(novoP)
    
    texto.value = ""
}

