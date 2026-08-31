import { useParams } from "react-router-dom";

function News() {
    const { slug } = useParams(); //pega o parâmetro na URL

    const news = {
        "design-minimalista" : {
            titulo : "Design Minimalista",
            conteudo : "Interfaces limpas, tipografia moderna e foco total no conteúdo para proporcionar a melhor usabilidade."
        },
        "modo-escuro-nativo" : {
            titulo : "Modo Escuro Nativo",
            conteudo : "Paleta de cores sofisticada e balanceada que reduz a fadiga visual e economiza energia em telas OLED."
        },
        "responsividade" : {
            titulo : "Responsividade",
            conteudo : "Adaptado perfeitamente para qualquer tamanho de tela, de celulares ultracompactos a monitores ultrawide."
        }
    };

    const newsSelected = news[slug];

    return (
        <section className="about-content">
            <h1>{newsSelected.titulo}</h1>
            <p className="lead-text">{newsSelected.conteudo}</p>
        </section>
    )
}

export default News;