import { NavLink } from "react-router-dom";

function Navbar({ quantidadePedidos }) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="logo">
          🍔 Burger 
        </NavLink>

        <nav>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/cardapio">
            Cardápio
          </NavLink>

          <NavLink to="/fazer-pedido">
            Fazer Pedido
          </NavLink>

          <NavLink to="/pedidos">
            Pedidos ({quantidadePedidos})
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;