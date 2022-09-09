/*
Symbol crea un identificador único
*/

let id = Symbol("id");
let id2 = Symbol("id2");

console.log (id === id2);

//Es un tipo de dato primitivo
console.log(typeof id);

// Dentro de paréntesis podemos referenciar symbol
const NAME = Symbol("Name");

const person = {
  [NAME]: "Ezequiel",
  age: 22
};

console.log (person);

person.NAME = "Eze"

console.log (person);

// Llamamos a symbol con notación de corchetes
console.log (person[NAME]);

const SALUTE = Symbol("Salute");

person[SALUTE] = function () {
  console.log ("Hello");
}

console.log (person);
person[SALUTE]();

// Si recorremos con un for...

for (const property in person) {
  console.log (property)
  console.log (person[property]);
}
// Podemos ver que las propiedades symbol se mantienen privadas, una de las características sobresalientes de symbol

// Podemos acceder a ellas mediante .getOwnPropertySymbols

console.log(Object.getOwnPropertySymbols(person));