/**
 * Object values nos va devolver un solo array con los valores del objeto (sin las llaves)
 */

const countries = {
  MX: 'Mexico',
  CO: 'Colombia',
  CL: 'Chile',
  AR: 'Argentina'
};

console.log(Object.values(countries))

// Normalmente lo guardamos dentro de una variable para poder trabajarlo
const values = Object.values(countries);
console.log(values);

// Para conocer la cantidad de valores dentro del objeto con length
console.log(values.length);

