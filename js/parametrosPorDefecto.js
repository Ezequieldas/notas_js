// Asignamos parámetros por defecto en funciones que esperan un valor pero que el usuario no les asigna uno.

function multi(x,y) {
  if ( typeof y === 'undefined') y = 5;
  if ( typeof x === 'undefined') x = 2;
  //Se asignan valores por defecto en caso de que el usuario no envíe los datos
  return x * y;
}

console.log (multi());
// Mensaje en consola con parámetros vacíos

console.log (multi(6,3));
// Si el usuario asigna valores se sobreescriben a los valores por defecto.


// Con un operador ternario:

function multi(x,y) {
  //si el tipo de dato y es igual a undefined
  y = typeof y === "undefined" ? 5 : y;
  x = typeof x === "undefined" ? 2 : x;
  return x * y;
}

console.log (multi());

// Una manera más sencilla de asignar valores por defecto:

function datosPersona (nombre='null', apellido='null', tel='null') {
  console.log (`${nombre} ${apellido} - ${tel}`);
}

datosPersona('carlos');

