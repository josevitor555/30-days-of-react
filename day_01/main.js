import webTechs from "./webtechs.js";
import countries from "./countries.js";

// 4 - Verificando se Ethiopia existe.
countries.map((index) => {
    if (index.includes("Ethiopia")) {
        console.log("O pais Ethiopia existe: ", index.toUpperCase());
    }
});

console.log(countries);

// 5 - No array webTechs, verifique se 'Sass' existe.
if (webTechs.includes("Sass")) {
  console.log("Sass é um pré-processador CSS.");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

console.log(countries);

// 6 - Concatene os dois arrays abaixo e armazene em uma variável chamada fullStack.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);