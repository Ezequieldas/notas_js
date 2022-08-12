/* CARACTERES DE ESCAPE

Permiten saltear una regla como por ejemplo el uso de las comillas

\'   para repetir comillas
\"   idem 
\n   salto de linea en consola
\t   para tabular en consola
\\   se pone doble para mostrar una \

 */

let mensaje = "El \"perro\" mordió a otro perro";
console.log (mensaje);

//En este caso se pudo utilizar las comillas dobles en ambos tanto para encerrar el string como para comillar una palabra


let mensaje2 = "El perro\n mordió a otro perro";
console.log (mensaje2);
//En la salida de consola puede verse un salto de linea luego de \n

let mensaje3 = "El perro\t mordió a otro perro";
console.log (mensaje3);
//En la salida de consola puede verse una tabulación luego de \t