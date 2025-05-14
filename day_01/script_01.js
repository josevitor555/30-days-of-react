// Tipos de Dados do JavaScript - Day 1

//  Tipos Primitivos

// Tipo String
const name = "José Vitor";
console.log(name);

// Tipos numéricos Number
const PI = 3.14;
console.log(PI);

// BigInt
const numbers = 1234567890123456789012345678901234567890n;
console.log(numbers);

// Tipos booleanos (True or False)
const isOn = true;
if (isOn) {
    console.log("Is on"); // Está Ligado
} else {
    console.log("Is off"); // Está desligado
}

// Undefined - Valor padrão de variáveis não inicializadas
// const x;
// consol.log(x);

// Representa intencionalmente "nenhum valor".
const nullObject = null;
console.log(nullObject);

const numberVar = 120;
const nullVar = null;

const result = numberVar + nullVar;

console.log(result); // 120

// Symboy - Identificadores únicos e imutáveis, úteis como chaves de propriedades de objetos.
const id = Symbol("id");
console.log(typeof id);

// Tipos Não Primitivos
// const arr = Array();

// ou arr = new Array();
// console.log(typeof arr);

// Criando arrays com valores

const userMusicCollection = ["Imagine Dragons", "Cold Play", "Nirvana"];
console.log(userMusicCollection);

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries
console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// Arrays podem conter diferentes tipos de valores
const arr = [
  'Jose Vitor',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
] // arr containing different data types

console.log(arr);

// Usando o método split para criar arrays
// O método split() é usado para dividir uma string em substrings, resultando em um array.
// Além disso, os elementos resultantes podem ser transformados, como converter strings numéricas para números, usando métodos como map().

// Dividindo uma string em caracteres
const js = "javascript is cool";
const charInJavaScript = js.split("");
console.log(charInJavaScript);

// Dividindo uma frase em palavras
const frase = "JavaScript é muité massa";
const palavras = frase.split(" ")
console.log(palavras);

// Usando o limite
const texto = "maça,banana,laranja";
const frutas = texto.split(",", 2);
console.log(frutas);

// Como o split() retorna a string original se o separador não for encontrado?
const welcomeText = "Hello! World.";
const resultArr = welcomeText.split(",");
console.log(resultArr);

// Acessando o Araay por meio de Index
const myFruits = ["banana", "orange", "mango", "lemon"];

// Acessando o primeiro índice
var fruit = myFruits[0];
console.log(fruit);

// Acessando o segundo índice
var fruit = myFruits[1];
console.log(fruit);

// Acessando o terceiro índice
var fruit = myFruits[2];
console.log(fruit);

// Acessando o terceiro índice
var fruit = myFruits[3];
console.log(fruit);

// Retornando Undefined
var fruit = myFruits[4];
console.log(fruit);

const someNumbers = [0, 3.14, 9.81, 37, 98.6, 100] // set of numbers
console.log(someNumbers);
console.log(someNumbers.length);
console.log(someNumbers[0]);
console.log(someNumbers[1]);

// Retornando o ultimo indice
const lastIndex = someNumbers.length - 1; // n - 1 (Inclua o zero)
console.log(lastIndex);

// Elemento:        0     3.14   9.81   37   98.6   100
// Índice:          0      1      2     3     4      5

// Isso porque tem 6 elementos. Mas como os índices começam em 0, o último índice é 5, não 6.

// Modificando um elemento array
// Um array é mutável (alterável). Após sua criação, podemos modificar o conteúdo dos seus elementos.
const somePeoples = ["Jose", "Ester", "Maria", "Joao", "Diego", "Maykow"]; // Maykow
const lastPeople = someNumbers.length - 1;
console.log(lastPeople);

console.log("Elemento Array antes da mudança: ");
console.log(somePeoples);

// Modificando o primeiro indice
console.log("Elemento Array após a mudança: ");
somePeoples[0] = "Cibele";
console.log(somePeoples);

