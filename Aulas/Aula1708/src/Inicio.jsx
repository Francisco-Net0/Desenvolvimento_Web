import { NavLink } from "react-router-dom";

function Inicio() {
    return (
        <>
            <section className="hero">
                <h1>Crie experiências <span>digitais modernas</span>.</h1>
                <p className="lead-text">
                    Este é um template minimalista desenvolvido puramente em HTML e CSS, otimizado para o modo escuro com
                    transições suaves e layout responsivo.
                </p>
                <div className="cta-group">
                    <a href="sobre.html" className="btn btn-primary">Saiba Mais</a>
                    <a href="contato.html" className="btn btn-secondary">Entrar em Contato</a>
                </div>
            </section>
            <section className="grid">
                <div className="card">
                    <h3>Design Minimalista</h3>
                    <p>Interfaces limpas, tipografia moderna e foco total no conteúdo para proporcionar a melhor
                        usabilidade. <NavLink to={"news/design-minimalista"}>Leia mais</NavLink></p>
                </div>
                <div className="card">
                    <h3>Modo Escuro Nativo</h3>
                    <p>Paleta de cores sofisticada e balanceada que reduz a fadiga visual e economiza energia em telas OLED. <NavLink to={"news/modo-escuro-nativo"}>Leia mais</NavLink></p>
                </div>
                <div className="card">
                    <h3>Responsividade</h3>
                    <p>Adaptado perfeitamente para qualquer tamanho de tela, de celulares ultracompactos a monitores
                        ultrawide. <NavLink to={"news/responsividade"}>Leia mais</NavLink></p>
                </div>
            </section>
        </>
    )
}

export default Inicio;