import { useState } from "react";

// const [estado, setEstado] = useState(valorInicial);
// estado: a variável que guarda o valor atual.
// setEstado: a função usada para atualizar esse valor.
// valorInicial: o valor que o estado terá quando o componente carregar pela primeira vez

function Contador() {
    const [contador, setContador] = useState(0);

    if (contador < 0) {
        setContador(0);
        window.alert("O contador não pode ser menor que 0!");
    }

    return (
        <div id="div-contador" className="text-center">
            <h1>Contador</h1>
            <h1 id="titulo_contador">{contador}</h1>
            <button id="btn_incrementar" onClick={() => setContador(contador + 1)} className="btn btn-primary">Incrementar</button>
            <button id="btn_decrementar" onClick={() => setContador(contador - 1)} className="btn btn-danger">Decrementar</button>
            <button id="btn_resetar" onClick={() => setContador(0)} className="btn btn-secondary">Resetar</button>
        </div>
    );
}

export default Contador;