function Inicio() {
    return (
        <section className="about-content">
            <h1>Nossa <span>Filosofia</span></h1>
            <p className="lead-text">
                Acreditamos que a simplicidade é o mais alto grau de sofisticação. Menos elementos geram menos
                distrações e mais performance.
            </p>

            <div className="about-text">
                <div>
                    <h2>Por que HTML + CSS puro?</h2>
                    <p className="text-muted">
                        Em um ecossistema web repleto de frameworks pesados e dependências complexas, retornar às
                        origens da web nos permite construir páginas incrivelmente rápidas, acessíveis e fáceis de
                        manter. Este template é livre de JavaScript desnecessário, garantindo carregamento instantâneo.
                    </p>
                </div>

                <div>
                    <h2>Tecnologias Utilizadas</h2>
                    <p className="text-muted">
                        Construído focando nos padrões modernos e melhores práticas de CSS sem frameworks de terceiros:
                    </p>
                    <ul>
                        <li><strong>CSS Grid & Flexbox:</strong> Layout flexível e totalmente adaptável.</li>
                        <li><strong>Variáveis CSS:</strong> Customização de cores e fontes centralizada.</li>
                        <li><strong>Filtros Backdrop:</strong> Efeito moderno de vidro fosco (glassmorphism) no
                            cabeçalho.</li>
                        <li><strong>Animações de entrada:</strong> Transições de opacidade suaves ao trocar de página.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Inicio;