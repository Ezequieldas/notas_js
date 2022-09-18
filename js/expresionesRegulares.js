/* 
Expresiones regulares
  Son una secuencia de caracteres que forma un patrón de búsqueda. Principalmente utilizadas para la búsqueda de patrones de cadenas de caracteres o números.

Por ejemplo con expresiones regulares podemos validar: 
-Que en un correo electrónico solo se acepten algunos caracteres
-Validar una fecha
-Validar el DNI de una persona
-Validar los 16 dígitos de una tarjeta de crédito

Algunos ejemplos:

\s representa un espacio en blanco
\z representa el final de una cadena
\d representa un dígito del 0 al 9

*/

// Función constructora para expresiones regulares: RegExp

let expresionReg1 = new RegExp();

// las expresiones regulares funcionan con banderas (flags)

let cadena = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."


// el segundp parámetro son las banderas. Por ejemplo "g" es para que busque todas las cadenas que contengan esa expresión. "i" es una bandera para que no discrimine mayúsculas y minúsculas
let expresionReg2 = new RegExp("quis","");

// Con test corroboramos que la eprexión exista. Devuelve true o false
console.log (expresionReg2.test(cadena));

// exec devuelve un array con la información sobre la cadena. Si no lo encuentra devuelve null

console.log (expresionReg2.exec(cadena));

// También podemos utilizar expresiones regulares sin la función constructora. Tendrá el mismo efecto.
 let expresionReg3 = /Lorem/ig;



// Fórmula para encontrar términos con matchAll y exp reg
 const regex = /\b(White)+\b/g;

 const colors = 'Red, Green, Yellow, Black, White, Grey';

 for (const match of colors.matchAll(regex)){
  console.log(match);
 };
 
