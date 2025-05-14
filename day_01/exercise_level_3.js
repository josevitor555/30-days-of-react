// 3 - Exercício do dia 1, Nível 3.

// Array de países
import countries from "./countries.js";

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]; // Mediana seria [24, 24]

// 1 - Ordene o array e encontre a menor e maior idade
// let sortedArrayByAges = ages.sort((a, b) => a - b); -> Ordenado em ordem crescente
// let sortedArrayByAges = ages.sort((a, b) => b - a); -> Ordenado em ordem decrescente

// 1. Ordena as idades
let sortedArrayByAges = ages.sort((a, b) => a - b); // -> Ordenado em ordem crescente
console.log(sortedArrayByAges);

let minAge = ages[0];
let maxAge = ages[ages.length - 1];

console.log("Menor idade: ", minAge);
console.log("Maior idade: ", maxAge);

// 2 - Encontre a mediana das idades (um item do meio ou dois do meio divididos por dois)

// 2. Calcula o índice do meio
const middleIndex = Math.floor(sortedArrayByAges.length / 2);

// 3. Verifica se o array tem quantidade PAR ou ÍMPAR de elementos
let median;

if (sortedArrayByAges.length %2 === 0) {
    // se for par, pega os dois do meio e faz a média
    // Array ordenado: [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
    // sortedArrayByAges[middleIndex - 1] seria 24
    // sortedArrayByAges[middleIndex] seria 24 tambem
    median = (sortedArrayByAges[middleIndex - 1] + sortedArrayByAges[middleIndex]) / 2;
} else {
    // se for ímpar, pega o elemento central
    median = sortedArrayByAges[indexMiddle];
}

// Mediana
console.log("Mediana: ", median);

// 3 - Encontre a média das idades (soma total ÷ quantidade)

// Usando Reduce - O método reduce em JavaScript é usado para iterar sobre um array e reduzir seus elementos a um único valor.
let sum = sortedArrayByAges.reduce((acc, curr) => acc + curr, 0);
let avg = sum / sortedArrayByAges.length;
console.log("Média: ", avg);

// Variação (range = max - min)
let range = maxAge - minAge;
console.log("Variação (range):", range);

// Diferença entre min/avg e max/avg (valor absoluto)
const minDiff = Math.abs(minAge - avg);
const maxDiff = Math.abs(maxAge - avg);
console.log("Diferença de min - média:", minDiff);
console.log("Diferença de max - média:", maxDiff);


// 4 - Array de Países
// Use .slice() para pegar os 10 primeiros países do array countries

let sliceTheArrayCountries = countries.slice(1, 11);
console.log(sliceTheArrayCountries);

// Encontre o país (ou países) que estão no meio do array
let totalCountries = countries.length;
let isEven = totalCountries %2 === 0;

console.log(`A quantidade de países é ${totalCountries}.`);
console.log(`A quantidade de países é ${isEven ? 'par' : 'ímpar'}.`);

let halfArrayCountries = Math.floor(countries.length / 2);
let middleCountry = countries[halfArrayCountries];
console.log("País do meio:", middleCountry);

// Divida o array de países em dois arrays iguais.
// Se o número de países for ímpar, o primeiro array fica com 1 a mais.
// Usando método Math.ceil -> Em JavaScript, Math.ceil() é uma função que retorna o menor inteiro maior ou
// igual ao número fornecido como argumento. Basicamente, ela 'arredonda para cima' o número para o inteiro mais próximo.

// Math.ceil -> Arredonda para cima. Ex: Math.ceil(3.4) = 4
// Math.floor -> Arredonada para baixo. Ex: Math.floor(3.4) = 3

let middle = Math.ceil(countries.length / 2);

let firstHalf = countries.slice(0, middle); // Pega do início até o meio (não inclui o índice middle).
let secondHalf = countries.slice(middle); // pega do middle até o fim.

console.log("Primeira metade:", firstHalf);
console.log("Segunda metade:", secondHalf);

// 97 (Primeira metada) + 96 (Segunda metade) = 193 :D

// Se o array countries tiver um número par de elementos, divida-o em duas partes iguais.
// Se tiver um número ímpar, a primeira parte deve ter uma quantidade a mais de elementos do que a segunda.

const divideArrayInTwoEqualHalf = (array) => {
    let middle = Math.ceil(array.length / 2); // Arredonda pra cima se for ímpar
    let firstHalf = array.slice(0, middle);
    let secondHalf = array.slice(middle);

    return [firstHalf, secondHalf];
};

const [firstMiddle, secondMiddle] = divideArrayInTwoEqualHalf(countries);

console.log("Primeira parte: ", firstMiddle);
console.log("Segunda parte: ", secondMiddle);

// Math.ceil(array.length / 2) resolve tudo: se for ímpar, a primeira metade ganha um a mais.
// slice(0, meio) e slice(meio) dividem o array bonitinho.

// console.log("Arredondando 193 para cima: ", Math.ceil(193));