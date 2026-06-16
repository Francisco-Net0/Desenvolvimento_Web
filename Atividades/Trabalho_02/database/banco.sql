-- ==========================================
-- TABELA DE BARBEIROS
-- ==========================================
CREATE TABLE barbeiros (
    id BIGSERIAL PRIMARY KEY,
    usuario_id BIGINT UNIQUE,
    nome VARCHAR(100) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id)
    ON DELETE SET NULL
);

-- ==========================================
-- TABELA DE SERVIÇOS
-- ==========================================
CREATE TABLE servicos (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- TABELA DE AGENDAMENTOS
-- ==========================================
CREATE TABLE agendamentos (
    id BIGSERIAL PRIMARY KEY,

    cliente_nome VARCHAR(100) NOT NULL,
    cliente_telefone VARCHAR(20) NOT NULL,
    cliente_email VARCHAR(100),

    barbeiro_id BIGINT NOT NULL,
    servico_id BIGINT NOT NULL,

    data_agendamento DATE NOT NULL,
    hora_agendamento TIME NOT NULL,

    status VARCHAR(20) DEFAULT 'pendente',
    observacoes TEXT,

    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (barbeiro_id)
        REFERENCES barbeiros(id)
        ON DELETE CASCADE,

    FOREIGN KEY (servico_id)
        REFERENCES servicos(id)
        ON DELETE CASCADE,

    CONSTRAINT horario_unico
    UNIQUE (barbeiro_id, data_agendamento, hora_agendamento),

    CONSTRAINT chk_status_agendamento
    CHECK (
        status IN (
            'pendente',
            'confirmado',
            'cancelado',
            'concluido'
        )
    )
);

-- ==========================================
-- BARBEIROS
-- ==========================================
INSERT INTO barbeiros (usuario_id, nome)
VALUES
(2, 'Henrique Silva'),
(3, 'João Santos');

-- ==========================================
-- SERVIÇOS
-- ==========================================
INSERT INTO servicos (nome, descricao, preco)
VALUES
('Corte', 'Corte masculino', 45.00),
('Barba', 'Modelagem e acabamento da barba', 35.00),
('Corte + Barba', 'Pacote completo de corte e barba', 65.00),
('Sobrancelha', 'Design e alinhamento da sobrancelha', 20.00),
('Corte Infantil', 'Corte para crianças até 12 anos', 50.00),
('Pacote Premium', 'Corte, barba, sobrancelha e hidratação', 110.00);
