function Pedidos({ pedidos, removerPedido }) {
  return (
    <section>
      <div className="titulo-pagina">
        <h1>Pedidos Cadastrados 📋</h1>
        <p>Veja todos os pedidos realizados.</p>
      </div>

      {pedidos.length === 0 ? (
        <div className="sem-pedidos">
          <h2>Nenhum pedido cadastrado ainda 😢</h2>
          <p>Vá até a página "Fazer Pedido" para cadastrar um pedido.</p>
        </div>
      ) : (
        <div className="lista-pedidos">
          {pedidos.map((pedido) => (
            <article className="card-pedido" key={pedido.id}>
              <div className="pedido-info">
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

                <small>
                  Pedido realizado em: {pedido.data}
                </small>
              </div>

              <button
                className="btn-remover"
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