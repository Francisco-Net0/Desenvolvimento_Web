import { useState } from "react";

// const [estado, setEstado] = useState(valorInicial);
// estado: a variável que guarda o valor atual.
// setEstado: a função usada para atualizar esse valor.
// valorInicial: o valor que o estado terá quando o componente carregar pela primeira vez

function Tema() {
    const [mudar, setMudar] = useState(false);

    function setResetar() {
        setMudar(false);
    }

    return (
        <div id="div-tema" className={`text-center ${mudar ? 'tema-escuro' : 'tema-claro'}`}>
            <h1 id="titulo-tema">Troca de Tema</h1>
            <button id="btn_alternar" onClick={() => setMudar(!mudar)} className="btn btn-primary">
                {mudar ? "Light" : "Dark"}
            </button>
            <button id="btn_resetar" onClick={setResetar} className="btn btn-secondary">
                Resetar
            </button>
        </div>
    );
}

export default Tema;