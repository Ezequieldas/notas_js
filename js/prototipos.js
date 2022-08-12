// PROGRAMACIÓN ORIENTADA A OBJETOS (POO)

/*

-Clases - Modelo a seguir
-Objetos - Instancia de una clase
-Atributos - Característica o propiedad del objeto (variables dentro de un objeto)
-Métodos - Acciones que un objeto puede realizar (funciones dentro de un objeto)

*/

// Función constructora donde asignamos los métodos al prototipo, no la función como tal

function Animal (nombre, genero) {
  this.nombre = nombre
  this.genero = genero

}

// Métodos agregados al prototipo de la función constructora
Animal.prototype.moverse = function () {
  console.log ('Me muevo porque estoy vivo')
} 

const snoopy = new Animal ('Snoopy', 'macho');
const lolaBunny = new Animal ('Lola Bunny', 'Hembra');

console.log (snoopy)
console.log (lolaBunny)