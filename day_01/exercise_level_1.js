// Exercícios do dia 1

// Do nível 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

// 1 - Declare um array vazio
var myArr = Array();

// 2 - Declare um array com mais de 5 elementos numéricos
var myArr = Array(10);
console.log(myArr);

// 3 - Encontre o tamanho do seu array
var myArr = Array(10);
console.log("Tamanho do array: ", myArr.length);

// 4 - Pegue o primeiro item, o item do meio e o último item do array;
var myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr[0]); // 1

// Indice do meio
var middle1 = myArr[myArr.length / 2 - 1]; // 3 (Indice 2)
var middle2 = myArr[myArr.length / 2]; // 4 (Indice 4)
console.log(middle1, middle2);

// Ultimo indice
console.log(myArr.length - 1); // 4

// 5 - Declare um array chamado mixedDataTypes, coloque tipos de dados diferentes nele e descubra o tamanho do array (deve ter mais de 5 elementos);
var mixedDataTypes = [
    true,
    false,
    "José",
    {name: "Jose", idade: 21},
    undefined,
    [1, 2, 3, 4, 5]
]; // object

console.log(mixedDataTypes.length);
console.log("Todos os elementos do mixedDataTypes: ")
mixedDataTypes.map((index) => {
    console.log(index);
});

// 6 - Declare uma variável chamada itCompanies e atribua os valores iniciais: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon;
var itCompanies = [
    "Facebook", // 0
    "Google", // 1
    "Microsoft", // 2
    "Apple", // 3
    "IBM", // 4
    "Oracle", // 5
    "Amazon" // 6
];

// 7 - Imprimindo o array
console.log(itCompanies);

// 8 - Imprimindo o número de empresas
console.log(itCompanies.length);

// 9 - Imprima a primeira, a do meio e a última empresa;
console.log(itCompanies[0]); // Facebook
var middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[middleIndex]); // Apple
console.log(itCompanies[6]); // Amazon

// Math.flor - Ele arredonda pra baixo o número — sempre pra o número inteiro menor ou igual ao valor original.
// var number = 2.9;
// console.log(Math.floor(number)); // 2 (Arredondou para baixo)

// 10 - Imprima cada empresa individualmente;
itCompanies.map((index) => {
    console.log(index);
});

// 11 - Altere o nome de cada empresa para letras maiúsculas uma por uma e imprima;
itCompanies.map((index) => {
    console.log(index.toLocaleLowerCase());
});

// 12 - Imprima o array como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI.
// Replace = A função "replace" (ou, dependendo do contexto, método replace) serve para substituir uma parte de uma string por outr
const frase = itCompanies.join(", ").replace(", Facebook", ", Google", ", Microsoft", ", Apple", ", IBM", ", Oracle", "e Amazon") + " são grandes empresas de TI.";

console.log(frase);

// 13 - Verifique se uma determinada empresa existe no array itCompanies. Se existir, retorne o nome da empresa. Caso contrário, retorne: “empresa não encontrada”;
if (itCompanies.includes("Facebook")) {
    console.log("Esta empresa existe.");
} else {
    console.log("Empresa não encontrada");
}

// 14 - Filtre as empresas que possuem mais de uma letra 'o' (sem usar o método filter);
const empresasComMaisdeUmO = [];

for (var name of itCompanies) {
    const qtdOs = name.toLowerCase().split("o").length - 1;
    if (qtdOs > 1) {
        empresasComMaisdeUmO.push(name);
    }
}

console.log(empresasComMaisdeUmO); // ["Google", "Microsoft"]

// 15 - Ordene o array usando o método sort();
console.log(itCompanies.sort()); // Ordene de A-Z

// 16 - Inverta a ordem do array com reverse();
console.log(itCompanies.reverse());

// 17 - Retire as 3 primeiras empresas do array usando slice();
itCompanies.splice(0, 3); // isso altera o array original

console.log(itCompanies); // ["Apple", "IBM", "Oracle", "Amazon"]

// 18 - Retire a(s) empresa(s) do meio do array com slice();
var indexMiddle = Math.floor(itCompanies.length / 2)
console.log(itCompanies.slice(indexMiddle, indexMiddle + 1));

// 19 - Remova a primeira empresa do array com shift() ou similar;
var removeFirstElement = itCompanies.shift();
console.log(removeFirstElement); // Obs: Remove o Google e nao o Facebook

// 20 - Remova a(s) empresa(s) do meio do array
var middleIndex = Math.floor(itCompanies.length / 2);

// Se for ímpar: remove 1 do meio
// Se for par: remove os dois do meio
if (itCompanies.length % 2 === 0) {
  itCompanies.splice(middleIndex - 1, 2); // remove 2
} else {
  itCompanies.splice(middleIndex, 1); // remove 1
}

console.log("Sem o(s) do meio:", itCompanies);

// 21 - Remova a última empresa com pop()
var removedLast = itCompanies.pop();
console.log("Última removida:", removedLast);
console.log("Atual:", itCompanies);

// 22 - Remova todas as empresas (zerar o array)
itCompanies.length = 0;
console.log("Zerado:", itCompanies); // []
