// Método map. Similar a forEach. Mostrar o traer el elemento o su índice.

const numbers = [1, 2, 3, 4, 5]

const double = numbers.map (function (value) {
  return value * 3;
});

// En este caso le pedimos que nos devuelva un nuevo array con el resultado de los valores multiplicados
console.log (double);

// Al igual que forEach, map permite recuperar tanto los elementos como sus índices.

function returnValue(value, position) {  
  console.log (`${value} está en la posición: ${position} del array`)
}

numbers.map(returnValue);