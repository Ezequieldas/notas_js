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

//Template strings: uso de Backticks para incluir variables en la misma sintaxis

console.log (`El apellido es: ${apellido} y su nombre es ${nombre}`);

// Las template strings también incorporan el salto de linea

console.log (
  `
  ${apellido} está en una linea
  ${nombre} está en otra linea diferente
  `
  );
