/* 
  PARÁMETROS REST

  Tiene la capacidad de recibir una cantidad de datos indefinida dentro de un array 

  function (...parametro) {}
*/

// Comencemos con un ejemplo simple:

// Creamos una función con dos parámetros y un tercer parámetro rest
function suma (a,b, ...c) {
  // sumamos los dos primeros parámetros
  let resultado = a+b;
  // con foreach hacemos que opere con cada variable nueva que vaya a recibir
  c.forEach(function(n){
    resultado += n ;
  });

  return resultado
}

// Recibe sin problemas los dos primeros resultados
console.log(suma (1,3));

// Si recibimos más parámetros, con esta función rest los recibe y foreach los suma
console.log(suma (1,3,5,3,5));



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

// Es posible usar rest en arrow functions
const sumar2 = (...valores) => ( 
  valores.reduce ((acumulador, valorActual) => acumulador + valorActual)
  );

  console.log (sumar2(10, 50, 60, 80, 9));