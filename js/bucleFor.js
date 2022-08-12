/*
SINTAXIS
Bucle for. Determinado

for (inicio; condición; incremento); {
    // lo que necesito que se repita
}
*/

// Ejemplos

for (let i = 0; i < 10; i+= 2) {
  console.log ('Hello world ' + i)
}

for (let i = 5; i <= 10; i+= 2) {
  console.log ('Hola ' + i)
}

// Bucle infinito. Que la condición nunca se corte. Por ejemplo usar un comparador === en lugar de > o <
//Ejemplo:
// for (let i = 3; i === 10; i++) {
//   console.log ('Hola ' + i)
// }

// A tener en cuenta: El número de inicio puede ser cualquiera. La condición de comparación > o <. Al final puede ser tanto incremento i++ como decremento i--
for (let j = 5; j > 0; j--) {
  console.log ('decremento ' + j);
}

// Recorrer un array con el bucle for

const misAlumnos = ['Juan', 'Pedro', 'Luis', 'Sofia', 'Julian', 'Cristian', 'Ana']

for (let i = 0; i < misAlumnos.length; i++) {
    console.log (misAlumnos[i]);
    let alumnos = misAlumnos[i];
}
// Con length contamos cuantas posiciones tiene el array y con misAlumnos[i] nos devuelve los valores.

// O también lo podemos meter dentro de una variable.
for (let i = 0; i < misAlumnos.length; i++) {
  let alumnos = misAlumnos[i];
  console.log (alumnos);
}

// Recorrer con for un objeto dentro de un array
const misAlumnos2 = [
  {
    nombre: 'Juan',
    apellido: 'Perez',
    nota: 9.8
  },
  {
    nombre: 'Ana',
    apellido: 'Lopez',
    nota: 8.3

  },
  {
    nombre: 'Martin',
    apellido: 'Rodriguez',
    nota: 7.5
  }
];

// De esta manera accede al objeto completo:
for (let i = 0; i < misAlumnos2.length; i++) {
  let alumnos = misAlumnos2[i];
  console.log (alumnos);
}

// O también podemos acceder al valor dentro de la propiedad del objeto
for (let i = 0; i < misAlumnos2.length; i++) {
  let alumnos = misAlumnos2[i].nombre;
  console.log (alumnos);
}

// Si queremos recuperar el valor de cada objeto juntos:
for (let i = 0; i < misAlumnos2.length; i++) {
  let nombreApellido = misAlumnos2[i];
  console.log (`${nombreApellido.nombre} ${nombreApellido.apellido}`);
}

// Sacar el promedio de notas de los alumnos:
// inicializar una variable:

let promedio = 0;

for (let i = 0; i < misAlumnos2.length; i++) {
  let nombreApellido = misAlumnos2[i];
  promedio += nombreApellido.nota;
}
console.log (promedio/misAlumnos2.length);

// Bucle for anidado
const miArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

for (let x = 0; x < miArray.length; x++){
    let fila = miArray[x];
    console.log (fila);
    for (let y = 0; y < fila.length; y++) {
      console.log (fila[y]);
    }
}
// El primer for recupera cada posición del array. El segundo for recupera las posiciones dentro de cada array u objeto que se encuentran dentro del array principal.

// Romper el bucle con break
for (let i = 0; i <= 10 ; i++) {
  console.log (i);
  if (i === 3) break;
}
// A pesar que está declarado hasta 10, el bucle corta en 3 por el break

// continue. Es una palabra reservada que nos permite saltar el ciclo.
for (let i = 0; i <= 10 ; i++) {
  if (i%2 === 0) continue;
  console.log (i);
}
// salta el bucle en los números pares por continue


// For of. Nuevo en Javascript. Sirve para recorrer objetos iterables como cadenas de texto o arrays. Ejemplo:
let cadena = 'Hola mundo'
let miArray2 =  ['cat', 'dog', 'bird', 'spider', 'turtle']

// For of en un array
for (let elemento of miArray2) {
  console.log (elemento)
}
// For of en una cadena
for (let elemento of cadena) {
  console.log (elemento)
}

// For of en un array anidado
const miArray3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

for (const fila of miArray3) {
  let suma = 0;
  for (let numero of fila) {
    suma += numero;
  }
  console.log (suma);
}

// La limitación de for of es que opera sobre todo el array y no sobre algún elemento puntual

// En principio un objeto al no ser iterable no puede ser recorrido por for of
const client003 = {
  name: 'John',
  lastName: 'Smith',
  age: 45,
  address: '14th street',
  location: 'Boston'
}

// Pero gracias al elemento Object y sus keys (indices) o values (valores) podemos recorrer un objeto con for of 
for (let element of Object.keys(client003)) {
  console.log (`${element}: ${client003[element]}`)
}
// Gracias a las keys, los elementos del objeto se transforman en un array.

// sumar valores recorriendo el objeto con for of

const ticket003 = {
  sugar: 65,
  salt: 29,
  coffee: 18,
  oil: 48,
  pepper: 56
};

const values = Object.values(ticket003)

total = 0;
for (let parcial of values) {
  total = total + parcial;
}
console.log (total);

// for in. Está pensado para trabajar con objetos, acceder a las keys.

// Solo con declarar for in, recorre las llaves (keys) de un objeto. 

for (const key in ticket003) {
  console.log (key)
}

// Acceder a los valores
for (const key in ticket003) {
  console.log (ticket003[key])
}