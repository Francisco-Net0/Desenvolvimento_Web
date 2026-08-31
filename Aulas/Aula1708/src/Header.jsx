import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="nav-container">
                <a href="index.html" className="logo">
                    <span>▲</span> Minimalist
                </a>
                <nav>
                    <ul className="menu">
                        <li className="menu-item">
                            <NavLink to="/">Inicio</NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/sobre">Sobre</NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/contato">Contato</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;