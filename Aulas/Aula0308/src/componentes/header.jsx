function Hello() {
    return (
        <h1 id="titulo">Hello Header!</h1>
    );
}

function Header() {
    return (
        <div className="text-center p-3" id="header">
            <Hello/>
        </div>
    );
}

export default Header;
