
let cadena  = 'Hola-mundo';
// typeof muestra qué tipo de dato hay en la variable
console.log (typeof cadena);

// .length muestra la cantidad de caracteres del string
console.log (cadena.length);

// el índice de una string, al igual que los arrays, comienza en cero
console.log (cadena[0]);

// El string es inmutable
cadena[4] = 'x';
console.log (cadena);
// Aunque intentemos cambiar una posición en el índice

// Método length para obtener la última posición del string
console.log (cadena[cadena.length -1]);

/////////////////////////////////

// OBJETOS STRING

let cadena2 = new String ('TEXTO 2');
console.log (typeof cadena2);

console.log (cadena2.charAt (1));

// toLowerCase y toUpperCase pasan el texto a minúscula y mayúscula respectivamente.
console.log (cadena2.toLowerCase());
console.log (cadena.toUpperCase());

// El método trim ajusta los espacios.
let cadena3 = '        esto es una     cadena    con problemas    de espacios    ';
console.log (cadena3.trim());

// Los strings admiten más de un método al mismo tiempo
let cadena4 = ' ejemplo    de cadena con    espacios   y toUpperCase    ';
string = cadena4.trim().toUpperCase();
console.log (string);

// MÉTODO indexOf. Nos indica en qué posición comienza la palabra que estoy buscando, pero solo la primera vez
let saludo = "Hola mundo"
console.log (saludo.indexOf("mundo"))

// Si no encuentra el término, el valor es -1. si está escrito diferente tampoco lo encontrará. Ejemplo: escrito con mayúsculas
console.log (saludo.indexOf("planeta"))

// Si pasamos más argumentos, por ejemplo una concatenación, podemos buscar indexOf en toda la concatenación
console.log ((saludo + ' saludo concatenado').indexOf('saludo'));

//MÉTODO slice. Podemos controlar en qué posición del índice queremos que comience el string y en qué posición queremos que termine
let saludo2 = 'Hello world!'
console.log (saludo2.slice(5,9));

// Si utilizamos valores negativos podemos recortar de atrás hacia adelante
console.log (saludo2.slice(1,-2));

//MÉTODO replace. Reemplaza un string por otro o parte del mismo. 
console.log (saludo2.replace('world', 'friends'));

// El método solo aplica para la primer coincidencia que encuentre
frase = 'Un perro mordió a otro perro';
console.log (frase.replace('perro', 'gato'));






