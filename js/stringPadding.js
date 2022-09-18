/*
 * String padStart es una nueva herramienta de ECMAS8
 */

const string = 'Hello';

// Se ejecuta antes del string original
console.log(string.padStart(11, 'hi'));
// padStart aumenta el tamaño del string a más caracteres y con el segundo elemento que se pasa lo rellena

/*
 * padEnd se ejecuta al final del string original
 */
console.log(string.padEnd(11, 'hi'));
