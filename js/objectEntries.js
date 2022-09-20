/*
 * Entries transforma el objeto en un arreglo por cada llave, valor
 */

const countries = {
  MX: 'Mexico',
  CO: 'Colombia',
  CL: 'Chile',
  AR: 'Argentina'
}

const entriesCountries = Object.entries(countries);
console.log(entriesCountries);
 // Para obtener la cantidad de elementos
 console.log(entriesCountries.length)

/*
 * fromEntries se incorpora en ECMAS10. transforma varios arreglos en un objeto
 */

const entries = new Map ([["name", "Ezequiel"], ["age", 34]]);

console.log(entries);
console.log(Object.fromEntries(entries))