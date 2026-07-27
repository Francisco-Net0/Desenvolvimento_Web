/*
Objetivo:
Criar uma página que permita cadastrar alunos e manipular os dados utilizando JavaScript.

Conteúdos abordados:
- let e const
- Funções
- Arrow Functions
- Arrays
- Objetos
- map()
- filter()
- forEach()
- DOM (querySelector)
- Eventos (click e submit)

==========================================
PARTE 1 - HTML
==========================================

Crie uma página contendo:

- Um título: "Cadastro de Alunos"
- Um formulário com:
    * Nome
    * Idade
    * Curso
    * Botão "Cadastrar"
- Um botão:
    * Mostrar Alunos
- Um botão:
    * Mostrar Apenas Maiores de 18
- Um botão:
    * Mostrar Apenas Nomes
- Um botão:
    * Contar Alunos
- Um botão:
    * Remover Último Aluno
- Uma div onde os resultados serão exibidos.

==========================================
PARTE 2 - ARRAY
==========================================

Crie um array vazio:
let alunos = [];

Cada aluno deve ser um objeto:
{
    nome: "João",
    idade: 20,
    curso: "ADS"
}

==========================================
PARTE 3 - EVENTO SUBMIT
==========================================

Ao enviar o formulário:
1. Impedir o recarregamento da página.
2. Capturar os valores usando querySelector().
3. Criar um objeto aluno.
4. Adicionar o objeto ao array.
5. Limpar os campos do formulário.

==========================================
PARTE 4 - MOSTRAR ALUNOS
==========================================

Quando clicar em "Mostrar Alunos":
1. Limpar a div de resultados.
2. Percorrer o array utilizando forEach().
3. Mostrar todos os alunos.

Exemplo:
João - 20 anos - ADS
Maria - 18 anos - SI
Carlos - 25 anos - Engenharia

==========================================
PARTE 5 - FILTER
==========================================

Quando clicar em:
"Mostrar Apenas Maiores de 18"

Utilize filter() para exibir somente os alunos
com idade maior ou igual a 18 anos.

==========================================
PARTE 6 - MAP
==========================================

Quando clicar em:
"Mostrar Apenas Nomes"
Utilize map() para criar um novo array contendo
apenas os nomes dos alunos.

Exemplo:
João
Maria
Carlos

==========================================
PARTE 7 - ARROW FUNCTIONS
==========================================

Sempre que possível, utilize Arrow Functions.
Exemplo:
const listarAlunos = () => {
};

==========================================
PARTE 8 - CONTAR ALUNOS
==========================================

Ao clicar no botão:
"Contar Alunos"
Mostre:
Quantidade de alunos: X

==========================================
PARTE 9 - REMOVER ÚLTIMO ALUNO
==========================================

Ao clicar em:
"Remover Último Aluno"
Utilize:
pop()

Depois atualize automaticamente a lista.

==========================================
PARTE 10 - DESAFIO EXTRA
==========================================

Adicione um campo de pesquisa.
Enquanto o usuário digita:
- filtre os alunos pelo nome;
- utilize o evento input;
- utilize filter();
- utilize includes().

Exemplo:
Pesquisa:
Ma

Resultado:
Maria
Marcos
Mateus

==========================================
OBJETIVO FINAL
==========================================

Ao concluir a atividade, sua aplicação deverá:

✔ Cadastrar alunos
✔ Armazenar objetos em um array
✔ Manipular o DOM com querySelector()
✔ Utilizar eventos click e submit
✔ Percorrer arrays com forEach()
✔ Filtrar dados com filter()
✔ Transformar dados com map()
✔ Utilizar funções tradicionais e Arrow Functions
*/