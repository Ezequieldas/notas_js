let nombre,
    apellido,
    nombreCompleto,
    espacio;

nombre = 'Juan';
apellido = 'Perez';

nombreCompleto = nombre + apellido; //Concatenacion

console.log (nombreCompleto);

console.log ("Su nombre es " + nombre + " " + apellido)

// Para mostrar comillas dentro de comillas importante siempre abrir y cerrar con la misma, y las que estén dentro deben cerrar con la expresión que se quiere encomillar. Por ej:

fraseConComillas = 'Este es un string con "comillas dobles"';
console.log (fraseConComillas);

fraseConComillas = "Este es un string con 'comillas simples'";
console.log (fraseConComillas);

//Backticks

console.log (`El apellido es: ${apellido} y su nombre es ${nombre}`);