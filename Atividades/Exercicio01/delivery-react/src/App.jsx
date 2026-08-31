import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./paginas/Home";
import Cardapio from "./paginas/Cardapio";
import FazerPedido from "./paginas/FazerPedido";
import Pedidos from "./paginas/Pedidos";

function App() {
  const [pedidos, setPedidos] = useState([]);

  function adicionarPedido(novoPedido) {
    setPedidos([...pedidos, novoPedido]);
  }

  function removerPedido(id) {
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  }

  return (
    <>
      <Navbar quantidadePedidos={pedidos.length} />

      <main className="area-principal">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cardapio" element={<Cardapio />} />

          <Route
            path="/fazer-pedido"
            element={<FazerPedido adicionarPedido={adicionarPedido} />}
          />

          <Route
            path="/pedidos"
            element={
              <Pedidos
                pedidos={pedidos}
                removerPedido={removerPedido}
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;