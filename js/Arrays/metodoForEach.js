// Método forEach. Mostrar o traer el elemento o su índice.

const names = [
  "John",
  "Michael",
  "Richard",
  "Robert",
  "Anna",
  "Steven",
  "Lucy",
];

function returnValues(value, position) {
  console.log(`El nombre ${value} está en la posición ${position}`);
}

names.forEach(returnValues);

// Recorrer un foreach como si fuera un ciclo for
names.forEach((item) => console.log(item));

const arrayNum = [2, 4, 5, 6];

function solution(array) {
 return array.map(item => item * 2)
}; 

console.log(solution(arrayNum))

