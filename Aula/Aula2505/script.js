const cursos = [
    { id: 1, nome: "Análise e Desenvolvimento de Sistemas", sigla: "ADS" },
    { id: 2, nome: "Administração", sigla: "ADM" },
];

let nextId = 3

function listarCursos() {
    const listaCursos = document.getElementById("listaCursos");
    listaCursos.innerHTML = "";
    for (let c of cursos) {
        const novoLi = document.createElement("li")
        novoLi.textContent = c.id + " - " + c.nome + " | " + c.sigla
        listaCursos.append(novoLi)
    }
}

/*function removerCurso(id) {
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == id) {
            cursos.splice(i, 1)
            break
        }
    }
}*/

window.onload = function () {
    listarCursos()

    const btnAdicionar = document.getElementById("btnAdicionar");
    btnAdicionar.addEventListener("click", function () {
        const nome = document.getElementById("nomecurso").value;
        const sigla = document.getElementById("sigla").value;
        cursos.push({
            id: nextId,
            nome: nome,
            sigla: sigla
        });

        nextId++
        listarCursos();
        limparCampos();
    });

    /*const btnRemover = document.getElementById("btnRemover");
    btnRemover.addEventListener("click", function () {
        const cursoId = document.getElementById("cursoid").value;
        if (confirm("Deseja realmente excluir esse curso?")) {
            removerCurso(cursoId)
            listarCursos()
            limparCampos()
        }
    })*/

    const remove = document.getElementById("btnRemover");
    remove.addEventListener("click", function () {
        const cursoId = document.getElementById("cursoid").value;
        const indice = cursos.findIndex(function (item) {
            return item.id == cursoId
        })

        if (confirm("Deseja realmente excluir esse curso?")) {
            cursos.splice(indice, 1)
            listarCursos()
            limparCampos()
        }
    })

    function limparCampos() {
        document.getElementById("nomecurso").value = "";
        document.getElementById("sigla").value = "";
        document.getElementById("cursoid").value = "";
    }

};