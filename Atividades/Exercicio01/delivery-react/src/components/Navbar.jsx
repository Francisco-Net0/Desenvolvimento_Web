import { NavLink } from "react-router-dom";

function Navbar({ quantidadePedidos }) {
  return (
    <header className="cabecalho-principal">
      <div className="conteudo-cabecalho">
        <NavLink to="/" className="logo-loja">
          🍔 Burger
        </NavLink>

        <nav className="menu-navegacao" aria-label="Menu principal">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/cardapio">Cardápio</NavLink>

          <NavLink to="/fazer-pedido">Fazer Pedido</NavLink>

          <NavLink to="/pedidos">Pedidos ({quantidadePedidos})</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;