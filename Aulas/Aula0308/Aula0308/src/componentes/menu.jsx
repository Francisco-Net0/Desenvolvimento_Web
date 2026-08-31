function Menu() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" id="titulo_nav">Aula 03/08</a>
            <ul className="navbar-nav flex-row ms-auto">
                <li className="nav-item active">
                    <a className="nav-link navbar-brand" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link navbar-brand" href="produtos.html">Sobre</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link navbar-brand" href="contato.html">Contato</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
