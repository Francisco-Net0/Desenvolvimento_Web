import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="pagina-inicial">
      <div className="banner-principal">
        <div className="conteudo-banner">
          <span className="destaque-home">DELIVERY RÁPIDO 🍔</span>

          <h1>
            O seu lanche favorito
            <br />
            na porta da sua casa!
          </h1>

          <p>
            Bem-vindo ao Burger. Escolha seus produtos,
            faça seu pedido e aproveite!
          </p>

          <div className="area-botoes-principais">
            <Link to="/cardapio" className="botao-principal">
              Ver Cardápio
            </Link>

            <Link to="/fazer-pedido" className="botao-principal botao-secundario">
              Fazer Pedido
            </Link>
          </div>
        </div>

        <div className="icone-principal">🍔</div>
      </div>

      <section className="lista-vantagens" aria-label="Vantagens do delivery">
        <div className="item-vantagem">
          <h2>⚡ Rápido</h2>
          <p>Pedidos preparados com rapidez.</p>
        </div>

        <div className="item-vantagem">
          <h2>🍔 Saboroso</h2>
          <p>Lanches preparados especialmente para você.</p>
        </div>

        <div className="item-vantagem">
          <h2>🛵 Delivery</h2>
          <p>Entregamos no conforto da sua casa.</p>
        </div>
      </section>
    </section>
  );
}

export default Home;