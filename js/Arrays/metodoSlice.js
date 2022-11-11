/*

Método slice.

Podemos controlar en qué posición del índice queremos que comience el array y en qué posición queremos que termine

*/
let array = [2, 5, 8, 3, 1, 10, 15, 20, 3, 58, 4]
console.log (array.slice(5,9));

// Si utilizamos valores negativos podemos recortar de atrás hacia adelante
console.log (array.slice(1,-2));

// Si solo le pasamos un argumento de índice lo toma como punto de partida hasta el final
console.log (array.slice(4));

// No modifica el array original
console.log (array);

// Método slice. Crea un nuevo array tomando una porción del array que usamos o pasamos. Debemos indicar índice donde comenzar e índice dónde terminar de cortar +1.
// No modifica el original

console.log (names.slice(0,3));
console.log (names.slice(3,6));

//Con negativos es posible contar de atrás para adelante
console.log (names.slice(1,-2));