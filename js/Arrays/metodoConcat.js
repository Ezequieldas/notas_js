// Método concat. Unir dos arrays en uno solo

let numbers = [1, 2, 3, 4, 5];
let colors = ["green", "blue", "yellow"];

// En console.log los muestra como uno pero cada uno se mantiene original.
console.log(numbers.concat(colors));
console.log(numbers);
console.log(colors);

// Dentro de una variable generamos un nuevo array con la concatenación de los ambos.
let numbersColors = numbers.concat(colors);
console.log(numbersColors);

// Para concatenar más de dos arrays:
let cities = ["Paris", "Rome", "New York"];

let numbersColorsCities = cities.concat(numbers, colors);
console.log(numbersColorsCities);

// Concat es inmutable
