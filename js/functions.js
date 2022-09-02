/*

function nombre (parametros, parametros) {
   Codigo a ejecutar
   return
}

function = palabra reservada

*/

// Funcion mas conocida (tiene hoisting, es decir se puede declarar en cualquier parte del código). Tiene alcance global

function traerDelSuper (producto1, producto2) {
  return `Te compré ${producto1} y también ${producto2}`
}

let hijo = traerDelSuper ('pan', 'queso');
console.log (hijo);

let tio = traerDelSuper ('sal', 'vino');
console.log (tio);

// Otra forma de construir una funcion (no tiene hoisting, es decir primero tiene que declararse). Scope, alcance local.

let miFuncion = function (producto3, producto4) {
  return `Te vendo ${producto3} y también ${producto4} a un precio de oferta`;
}

let regresarDato = miFuncion ('sabanas', 'almohadas');
console.log (regresarDato);



// La palabra reservada return finaliza la función. Lo que se coloque debajo no se ejecutará

function suma (x, y) {
  if (x > y) {
    return true;
  } 
  else {
    return false;
    console. log (suma);
    // Este console.log no se ejecuta porque está debajo del return
  }
}

const resultado = suma (4, 5);
console.log (resultado);

// Refactorizar código. Una función ya trae implícito el hecho de que algo sea verdadero o falso. En algunos casos el if no es necesario.



// Funciones anidadas. Aplica alcance scope

function afuera() {
  console.log('Se ejecuta afuera');
  let movie = 'Bond'

  function adentro () {

    console.log (movie);

  }

  adentro (); // Llama al a función "adentro" luego de que se ejecutó la función "afuera"

}

afuera ();

// Una función anidada puede acceder a la función padre
// Pero no es pposiblle acceder a una función anidada desde afuera. Se comporta como una variable (scope)


// Las funciones en Javascript también son objetos

const sum = function (x,y) {
  return x + y;
}
//Es una función anónima dentro de una variable.

function resta (x,y) {
  return x - y;
}

function suma2 (x,y) {
  return x + y;
}

function multiplica (x,y) {
  return x * y;
}

function divide (x,y) {
  return x / y;
}

// Estas funciones podemos convertirlas en un array
const operaciones = [suma, resta, multiplica, divide]

for (let cadaFuncion of operaciones) {
  console.log (cadaFuncion(10,2));
}
// Al pasar los valores cada función se comporta a su vez como un objeto dentro del array

// También podemos meter la función dentro de otro objeto

const objetoFunciones = {
  sum: suma,
  res: resta,
  mul: multiplica,
  div: divide
}

console.log(objetoFunciones.sum(10,2));


// Función que recibe como parámetro una función dentro de un for

function repetir(funcion, numero) {
for (let i = 0; i < numero; i++) {
  funcion ();
}
}

function hola() {
  console.log ('Hola a todos');
}

function chau() {
  console.log ('Hasta la próxima');
}

// Pasamos como argumento una función
repetir (chau, 3);


// Función que retorna una función

function retornaFuncion() {
  return function () {
  console.log ('Función que retorna una función')
  }
}

const constRetornaFuncion = retornaFuncion();

constRetornaFuncion();

// Explicación con un ejemplo:

// Recibe el valor, se lo asigna a num:
function multiplicaPor(num) { //Ahora qué hago?
  return function (otroNumero) { // Retorna esta función anónima que hará lo siguiente:
    return otroNumero * num // Tomaré el valor de la func padre y se lo asignaré a num, pero me falta otroNúmero
  }
}

export const dameUnNumero = multiplicaPor(2); // Creamos una const que va a alojar la función y le pasamos el valor que falta (otroNumero)

console.log (dameUnNumero(9));

// Otro ejemplo:

// Recibe los valores, se lo asigna a x,y :
function entreDosNumeros(x,y) { // Ahora qué hago?
  return function (numero) { // Retorna esta función anónima que va a comparar valores
    return (numero >= x && numero <= y); // Tomaré x,y de la función padre y se lo asignaré a mi comparador if, pero me falta "numero".
  }
}

const dameElEntre = entreDosNumeros(0,100); // Creamos una const que va a alojar la función y le pasamos el valor que falta (numero)

console.log (dameElEntre(9)); // Aquí está el valor (numero) de la función anonima hija para que lo compares con x,y
