// Chave da API para autenticação
const apikey = "sb_publishable_CGG4UzLM-4OtS3ClbHcA0g_AXbaZaU3";

// Funçao executada quando a pagina carrega
window.onload = function () {
    getServicos();          // Busca e exibe os serviços
    getServicosAgenda();    // Busca serviços
    getBarbeiros();         // Busca barbeiros 
    
    // Configura o formulário de agendamento
    const formAgendamento = document.getElementById("form-agendamento");
    if (formAgendamento) {
        formAgendamento.addEventListener("submit", function (e) {
            e.preventDefault();  // Impede o recarregamento da pagina
            agendar();           // Chama a Funçao para criar o agendamento
        });
    }
    
    if (document.getElementById("dadosTabela")) {
        getAgendamentos(); // Busca e exibe os agendamentos
    }
}

// Funçao para buscar e exibir os serviços
async function getServicos() {
    // URL da API do Supabase para a tabela de serviços
    const url = "https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/servicos";
    // Faz a requisição GET com a chave de API
    const response = await fetch(url, {
        headers: { "apikey": apikey }
    });
    // Converte a resposta para JSON
    const listarServicos = await response.json();
    // Pega o container onde os serviços serão exibidos
    const dadosServicos = document.getElementById("container-servicos");
    // Limpa o container
    dadosServicos.innerHTML = "";
    // Para cada serviço, cria um card com as informaçoes
    for (let servico of listarServicos) {
        dadosServicos.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card service-card h-100 text-center p-4">
                    <div class="card-body">
                        <i class="bi bi-scissors d-block mb-3"></i>
                        <h5 class="fw-bold card-title">${servico.nome}</h5>
                        <p class="text-muted card-text">${servico.descricao}</p>
                        <h4 class="fw-bold mt-4" style="color: #FFD700;">R$ ${servico.preco}</h4>
                    </div>
                </div>
            </div>
        `;
    }
}

// Funçao para buscar serviços e preencher o select do formulário de agendamento
async function getServicosAgenda() {
    // URL da API do Supabase para a tabela de serviços
    const url = "https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/servicos";
    // Faz a requisição GET com a chave de API
    const response = await fetch(url, {
        headers: { "apikey": apikey }
    });
    // Converte a resposta para JSON
    const listarServicos = await response.json();
    // Pega o container onde os serviços serão exibidos
    const containerServico = document.getElementById("select-servicos");
    // Adiciona a opção padrão "Selecione"
    containerServico.innerHTML = `<option value="" selected disabled>Selecione</option>`;
    // Adiciona cada serviço como uma opção no select
    for (let servico of listarServicos) {
        containerServico.innerHTML += `
            <option value="${servico.id}">${servico.nome} - R$ ${servico.preco}</option>
        `;
    }
}

// Funçao para buscar barbeiros e preencher o select do formulário de agendamento
async function getBarbeiros() {
    // URL da API do Supabase para a tabela de barbeiros
    const url = "https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/barbeiros";
    // Faz a requisição GET com a chave de API
    const response = await fetch(url, {
        headers: { "apikey": apikey }
    });
    // Converte a resposta para JSON
    const listarBarbeiros = await response.json();
    // Pega o container onde os barbeiros serão exibidos
    const containerBarbeiro = document.getElementById("select-barbeiros");
    // Adiciona a opção padrão "Selecione"
    containerBarbeiro.innerHTML = `<option value="" selected disabled>Selecione</option>`;
    // Adiciona cada barbeiro como uma opção no select
    for (let barbeiro of listarBarbeiros) {
        containerBarbeiro.innerHTML += `
            <option value="${barbeiro.id}">${barbeiro.nome}</option>
        `;
    }
}

// Funçao para verificar se um horário está disponível para um barbeiro
async function verificarDisponibilidade(barbeiroId, data, hora) {
    // Busca agendamentos que correspondem ao barbeiro, data e hora, e que não estão cancelados
    const url = `https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/agendamentos?barbeiro_id=eq.${barbeiroId}&data_agendamento=eq.${data}&hora_agendamento=eq.${hora}&status=neq.cancelado`;
    // Faz a requisição GET com a chave de API
    const response = await fetch(url, {
        headers: { "apikey": apikey }
    });
    // Converte a resposta para JSON
    const agendamentos = await response.json();
    // Retorna true se não houver agendamentos (horário disponível)
    return agendamentos.length === 0;
}

// Funçao para criar um novo agendamento
async function agendar() {
    // URL da API do Supabase para a tabela de agendamentos
    const url = "https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/agendamentos";

    // Pega os valores dos campos do formulário
    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const servico = document.getElementById("select-servicos");
    const barbeiro = document.getElementById("select-barbeiros");
    const data = document.getElementById("data");
    const hora = document.getElementById("hora");
    
    // Valida se todos os campos foram preenchidos
    if (!nome.value || !telefone.value || !servico.value || !barbeiro.value || !data.value || !hora.value) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    
    // Verifica se o horário está disponível para o barbeiro selecionado
    const disponivel = await verificarDisponibilidade(
        parseInt(barbeiro.value),
        data.value,
        hora.value
    );
    
    // Se o horário não estiver disponível, exibe mensagem de erro
    if (!disponivel) {
        alert(`Horário indisponível!\n\nO barbeiro selecionado já possui um agendamento para ${data.value} às ${hora.value}.\n\nPor favor, escolha outro horário ou barbeiro.`);
        return;
    }
    
    // Cria o objeto com os dados do agendamento
    const agendamento = {
        cliente_nome: nome.value,
        cliente_telefone: telefone.value,
        servico_id: parseInt(servico.value),
        barbeiro_id: parseInt(barbeiro.value),
        data_agendamento: data.value,
        hora_agendamento: hora.value,
        status: "pendente" // Status inicial do agendamento
    };
    
    try {
        // Envia a requisição POST para criar o agendamento no Supabase
        const resposta = await fetch(url, {
            method: "POST",
            headers: {
                "apikey": apikey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(agendamento)
        });
        
        if (resposta.ok) { // Se o agendamento foi criado com sucesso
            alert("Agendamento realizado com sucesso!");
            document.getElementById("form-agendamento").reset();
        } else { // Senão, verifica se foi por conflito de horário
            const erro = await resposta.text();
            if (erro.includes("duplicate key") || erro.includes("UNIQUE")) {
                alert("Horário indisponível!\n\nEste horário já está ocupado para o barbeiro selecionado.\nPor favor, escolha outro horário.");
            } else {
                alert(`Erro ao realizar agendamento (${resposta.status}):\n\n${erro}`);
            }
        }
    } catch (error) {  // Se houve erro de conexão
        alert(`Erro de conexão:\n\n${error.message}`);
    }
}

// Funçao para buscar todos os agendamentos e exibir na tabela admin
async function getAgendamentos() {
    // URL da API do Supabase para a tabela de agendamentos
    const url = "https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/agendamentos";
    // Faz a requisição GET com a chave de API
    const response = await fetch(url, {
        headers: { "apikey": apikey }
    });
    // Converte a resposta para JSON
    const listarAgendamentos = await response.json();
    // Pega o container onde os agendamentos serão exibidos
    const dadosTabela = document.getElementById("dadosTabela");
    // Limpa o container
    dadosTabela.innerHTML = "";
    // Para cada agendamento, cria uma linha na tabela
    for (let agenda of listarAgendamentos) {
        // Define a classe CSS do badge de status
        let badgeClass = "bg-warning";                                 // pendente - amarelo
        if (agenda.status == "confirmado") badgeClass = "bg-success";  // confirmado - verde
        if (agenda.status == "cancelado") badgeClass = "bg-danger";    // cancelado - vermelho
        if (agenda.status == "concluido") badgeClass = "bg-secondary"; // concluído - cinza
        dadosTabela.innerHTML += `
            <tr>
                <td class="ps-4 fw-bold">${agenda.barbeiros}</td>
                <td>${agenda.cliente_nome}</td>
                <td>${agenda.cliente_telefone}</td>
                <td>${agenda.data_agendamento}</td>
                <td>${agenda.hora_agendamento}</td>
                <td><span class="badge ${badgeClass}">${agenda.status}</span></td>
                <td class="text-center">
                    <!-- Botão para confirmar agendamento -->
                    <button class="btn btn-sm btn-success me-1" onclick="confirmarAgendamento(${agenda.id})">
                        <i class="bi bi-check-lg"></i>
                    </button>
                    <!-- Botão para excluir agendamento -->
                    <button class="btn btn-sm btn-danger" onclick="excluirAgendamento(${agenda.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    }
}

// Funçao que altera status para "confirmado"
async function confirmarAgendamento(id) {
    // URL da API do Supabase para a tabela de agendamentos
    const url = `https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/agendamentos?id=eq.${id}`;
    // Envia uma requisição PATCH para atualizar apenas o status
    const resposta = await fetch(url, {
        method: "PATCH",
        headers: {
            "apikey": apikey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: "confirmado" })
    });
    if (resposta.ok) {
        alert("Agendamento confirmado!");
        getAgendamentos(); 
    } else {
        alert("Erro ao confirmar agendamento");
    }
}

// Funçao para excluir um agendamento
async function excluirAgendamento(id) {
    // Confirmação antes de excluir
    if (!confirm("Deseja excluir este agendamento?")) return;
    // URL da API do Supabase para a tabela de agendamentos
    const url = `https://hzkyrsespomfmhhmfwoi.supabase.co/rest/v1/agendamentos?id=eq.${id}`;
    // Envia uma requisição DELETE para excluir um agendamento
    const resposta = await fetch(url, {
        method: "DELETE",
        headers: { "apikey": apikey }
    });
    if (resposta.ok) {
        alert("Agendamento excluído!");
        getAgendamentos(); 
    } else {
        alert("Erro ao excluir agendamento");
    }
}