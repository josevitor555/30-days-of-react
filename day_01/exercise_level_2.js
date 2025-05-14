
// 2 - Exercício do dia 1, Nível 1.

// 1 - Transformar a string em aray usando slice
let text = 'Eu amo programar com JavaScript.';
var toArray = text.split(" ");
console.log(toArray);
console.log("Quantidade de palavras: ", toArray.length);

// 2 - Dado o array abaixo
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);

// Seguindo as operações abaixo:
// Adicione 'Meat' no início do array, se ainda não estiver lá.

let addFirtElement = shoppingCart.unshift("Meat");
console.log(addFirtElement);

console.log(shoppingCart);

// Adicione 'Sugar' no final do array, se ainda não estiver lá.

let addEndElement = shoppingCart.push("Sugar");
console.log(addEndElement);

console.log(shoppingCart);

// Remova 'Honey' se você for alérgico(a).

const index = shoppingCart.indexOf('Honey');
if (index !== -1) {
  shoppingCart.splice(index, 1); // remove 1 item na posição do 'Honey'
}

console.log("Sem o elemento Honey: ", shoppingCart); // ['Milk', 'Coffee', 'Tea']

// Modifique 'Tea' para 'Green Tea'.

shoppingCart.map((index) => {
    if (index !== -1) {
        shoppingCart[index] = "Green Tea"
    }
});

console.log("Substituindo Tea pelo Green Tea: ", shoppingCart);