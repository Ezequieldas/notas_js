

/*
 Método sort. 
 
 Ordena alfabéticamente un array tomando sus valores como string al hacerlo, por tanto no funciona como uno espera cuando involucra números. Funciona bien con strings
  
 Importante: es mutable. Modifica el original. 
 */

let numbers2 = [200, 50, 1000, 20, 30, 8]

let names = ['Charles','John', 'Peter', 'Adam', 'Christian']
names.sort ();
console.log (names);

// Con números no da el resultado esperado por la forma en la que Javascript le da jerarquía a las letras y los números (tabla ascii)
numbers2.sort ();
console.log (numbers2);

// Pero hay una forma de utilizar el método sort con números. 

const ascendente = numbers2.sort ((a,b) => a - b);
console.log (ascendente);

//Dentro de una variable y utilizando una función flecha
const descendente = numbers2.sort ((a,b) => b - a);
console.log (descendente);

// Esto funciona porque toma las variables como comparadores y va comparando las posiciones. En el primer caso la que es menor la ordena primero

// Ordenar objetos con sort

const sagaRambo = [
  {
    titulo: "Rambo I",
    age: 1990,
    puntos: 7.8
  },
  {
    titulo: "Rambo II",
    age: 1994,
    puntos: 6.9
  },
  {
    titulo: "Rambo III",
    age: 1998,
    puntos: 5.8

  },
  {
    titulo: "Rambo IV",
    age: 2000,
    puntos: 5.5

  },
  {
    titulo: "Rambo V",
    age: 2004,
    puntos: 6.7
  }
];

const ordenPuntosRambo = sagaRambo.sort ((a,b) => a.puntos - b.puntos);
// Debemos acceder a la key del objeto para poder ordenarlo

console.log (ordenPuntosRambo);
