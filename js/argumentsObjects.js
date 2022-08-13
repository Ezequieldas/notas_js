// arguments es un objeto iterable que se puede manipular dentro de una función así no lo hayamos declarado

// Puede servir cuando no sabemos qué datos va a proporcionar el usuario

function sumar() {
  console.log (arguments); // En consola se muestra como un iterador con índice y valores
}

sumar (10, 20, 80, 42);

// arguments tiene algunas limitaciones. No se puede recorrer con métodos

// Puede ocurrir que la función espera dos parámetros pero el usuario envía más. Arguments también puede recibir el excedente de parámetros. Ejemplo:

function esperaDosParam(parametro1, parametro2) {
  console.log(arguments);
  //arguments recibe los cuatro parámetros aunque solo esperaba dos
}

esperaDosParam ('dato1', 'dato2','dato2','dato4');

// NOTA: arguments no funciona con arrow functions