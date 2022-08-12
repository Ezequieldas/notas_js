// SCOPE
// El lugar donde defina una variable determina si podré o no acceder a ella.


function saludar() {
  let saludo = 'Hola adentro';
  console.log (saludo);
}

// console.log (saludo); Este da error porque no tengo la variable declarada fuera del function
// No es posible acceder a una variable que está dentro de una función


// Por el scope es posible declarar una variable con el mismo nombre porque están en diferentes niveles. Una se encuentra dentro de una función y la otra se encuentra fuera.
// Donde no se puede repetir el nombre de la variable es en el mismo scope o nivel.


let saludo2 = 'Hola fuera de la función'

function saludar2() {
  
  let saludo2 = 'Hola dentro de la funcion';
  console.log (saludo2)
}

// Podríamos tomar la variable dentro de la función si estuviera previamente declarada, llamando a la función y sin "let" dentro de la función

saludar2();
console.log (saludo2)


// block scope. Todo lo que está dentro de {} se encuentra dentro de un bloque. Y eso es lo que define un nivel de scope, las {}.
// Por ello no es recomendable usar "var" por el hecho de que rompe el esquema de niveles al ser global y puede generar errores en el código. Además "var" permite redeclarar la misma variable, lo que también puede dar errores.

function saludar2() {
  
  var global = 'Hola dentro de la funcion';
  console.log (global);
}

var global = 'Hola fuera de la función';
var global = 'Vuelvo a declarar la misma variable y no me da error';

