// Array
let numeros = [5, 10, 20];
console.log(`Os numeros desse array são: ${numeros}`);

console.log("------------------------------------");

// Percorrendo o array
for (let i = 0; i < numeros.length; i++) {
    console.log(`O numero ${i} é: ${numeros[i]}`);
}

console.log("------------------------------------");

// Adicionando elementos no final
numeros.push(40);
numeros.push(80);
console.log(`Array adicionando numeros: ${numeros}`);

// Removendo o último elemento
numeros.pop();
console.log(`Array removendo o 80: ${numeros}`);

console.log("------------------------------------");

// unshift adiciona no inicio do array
numeros.unshift(2);
console.log("Array com unshift:", numeros);

// shift remove o primeiro elemento
numeros.shift();
console.log("Array com shift:", numeros);

console.log("------------------------------------");

let cores = ["Azul", "Verde", "Vermelho"];
console.log("Array cores:", cores);

console.log("------------------------------------");

// splice remove elemento a partir do índice
console.log("Array removendo o elemento 1")
cores.splice(1, 1); // elemento/quantidadeDeElementos
console.log("Array cores:", cores);