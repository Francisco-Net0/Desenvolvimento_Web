// Objeto
let pessoa = { nome: "Neymar", idade: 34 }
console.log("Objeto do array é:", pessoa);

console.log("------------------------------------");
// Array de objetos
let produtos = [
    { nome: "Notebook", valor: 3400, marca: "Dell" },
    { nome: "Mouse", valor: 100, marca: "Logitech" },
    { nome: "Teclado", valor: 220, marca: "Redragon" }
];
console.log("Produtos do array:", produtos);

console.log("------------------------------------");

// Percorrendo o array de objetos
for (let i = 0; i < produtos.length; i++) {
    console.log(`Produto ${i}: Nome = ${produtos[i].nome} | Valor = R$${produtos[i].valor} |Marca = ${produtos[i].marca}`);
}

console.log("------------------------------------");

// Adicionando objetos no final
produtos.push({
    nome: "Monitor",
    valor: 850,
    marca: "Samsung"
});
produtos.push({
    nome: "Fone",
    valor: 280,
    marca: "Redragon"
});
console.log("Array adicionando produtos:", produtos);

console.log("------------------------------------");

// Removendo o último objeto
produtos.pop();
console.log("Array removendo o último produto:", produtos);

console.log("------------------------------------");

// unshift adiciona no início
produtos.unshift({
    nome: "Webcam",
    valor: 180,
    marca: "Logitech"
});
console.log("Array com unshift:", produtos);

console.log("------------------------------------");

// shift remove o primeiro objeto
produtos.shift();
console.log("Array com shift:", produtos);

console.log("------------------------------------");

// splice remove objeto pelo índice
console.log("Removendo o produto do índice 1");
produtos.splice(1, 1);
console.log("Array após splice:", produtos);

/* */

// Array de alunos
let alunos = [
    {nome: "Carlos", idade: 20},
    {nome: "Ana", idade: 22}
];
console.log("Array de alunos:", alunos);

console.log("------------------------------------");

// Adicionando nova propriedade
alunos[0].curso = "Informática";
console.log(alunos);

console.log("------------------------------------");

// Alterando valor da propriedade
alunos[1].idade = 23;
console.log(alunos);

console.log("------------------------------------");

// Remove uma propriedade
alunos[0].cidade = "São Paulo";
delete alunos[0].cidade;
console.log(alunos);

console.log("------------------------------------");