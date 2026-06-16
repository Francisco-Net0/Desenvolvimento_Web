const apikey = "sb_publishable_CGG4UzLM-4OtS3ClbHcA0g_AXbaZaU3"

window.onload = function () {
    getServicos();
    getServicosAgenda()
    getBarbeiros();

    const BtnAgendar = document.getElementById("BtnAgendar");
    BtnAgendar.addEventListener("click", function () {
        agendar();
    });
}

async function getServicos() {
    const url = "https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/servicos"

    // 1. Faz a requisição para a API
    const response = await fetch(url, {
        headers: {
            "apikey": apikey
        }
    });
    const listarSercicos = await response.json();

    // 2. Seleciona o container e limpa o conteúdo antigo
    const dadosServiços = document.getElementById("container-servicos");
    dadosServiços.innerHTML = "";

    // 3. Itera sobre os serviços e cria o HTML dinamicamente
    for (let servico of listarSercicos) {
        dadosServiços.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card service-card h-100 text-center p-4">
                    <div class="card-body">
                        <i class="bi bi-scissors d-block mb-3"></i>
                        <h5 class="fw-bold card-title">${servico.nome}</h5>
                        <p class="text-muted card-text">${servico.descricao}</p>
                        <h4 class="fw-bold text-dark mt-4">R$ ${servico.preco}</h4>
                    </div>
                </div>
            </div>
        `;
    }
}

async function getServicosAgenda() {
    const url = "https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/servicos"

    // 1. Faz a requisição com os cabeçalhos corretos para evitar o CORS
    const response = await fetch(url, {
        headers: {
            "apikey": apikey,
        }
    });

    const listarSercicos = await response.json();

    // 2. Seleciona o container do agendamento
    const containerServico = document.getElementById("select-servicos");

    // 3. Cria a estrutura inicial do SELECT (Abre a tag)
    let htmlGerado = `
            <div class="col-md-6">
                <select class="form-select" id="id-select-servicos-interno">
                    <option value="" selected>Selecione</option>
        `;

    // 4. O loop alimenta APENAS as <option> dinamicamente com os dados do banco
    for (let servico of listarSercicos) {
        htmlGerado += `
                <option value="${servico.id}">${servico.nome} - R$ ${servico.preco}</option>
            `;
    }

    // 5. Fecha as tags do SELECT e da DIV
    htmlGerado += `
                </select>
            </div>
        `;

    // 6. Coloca tudo de uma vez no DOM
    containerServico.innerHTML = htmlGerado;
}

async function getBarbeiros() {
    const url = "https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/barbeiros";

    // 1. Faz a requisição com os cabeçalhos corretos para evitar o CORS
    const response = await fetch(url, {
        headers: {
            "apikey": apikey,
        }
    });

    const listarBarbeiros = await response.json();

    // 2. Seleciona o container do agendamento
    const containerBarbeiro = document.getElementById("select-barbeiros");

    // 3. Cria a estrutura inicial do SELECT (Abre a tag)
    let htmlGerado = `
            <div class="col-md-6">
                <select class="form-select" id="id-select-barbeiro-interno">
                    <option value="" selected>Selecione</option>
        `;

    // 4. O loop alimenta APENAS as <option> dinamicamente com os dados do banco
    for (let barbeiro of listarBarbeiros) {
        htmlGerado += `
                <option value="${barbeiro.id}">${barbeiro.nome}</option>
            `;
    }

    // 5. Fecha as tags do SELECT e da DIV
    htmlGerado += `
                </select>
            </div>
        `;

    // 6. Coloca tudo de uma vez no DOM
    containerBarbeiro.innerHTML = htmlGerado;
}

async function agendar() {
    // pegar os valores preenchidos no formulário
    const descricao = document.getElementById("descricao");
    const prioridade = document.getElementById("prioridade");

    const tarefa = {
        "descricao": descricao.value,
        "prioridade": prioridade.value
    };

    const resposta = await fetch(url, {
        method: "POST",
        headers: {
            "apikey": apikey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tarefa) // converte o obj JS para JSON
    });

    if (resposta.ok == true) {
        alert("Tarefa adicionada com sucesso");
        getTarefas();
        // limpar os campos
        descricao.value = "";
        prioridade.value = "";
    }
    else {
        alert("Erro ao adicionar tarefa");
    }
}