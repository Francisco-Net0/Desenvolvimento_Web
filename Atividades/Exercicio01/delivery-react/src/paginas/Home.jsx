import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div>
          <span className="destaque">DELIVERY RÁPIDO 🍔</span>

          <h1>
            O seu lanche favorito
            <br />
            na porta da sua casa!
          </h1>

          <p>
            Bem-vindo ao Burger . Escolha seus produtos,
            faça seu pedido e aproveite!
          </p>

          <div className="botoes-home">
            <Link to="/cardapio" className="btn">
              Ver Cardápio
            </Link>

            <Link to="/fazer-pedido" className="btn btn-secundario">
              Fazer Pedido
            </Link>
          </div>
        </div>

        <div className="emoji-burger">🍔</div>
      </div>

      <section className="vantagens">
        <div className="vantagem">
          <h2>⚡ Rápido</h2>
          <p>Pedidos preparados com rapidez.</p>
        </div>

        <div className="vantagem">
          <h2>🍔 Saboroso</h2>
          <p>Lanches preparados especialmente para você.</p>
        </div>

        <div className="vantagem">
          <h2>🛵 Delivery</h2>
          <p>Entregamos no conforto da sua casa.</p>
        </div>
      </section>
    </section>
  );
}

export default Home;