// Alterando o ultimo elemento
console.log("Alterando o último elemento: ")
somePeoples[lastPeople] = "Ryan";
console.log(somePeoples);

// Esturura de dados array mantendo uma lista de objetos
const someObjects = [
  {nome: "José Vitor", idade: 21},
  {altura: 1.72, peso: 72},
  {namorando: false, solteiro: true}
];

// Alterando o valor de uma proprieade de um objeto dentro
// de um array:

// Alterando a propriedade 'idade' do primeiro objeto
someObjects[0].idade = 25;

// Alterando a propriedade 'peso' do segundo objeto
someObjects[1].peso = 75;

// Alterando a propriedade 'namorando' do terceiro objeto
someObjects[2].namorando = true;

// Alterando a propriedade 'nome' do primeiro objeto
someObjects[0].nome = "Sousa Feitosa";

// Array depois das proprieades serem alteradas
console.log(someObjects);

// Manipulando elementos no Array por meios de métodos

const myArray = Array();
console.log(myArray);

// Array de 8 elementos
const eightEmptyValues = Array(8);
console.log(eightEmptyValues); // [vazio x 8]

// 1 - Usando o método fill
// Esse método preencha os valores dos índices como padrões
const usingFillArray = Array(8);

// Criando elementos com valor padrão. Ex: undefined
const eightUndefinedvalues = Array(8).fill(undefined);
console.log(eightUndefinedvalues.length);

// Criando elementos com valores padrões, por exemplo. Preenchendo com string.
const eightXvalues = Array(8).fill("José Vitor");
console.log(eightXvalues);

// 2 - Usando o método contact
//  Junta dois ou mais Array.
const firstList = [1, 2, 3, 4, 5]; // Primeira lista
const secondList = [6, 7, 8, 9, 10]; // Segunda lista
const thirdList = firstList.concat(secondList); // Terceira Lista (Junção das duas)
console.log(thirdList);

// 3 - Index of - Encontra o índice de um elemento.
// Verifica se o elemento existe no array. Caso contrário, retorna o indice -1.
const myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers.indexOf(5)); // Retorna 4
console.log(myNumbers.indexOf(4)); // Retorna 3
console.log(myNumbers.indexOf(6)); // Retorna -1, nao existe esse elemento

// Verifique se os elementos existem no Array
const fruits = ['banana', 'orange', 'mango', 'lemon'];
var index = fruits.indexOf("lemon");

// index != -1 diz: Se esitver na lista
if (index != - 1) {
  console.log('This fruit does exist in the array');
} else {
  console.log('This fruit does not exist in the array');
}

// Podemos usar operadores ternários
index != -1 ? console.log('This fruit does exist in the array') : console.log('This fruit does not exist in the array');

// 4 - lastIndexOf: Encontra o último índice de um elemento.
const theNumbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(theNumbers.lastIndexOf(2)) // Indice: 7
console.log(theNumbers.lastIndexOf(1)) // Indice: 6
console.log(theNumbers.lastIndexOf(3)) // Indice: 5
console.log(theNumbers.lastIndexOf(4)) // Indice: 3

// 5 - Includes - Verifica se o array contém um elemento.
const numbersIncludes = [1, 2, 3, 4, 5];
console.log(numbersIncludes.includes(4)); // true
console.log(numbersIncludes.includes(2)); // true
console.log(numbersIncludes.includes(1)); // true
console.log(numbersIncludes.includes(0)); // false

// 6 - isArray - Verifica se um valor é um array.
const isArray = [1, true, "banana", 4, 5];
console.log(Array.isArray(isArray)) // true

const number100 = 100;
console.log(Array.isArray(number100)); // false

// 7 - toString - Convertendo array em string
const numbersToString = [1, 2, 3, 4, 5];
console.log(numbersToString.toString()) // 1,2,3,4,5

const names = ['Jose', 'Vitor', 'JavaScript', 'Oloko'];
console.log(typeof names.toString()); // Jose,Vitor,JavaScript,Brook

