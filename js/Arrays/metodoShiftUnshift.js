/* 
Método unshift. Prototipo exclusivo de los arrays.
Agregar elementos al array desde el comienzo
*/

const fruits = ['Banana', 'Apple', 'Pineapple', 'Cherry']

fruits.unshift ('Avocado');
console.log (fruits);

// Método shift. Quita el primer elemento del array
fruits.shift ();
console.log (fruits);

// Si guardamos el método dentro de una variable también podemos ver lo que eliminó shift
let fruitsShift = fruits.shift ();
console.log (fruitsShift);
console.log (fruits);