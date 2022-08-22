/*
Cortocircuito OR - Cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto

Cortocicuito AND - Cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto

*/

// ||OR

function saludar (nombre) {
  nombre = nombre || "Desconocido"; // cortocircuito para pasar valor por defecto (Se hacía en versiones anteriores de JS)
  console.log (`Hola ${nombre}`)
};

saludar ("Juan");
saludar (); // Se aplica valor por defecto

// Actualmente se utilizan parámetros por defecto
function saludar2 (nombre="Desconocido") {

  console.log (`Hola ${nombre}`)
};

saludar2 (); 

// && AND. Tiene el efecto contrario, va a validar a false
