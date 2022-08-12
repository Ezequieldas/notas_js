let cadena1 = "28";
let cadena2 = "28.33";
let cadena3 = "28 días tiene febrero";
let cadena4 = "28*3";
let cadena5 = "Marcos tiene  28";
let cadena6 = "$28";

// parseInt se usa para convertir a entero
let resultado = parseInt (cadena2);

console.log (resultado);
console.log (typeof resultado);

//parseFloat se usa para convertir en Numero de punto flotante o con decimales
let resultado2 = parseFloat (cadena2);
console.log (resultado2);
console.log (typeof resultado2);

//Otra solución Number
let resultado3 = Number (cadena2);
console.log (resultado3);

//Soución resumida +
let resultado4 = + (cadena2);
console.log (resultado4);

//Si en cadena6 quitamos el $ podemos acceder al número
//Con slice
let resultado5 = parseInt (cadena6.slice(1));
console.log (resultado5);

//Si en cadena6 quitamos la parte no numérica podemos acceder al número
//Con slice
let resultado6 = parseInt (cadena5.slice(-2));
console.log (resultado6);
