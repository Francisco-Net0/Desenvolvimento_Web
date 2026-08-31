import { useState } from 'react'

function FormUser() {
    const [user, setUser] = useState({nome: "", email: ""});
    const [listUsers, setListUsers] = useState([]);

    function handleField(field) {
        /*
            ...user faz com que seja mesclado o novo valor do
        objeto com o(s) valor(es) já existente(s)
        */
        setUser({
            ...user,
            [field.target.name] : field.target.value
        });
    }

    function addUser() {
        //add "user" dentro do array "listUsers"
        setListUsers([
            ...listUsers,
            user
        ]);
        //resetar o objeto "user"
        setUser({nome: "", email: ""});
    }

    return(
        <>
            <p>Nome: 
            <input 
            type='text' 
            name='nome'
            onChange={handleField}
            value={user.nome}>
            </input></p>
            <p>Email: 
            <input 
            type='text' 
            name='email'
            onChange={handleField}
            value={user.email}>
            </input></p>
            <p><button onClick={addUser}>Adicionar</button></p>
            <table border="1">
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
                {listUsers.map( (u, key) => 
                    <tr key={key}>
                        <td>{u.nome}</td>
                        <td>{u.email}</td>
                    </tr>
                )}
            </table>
        </>
    )
}

export default FormUser;