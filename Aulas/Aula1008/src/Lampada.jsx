import { useState } from "react";
import LightOn from './assets/LightOn.png';
import LightOff from './assets/LightOff.png';

function Lampada() {
    const [lampada, setLampada] = useState(false);
    
    function switchLampada() {
        setLampada(!lampada);
    }
    
    return (
        <>
            <img src={lampada ? LightOn : LightOff} />  
            <br />
            <button onClick={switchLampada}>{lampada ? "Apagar" : "Acender"}</button> 
        </>
    )
}

export default Lampada;