// 8 - join: Une elementos em uma string, separados por um caractere.
// join: É usado para transformar os elementos de um array em uma única string.
// O valor passado como argumento no método será utilizado para unir os elementos do array.
// Por padrão, ele usa uma vírgula para separar, mas você pode passar outra string para separar os
// itens, como um espaço, traço, etc.

const namesToHoin = ["José", "Vitor", "De", "Sousa", "Feitosa"];

console.log(namesToHoin.join()); // José,Vitor,De,Sousa,Feitosa
console.log(namesToHoin.join('')); // JoséVitorDeSousaFeitosa
console.log(namesToHoin.join(' ')); // José Vitor De Sousa Feitosa
console.log(namesToHoin.join(', ')); // José, Vitor, De, Sousa, Feitosa
console.log(namesToHoin.join(' # ')); // José # Vitor # De # Sousa # Feitosa

// 9 - slice: Retorna uma cópia de uma parte do Array.
// Slice: É uma operação para cortar vários itens de uma lista (ou outra sequência) entre duas posições.
// Ela usa dois parâmetros: a posição inicial e a posição final. Contudo, o item na posição final
// não é incluído.

const sliceNumbers = [1, 2, 3, 4, 5];
console.log(sliceNumbers.slice());
console.log(sliceNumbers.slice(0));
console.log(sliceNumbers.slice(0, sliceNumbers.length));
console.log(sliceNumbers.slice(1, 4));

// 10 - splice: Remove ou adiciona elementos em qualquer posição do array.
var spliceNumbers = [1, 2, 3, 4, 5];

// Splice: É um método que modifica uma lista. Ele usa três parâmetros:

// Posição inicial: onde começa a alteração
// Número de itens a remover: quantos itens serão apagados a partir dessa posição
// Número de itens a adicionar: quantos itens serão inseridos no lugar dos removidos
// Ele remove e adiciona itens na lista, tudo de uma vez.

console.log(spliceNumbers.splice());

var spliceNumbers = [1, 2, 3, 4, 5]
console.log(sliceNumbers.splice(0, 1));

var spliceNumbers = [1, 2, 3, 4, 5, 6]
console.log(spliceNumbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9]

// 11 - push: Adiciona um elemento ao final do array. Irmão do Unshift.
const pushNewItem =["it1m1", "item2", "item3"];
pushNewItem.push("New item");

console.log(pushNewItem);

// 12 - pop: Remove o último elemento do array. Irmão do Shift.
const popTheLastElement = ["item1", "item2", "item3"];
popTheLastElement.pop();

console.log(popTheLastElement);

// 13 - Shift: Remove o primeiro elemento do array.
const shiftElement = [1, 2, 3, 4, 5];
console.log(shiftElement);

shiftElement.shift();

console.log(shiftElement);

// Unshift - Adiciona elementos no início do array.
const unShiftElement = [1, 2, 3, 4, 5];
console.log(unShiftElement);

unShiftElement.unshift(0);

console.log(unShiftElement);

// 14 - Reverse: Ordenar o array de forma inversa.
const normalPositionNumbers = [1, 2, 3, 4, 5];
console.log(normalPositionNumbers);

normalPositionNumbers.reverse();

console.log(normalPositionNumbers);

// 15 - Sort: Ordena os elementos de um array em ordem crescente.
// Ele usa uma função de retorno (callback) para decidir a ordem.

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

console.log(webTechs);

webTechs.sort(); // Ordenando as string em ordem crescente de A-Z
console.log(webTechs);

webTechs.reverse();
console.log(webTechs);

// 16 - Array de Array: Um array pode armazenar diferentes tipos de dados, incluindo outro array. Vamos criar um array de arrays.

const firstNumberCollection = [1, 2, 3, 4, 5];
const secondNumberCollection = [6, 7, 8, 9, 10];

const arrayOfArray = [
  [1, 2, 3, 4, 5], // [0]
  [6, 7, 8, 9, 10], // [1]
];

console.log(arrayOfArray[0]);
