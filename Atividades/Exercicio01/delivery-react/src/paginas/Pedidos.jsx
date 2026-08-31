function Pedidos({ pedidos, removerPedido }) {
  return (
    <section className="secao-pedidos">
      <div className="cabecalho-pagina">
        <h1>Pedidos Cadastrados 📋</h1>
        <p>Veja todos os pedidos realizados.</p>
      </div>

      {pedidos.length === 0 ? (
        <div className="estado-sem-pedidos">
          <h2>Nenhum pedido cadastrado ainda</h2>
          <p>Vá até a página "Fazer Pedido" para cadastrar um pedido.</p>
        </div>
      ) : (
        <div className="lista-pedidos-cadastrados">
          {pedidos.map((pedido) => (
            <article className="cartao-pedido" key={pedido.id}>
              <div className="informacoes-pedido">
                <h2>🍔 {pedido.produto}</h2>

                <p>
                  <strong>Cliente:</strong> {pedido.nome}
                </p>

                <p>
                  <strong>Quantidade:</strong> {pedido.quantidade}
                </p>

                <p>
                  <strong>Endereço:</strong> {pedido.endereco}
                </p>

                {pedido.observacao && (
                  <p>
                    <strong>Observação:</strong> {pedido.observacao}
                  </p>
                )}

                <small>Pedido realizado em: {pedido.data}</small>
              </div>

              <button
                className="botao-remover-pedido"
                onClick={() => removerPedido(pedido.id)}
              >
                Remover
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Pedidos;