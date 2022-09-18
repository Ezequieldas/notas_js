/*
 * Entries transforma el objeto en un arreglo por cada llave, valor
 */

const countries = {
  MX: 'Mexico',
  CO: 'Colombia',
  CL: 'Chile',
  AR: 'Argentina'
}

console.log(Object.entries(countries));

/*
 * fromEntries se incorpora en ECMAS10. transforma arreglos en objetos
 */

const entries = new Map ([["name", "Ezequiel"], ["age", 34]]);

console.log(entries);
console.log(Object.fromEntries(entries))