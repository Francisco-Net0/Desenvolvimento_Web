import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Menu from './componentes/menu.jsx'
import Header from './componentes/header.jsx'
import Footer from './componentes/footer.jsx'
import Conteudo from './componentes/conteudo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu/>
    <Header/>
    <Conteudo/>
    <Footer/>
  </StrictMode>
)
