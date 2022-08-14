// OBJETOS

// Un array (aunque también es un objeto) está definido por índice y valor.
// Un objeto puro como tal está definido por un key y un valor

const cliente1 = {
  nombre: 'Juan',
  apellido: 'Lopez',
  edad: 50,
  dni: 30692001,
};

console.log (cliente1.dni);

// Actualizar la propiedad de un objeto.
cliente1.nombre = 'Pedro'
console.log (cliente1);

// Agregar una nueva propiedad para un objeto.
cliente1.sobrenombre = 'Pietro';
console.log (cliente1);

// También podemos crear keys y valores con []
cliente1['Le gusta'] = 'Nadar';
console.log (cliente1);

// Un objeto puede crearse aunque no contenga keys y valores
const objetoVacio = {};
// Y luego incluir propiedades (keys)
objetoVacio.primeraKey = 'Soy la primer key'
console.log (objetoVacio);

// Un objeto puede contener no solo datos primitivos. También puede contener objetos anidades o arrays dentro.
const cliente2 = {
  nombre: 'Ezequiel',
  apellido: 'Das',
  compra: 'Cafetera',
  leInteresa: {
    estufa: 'Horno',
    smartTv: '65"'
  },
  referidos: ['Manuel', 'Ana', 'Silvia'],
  edad: 30,
  puntosAcumulados: {
    enero: 90,
    febrero: 70,
    marzo: 85
  }
};

// Para acceder a un valor de un objeto dentro de un objeto:
console.log (cliente2.leInteresa.estufa);

// Para acceder a un valor de un array dentro de un objeto:
console.log (cliente2.referidos[1]);

// Para sumar valores de un objeto dentro de un objeto:
let suma = cliente2.puntosAcumulados.enero + cliente2.puntosAcumulados.febrero + cliente2.puntosAcumulados.marzo;

console.log (suma);

// Objetos dentro de un array
const compras = [
  {
    producto: 'avena',
    precio: 130,
    cantidad: 1,
  },
  {
    producto: 'sal',
    precio: 52,
    cantidad: 2,
  },
  {
    producto: 'pure tomate',
    precio: 80,
    cantidad: 1,
  },
]

// Acceder a un objeto dentro de un array:
// el array - la posición [] - la key
console.log (compras[1].precio);

// Y si quiero sumar el precio de los 3 productos:
let valorTotal = compras[0].precio + compras[1].precio + compras[2].precio;

console.log (valorTotal)

// Partes de los objetos:

// Contenedor

const persona = {
  // Propiedades del objeto
  nombre : 'Carlos',
  apellido : 'Zarate',

  // Métodos (funciones dentro del objeto)
  sumar : (x,y) => {
    return x + y;
  },

  // Los métodos dentro del objeto también funcionan sin : y => (shorthand sintax)
  restar (x,y) {
    return x - y;
  }
};

// Invocar una propiedad
console.log (persona.nombre);
// Invocar un método (con () )
console.log (persona.sumar(5,5));

// Método sin : y sin => funciona igual
console.log (persona.restar(8,5));




