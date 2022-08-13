/* SPREAD
Crea un nuevo array usando elementos de otros arrays existentes

Lo único que debemos hacer es agregar tres puntos (...) antes de la variable o constante. 
*/

const nombres = ['Luciana', 'Carolina', 'Marta', 'Isabel', 'Josefina'];
const apellidos = ['Lopez', 'Suarez', 'Martinez', 'Miguens'];
const apodos = ['Luli', 'isa', 'Martica'];

const arrayConSpread = [...nombres, ...apellidos];

console.log (arrayConSpread);

// Spread también nos puede servir para copiar un array en una nueva variable

const copiaApodos = [...apodos];
console.log (copiaApodos);
// Se guarda en una nueva posición de la memoria

// Spread también podría reemplazar a split

// Separamos los caracteres con split
let cadena = 'Ezequiel';
const caracteres = cadena.split ('');
console.log (caracteres);

// Con spread tiene el mismo resultado cuando lo metemos dentro de un array
let cadena2 = 'Ezequiel';
const caracteres2 = [...cadena];
console.log (caracteres);


// Spread con objetos. Crear un nuevo objeto basado en elementos de un objeto anterior

const cliente01 = {
  nombre: 'Marcos',
  apellido: 'Castelli',
  array: ['Elementos', 'dentro', 'del', 'array']
}

const cliente02 = {
  nombre: 'Juan',
  apellido: 'Perez'
}

const objetoSpread = {
  ...cliente02, // Esta declaración trae todos los elementos del objeto
    dni: 35692000
}
console.log (objetoSpread);

// La limitación es que no podríamos agregar otro objeto con los mismos valores porque se sobreescriben los del primero.

// Otro uso podría ser obtener un array dentro de un objeto y convertirlo en un array nuevo por fuera del mismo.

arrayFueraDelObjeto = [...cliente01.array];

console.log (arrayFueraDelObjeto);
// Tenemos un array con los elementos que estaban dentro del objeto, pero ahora fuera y en una posición de memoria nueva.


// Otro uso. Si queremos analizar datos dentro de un array, spread también sirve

console.log (Math.min(...[10, 5, 9, 7, 20]));
// Esto es posible porque el spread deconstruye el array y analiza cada dato por separado con el Math.min
