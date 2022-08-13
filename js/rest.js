/* REST
Tiene la capacidad de recibir una cantidad de datos indefinida dentro de un array 
function (...parametro) {}
*/

function sumar(...valores) {
  console.log (arguments);
  return valores.reduce ((acumulador, valorActual) => {
    return acumulador + valorActual;
    // Gracias a rest podemos operar con métodos
  });  
}

console.log (sumar (10, 50, 8, 14));

// Rest captura los datos adicionales en una variable y lo transforma en un array

function clientes(nombre, apeliido, ...otrosDatos) {
  // El parámetro resto siempre al final
  console.log (nombre);
  console.log (apeliido);
  console.log (otrosDatos);
};

clientes ('Juan', 'Perez', 45225481, 'Bogotá', 'Chapinero');

// Es posible usr rest en arrow functions
const sumar2 = (...valores) => ( 
  valores.reduce ((acumulador, valorActual) => acumulador + valorActual)
  );

  console.log (sumar2(10, 50, 60, 80, 9));