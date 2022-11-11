// Método every. Determina si todos los elementos en el array satisfacen una condición, retorna un boolean.

const ages = [3, 6, 12, 19, 5, 9];
const younger = (age) => age <= 18;

let result = (ages.every(younger));

console.log (result);

// Otra forma

let a = [20, 55, 19, 33, 34, 24].every (valor => valor >= 18);
console.log (a);


const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];


const youngers = team.every(team => team.age <= 18)

console.log(youngers);