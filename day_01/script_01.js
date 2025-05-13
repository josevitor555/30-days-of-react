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

console.log(arr)

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

// Usando o método fill
// Esse método preencha os valores padrões
const usingFillArray = Array(8);
 