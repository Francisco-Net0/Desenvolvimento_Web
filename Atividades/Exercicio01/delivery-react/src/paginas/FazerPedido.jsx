import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FazerPedido({ adicionarPedido }) {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [endereco, setEndereco] = useState("");
  const [observacao, setObservacao] = useState("");

  function cadastrarPedido(event) {
    event.preventDefault();

    if (!nome || !produto || !endereco) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const novoPedido = {
      id: Date.now(),
      nome,
      produto,
      quantidade,
      endereco,
      observacao,
      data: new Date().toLocaleString("pt-BR"),
    };

    adicionarPedido(novoPedido);

    alert("Pedido cadastrado com sucesso!");

    setNome("");
    setProduto("");
    setQuantidade(1);
    setEndereco("");
    setObservacao("");

    navigate("/pedidos");
  }

  return (
    <section className="pagina-formulario">
      <div className="titulo-pagina">
        <h1>Faça seu Pedido 📝</h1>
        <p>Preencha os dados abaixo para cadastrar seu pedido.</p>
      </div>

      <form className="formulario" onSubmit={cadastrarPedido}>
        <div className="campo">
          <label>Nome do cliente *</label>

          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>

        <div className="campo">
          <label>Produto *</label>

          <select
            value={produto}
            onChange={(event) => setProduto(event.target.value)}
          >
            <option value="">Selecione um produto</option>
            <option value="X-Burger">X-Burger</option>
            <option value="X-Salada">X-Salada</option>
            <option value="X-Bacon">X-Bacon</option>
            <option value="Batata Frita">Batata Frita</option>
            <option value="Refrigerante">Refrigerante</option>
            <option value="Milkshake">Milkshake</option>
          </select>
        </div>

        <div className="campo">
          <label>Quantidade *</label>

          <input
            type="number"
            min="1"
            value={quantidade}
            onChange={(event) =>
              setQuantidade(Number(event.target.value))
            }
          />
        </div>

        <div className="campo">
          <label>Endereço de entrega *</label>

          <input
            type="text"
            placeholder="Rua, número e bairro"
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
          />
        </div>

        <div className="campo">
          <label>Observação</label>

          <textarea
            placeholder="Ex.: Sem cebola"
            value={observacao}
            onChange={(event) => setObservacao(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-formulario">
          Cadastrar Pedido
        </button>
      </form>
    </section>
  );
}

export default FazerPedido;