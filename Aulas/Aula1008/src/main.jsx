import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import Hello from './Hello'
import UsuarioInfo from './UsuarioInfo'
import Lista from './Lista';
import Lampada from './Lampada';

const usuario1 = {
  nome : "George",
  email : "george@gmail.com"
};

const usuario2 = {
  nome : "Paul",
  email : "paul@gmail.com"
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioInfo usuario={usuario1} />
    <UsuarioInfo usuario={usuario2} />
    <Lista itens={["Abacate", "Laranja", "Maçã", "Uva"]} />
    <hr />
    <Lampada />
  </StrictMode>,
)
