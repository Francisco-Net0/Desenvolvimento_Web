-- ==========================================
-- TABELA DE BARBEIROS
-- ==========================================
CREATE TABLE barbeiros (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
    barbeiro_id BIGINT NOT NULL,
    servico_id BIGINT NOT NULL,
    data_agendamento DATE NOT NULL,
    hora_agendamento TIME NOT NULL,
    status VARCHAR(20) DEFAULT 'pendente',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (barbeiro_id) REFERENCES barbeiros(id) ON DELETE CASCADE,
    FOREIGN KEY (servico_id) REFERENCES servicos(id) ON DELETE CASCADE,
    
    CONSTRAINT horario_unico UNIQUE (barbeiro_id, data_agendamento, hora_agendamento),
    
    CONSTRAINT chk_status_agendamento CHECK (
        status IN ('pendente', 'confirmado', 'cancelado', 'concluido')
    )
);

-- ==========================================
-- DADOS INICIAIS
-- ==========================================

-- BARBEIROS
INSERT INTO barbeiros (nome) VALUES
('Henrique Silva'),
('João Santos');

-- SERVIÇOS
INSERT INTO servicos (nome, descricao, preco) VALUES
('Corte', 'Corte masculino', 45.00),
('Barba', 'Modelagem e acabamento da barba', 35.00),
('Corte + Barba', 'Pacote completo de corte e barba', 65.00),
('Sobrancelha', 'Design e alinhamento da sobrancelha', 20.00),
('Corte Infantil', 'Corte para crianças até 12 anos', 50.00),
('Pacote Premium', 'Corte, barba, sobrancelha e hidratação', 110.00);

-- ==========================================
-- AGENDAMENTOS PARA TESTE
-- ==========================================

-- AGENDAMENTOS PENDENTES
INSERT INTO agendamentos (cliente_nome, cliente_telefone, barbeiro_id, servico_id, data_agendamento, hora_agendamento, status) VALUES
-- AGENDAMENTOS CONFIRMADOS
('Lucas Ferreira', '(11) 90123-4567', 1, 1, '2026-06-21', '09:00:00', 'confirmado'),
('Gustavo Lima', '(11) 92345-6789', 1, 2, '2026-06-21', '11:00:00', 'confirmado'),
('Beatriz Mendes', '(11) 93456-7890', 2, 4, '2026-06-21', '14:00:00', 'confirmado'),
('Rodrigo Faria', '(11) 94567-8901', 1, 5, '2026-06-21', '15:00:00', 'confirmado'),
('Patrícia Nunes', '(11) 95678-9012', 2, 1, '2026-06-21', '16:00:00', 'confirmado');
