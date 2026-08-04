import Contador from "./componentes/contador";
import Tema from "./componentes/tema";
import './index.css'

function App() {
  return(
    <div className="container">
      <Tema />
      <hr/>
      <Contador />
    </div>
  );
}

export default App;