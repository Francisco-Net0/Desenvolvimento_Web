import './usuarioinfo.css'

function UsuarioInfo(props) {
    return (
        <div className="usuario">
            <p><strong>Nome:</strong> {props.usuario.nome}</p>
            <p><strong>Email:</strong> {props.usuario.email}</p>
        </div>
    )
}

export default UsuarioInfo;