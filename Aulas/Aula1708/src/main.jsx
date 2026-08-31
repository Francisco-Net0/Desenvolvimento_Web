import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//import './index.css'
//import App from './App.jsx'
//import Contador from './Contador.jsx'
//import FormUser from './FormUser.jsx'
import Header from './Header'
import Footer from './Footer'
import MainContainer from './MainContainer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <MainContainer />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
