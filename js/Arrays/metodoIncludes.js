// Métodos includes e indexOf
// Se utilizan para BUSCAR dentro de un array
// includes - retorna un boolean, dependiendo si encuentra el valor o no
// indexOf - retorna la posición del índice si lo encuentra, si no existe, retorna -1

const names = ['John', 'Michael', 'Richard', 'Robert', 'Anna', 'Steven', 'Lucy'];

const names2 = ['John', 'Michael', 'Richard', 'Robert', 'Anna', 'Steven', 'Lucy'];

// includes recorre el array, si encuentra la coincidencia retorna true
console.log (names.includes('Anna'));

// Es posible controlar a partir de qué posición comenzar a buscar
console.log (names.includes('Anna') && names2.includes('Anna'));

// indexOf recorre el array, si encuentra la coincidencia retorna la posición del mismo, si no lo encuentra, retorna -1

console.log (names.indexOf('Anna'));

// Al igual que includes, en indexOf también es posible controlar a partir de qué posición comenzar a buscar

console.log (names.includes('Anna', 5));

// A diferencia de otros métodos, includes no recibe una arrow function, sino directamente el valor a buscar