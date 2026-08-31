function Lista(props) {
    return (
        <ul>
            {props.itens.map( (item, key) => (
                <li key={key}>{item}</li>
            ))}
        </ul>
    )
}

export default Lista;