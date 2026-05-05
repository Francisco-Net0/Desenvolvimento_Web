// Ao clicar acontece isso
function clicar() {
    let nome = document.getElementById("nome").value
    window.alert(`Bem-Vindo(a), ${nome}`)
}

// Ao clicar acontece isso
function somar() {
    var txt1 = document.getElementById("txtn1")
    var txt2 = document.getElementById("txtn2")
    var res = document.getElementById("res")
    var n1 = Number(txt1.value)
    var n2 = Number(txt2.value)
    var s = n1 + n2

    res.innerHTML = `A soma é igual a <strong> ${s} </strong>`
    res.className = "form-control";
}

// Pega o valor de nome_02 e da um alerta na tela
// let nome = document.getElementById("nome_02").value
// window.alert(`Bem-Vindo(a), ${nome}`)

// Pega o que tem em li
let itensLista = document.getElementsByTagName("li")
for (let i = 0; i < itensLista.length; i++) {
    console.log(itensLista[i].innerHTML)
} 

// Pega o valor registrado de nome_02
const campoNome = document.getElementById("nome_02")
console.log(`Nome atual: ${campoNome.value}`)
campoNome.value = "Ana" // Muda de Francisco
console.log(`Nome Editado: ${campoNome.value}`) 

/* Comentado senao a pagina de eventos nao roda
// Pega o que tem em ul
const listaUL = document.getElementsByTagName("ul")
console.log(listaUL[0].textContent)

// Pega o elemento titulo e edita-o
const titulo = document.getElementById("titulo")
titulo.textContent += " - EDITADO"
titulo.style.color = "blue"
titulo.style.fontSize = "40px" 
*/

// Só executa quando o documento concluir o carregamento 
window.onload = function() {
    const btnConfirmar = document.getElementById("btnConfirmar")
    btnConfirmar.addEventListener("click", function () {
        console.log("passou")
        const nome = document.getElementById("nome_02")
        window.alert(`Bem-Vindo(a), ${nome.value}`)
    })
}