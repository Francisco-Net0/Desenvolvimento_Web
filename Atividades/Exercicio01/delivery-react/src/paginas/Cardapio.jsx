const produtos = [
  {
    id: 1,
    nome: "X-Burger",
    descricao: "Hambúrguer, queijo, alface, tomate e molho especial.",
    preco: 18,
    emoji: "🍔",
  },
  {
    id: 2,
    nome: "X-Salada",
    descricao: "Hambúrguer, queijo, salada e molho especial.",
    preco: 22,
    emoji: "🥬",
  },
  {
    id: 3,
    nome: "X-Bacon",
    descricao: "Hambúrguer, queijo, bacon e molho especial.",
    preco: 25,
    emoji: "🥓",
  },
  {
    id: 4,
    nome: "Batata Frita",
    descricao: "Porção de batata frita crocante.",
    preco: 12,
    emoji: "🍟",
  },
  {
    id: 5,
    nome: "Refrigerante",
    descricao: "Refrigerante gelado de 350 ml.",
    preco: 7,
    emoji: "🥤",
  },
  {
    id: 6,
    nome: "Milkshake",
    descricao: "Delicioso milkshake cremoso.",
    preco: 15,
    emoji: "🥤",
  },
];

function Cardapio() {
  return (
    <section>
      <div className="titulo-pagina">
        <h1>Nosso Cardápio 🍔</h1>
        <p>Escolha os seus produtos favoritos!</p>
      </div>

      <div className="grid-cardapio">
        {produtos.map((produto) => (
          <article className="card-produto" key={produto.id}>
            <div className="produto-emoji">
              {produto.emoji}
            </div>

            <h2>{produto.nome}</h2>

            <p>{produto.descricao}</p>

            <strong>
              R$ {produto.preco.toFixed(2).replace(".", ",")}
            </strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Cardapio;