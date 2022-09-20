/*
 * String padStart y padEnd son nuevas herramientas incorporadas en ECMAS8
 */

const string = 'Hello';

// padStart aumenta el tamaño del string a más caracteres y con el segundo elemento que se pasa lo rellena

// Se ejecuta antes del string original
console.log(string.padStart(11, 'hi'));

// padEnd se ejecuta al final del string original

console.log(string.padEnd(11, 'hi'));
