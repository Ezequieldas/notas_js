/*
Método map. Similar a forEach. Mostrar o traer el elemento o su índice.

Map crea un array nuevo con el resultado de mapear el array original (es decir, no lo modifica)

Map devuelve el mismo número de elementos que el array original

*/

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


const orders = [
  {
    customerName: 'Juan',
    total: 150,
    delivered: true
  },
  {
    customerName: 'Jose',
    total: 120,
    delivered: true
  },
  {
    customerName: 'Ana',
    total: 180,
    delivered: true
  },
  {
    customerName: 'Sofía',
    total: 100,
    delivered: true
  },
]


// Obtener los valores de la key de cada elemento con map
let total = orders.map(item => item.total)
console.log(orders);
console.log(total);

// Añadir un nuevvo elemento a los objetos sin modificar el array original

let tax = orders.map (item => {
  return {
    ...item,
    tax: .19
  };
});

console.log(tax)

const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);

console.log(rta)