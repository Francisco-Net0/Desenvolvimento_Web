import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    function incrementarContador() {
        setContador(contador + 1);
    }

    return (
        <>
            <p>O contador foi clicado {contador} vezes.</p>
            <button onClick={incrementarContador}>Clicar</button>
        </>
    )
}

export default Contador;