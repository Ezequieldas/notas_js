/* Destructuring 
Asignar variables a posicones de un array creado
*/

// Destructuring en arrays
const cliente01 = ['Lucas', 'Martinez', 'Av Rivadavia 2020', 'Flores', '1530507080'];

const [nombre, apellido, calle, localidad, telefono] = cliente01

console.log (nombre);
console.log (apellido);
console.log (calle);
console.log (localidad);
console.log (telefono);
// Cada posición del array fue asignado a una variable

const cliente02 = ['Lucia', 'Martí', 'Av Segurola 1320', 'Floresta', '1560445207'];
// Si quisieramos saltar una posición del array dejamos una coma con espacio
const [nombre2, , calle2, localidad2, telefono2] = cliente02

console.log (nombre2);
// nos salteamos el apellido
console.log (calle2);
console.log (localidad2);
console.log (telefono2);


// Destructuring en objetos
const cliente03 = {
  nombre: 'Jorge',
  apellido: 'Ochoa',
  calle: 'Paseo Colon 1540',
  localidad: 'Centro',
  telefono: 1586902510
}

const {nombre: nombre3, apellido: apellido3} = cliente03;
// Debemos asignar con qué key del objeto queremos que se guarde el valor de la variable si las vamos a renombrar

console.log (nombre3);
console.log (apellido3);

const {telefono3} = cliente03

console.log (telefono3);
// Si no asignamos la key a la variable no da error pero el valor de la variable queda en undefined ya que no posee contenido dentro.


// Destructuring de un objeto en un array

const sagaRocky = [
  {
    titulo: "Rocky I",
    age: 1990,
    puntos: 7.8
  },
  {
    titulo: "Rocky II",
    age: 1994,
    puntos: 6.9
  },
  {
    titulo: "Rocky III",
    age: 1998,
    puntos: 5.8
  },
  {
    titulo: "Rocky IV",
    age: 2000,
    puntos: 5.5
  },
  {
    titulo: "Rocky V",
    age: 2004,
    puntos: 6.7
  }
];


const [, {titulo : pelicula2, age}] = sagaRocky
// con la coma, se saltea la primera posición [0] del objeto
// en la posición [1] del objeto recuperamos dos valores

console.log (`${pelicula2} - ${age}`);

// También podemos recuperar un objeto completo y en una segunda instancia recuperar un elemento dentro de él

const [,,,objetoRecuperado] = sagaRocky;
//Primero accedemos al objeto completo
console.log (objetoRecuperado);

const {titulo, puntos} = objetoRecuperado
// luego accedemos a los valores dentro del objeto
console.log (`${titulo} - ${puntos}`);


// Destructuring aplicado a parámetros

const cliente04 = {
  nombre: 'Romina',
  apellido: 'Batista',
  domicilio: 'Lima 233',
  localidad: 'Monserrat',
  tel: 1598745621,
  edad: 40,
  cajaAhorro: 485400025810,
  banco: 'Bancolombia'
};

// Le pasamos a la función las keys del objeto como parámetro, entre {}
function algunosDatos({nombre, apellido, tel}) {
  console.log (`${nombre} ${apellido} - ${tel}`)
};
// Esta fórmula solo permite acceder a las keys, pero no al objeto completo

// Llamamos a la función con la variable del objeto dentro
algunosDatos(cliente04);


