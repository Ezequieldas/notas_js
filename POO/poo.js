// PROGRAMACIÓN ORIENTADA A OBJETOS

/*
Clases - Modelo a seguir
Objetos - Es una instancia de una clase
  -Atributos: es una característica o propiedad del objeto (son variables dentro del objeto)
  -Métodos: Son las acciones que un objeto puede realizar
*/

// Un prototipo es un mecanismo por el cual un objeto puede heredar de un objeto padre, atributos y métodos (funciones).

// Creamos una función constructora (una plantilla), desde donde crearemos nuevos objetos

// En funciones constructoras utilizamos UpperCamelCase

// Función constructora
function Animal (nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
  // Métodos
  this.saludar = function () {
    console.log (`Hola, soy ${nombre} y te doy la bienvenida a Javascript`);
  } 
};

// Instancias: creando constantes o variables y asignando los valores obtenemos un objeto de su constructor
const mickey = new Animal ("Mickey", "macho");
const minnie = new Animal ("Minnie", "hembra");

console.log (mickey);
console.log (minnie);

//Llamamos a la función:
mickey.saludar();
minnie.saludar();

// La función constructora es una función vacía.

class Persona {
  constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido
  }
  saludar (){
    console.log (`Hola, mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`);
  }
}

const personaUno = new Persona ('Ezequiel', 'Das')
const personaDos = new Persona ('Eze', 'Dastolfo')

personaUno.saludar();
personaDos.saludar();


// La forma más eficiente de trabajar es dejar los métodos por fuera de la función constructora para que éstos no se dupliquen con cada nueva instancia creada.

// Pongamos un ejemplo:

function Color (nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
};

  // El método queda fuera de la función. Pero queda conectado por una palabra que hace el puente: prototype

Color.prototype.saludar = function () {
  // En este caso debemos agregar this para que obtenga la variable de la función constructora
  console.log (`Hola, soy el ${this.nombre} y soy un color ${this.genero}`);
}; 

// Hacerlo de esta manera mejora el rendimiento consumiendo menos recursos innecesariamente

const rojo = new Color ("rojo", "primario");
const verde = new Color ("verde", "secundario");

console.log (rojo);
console.log (verde);

rojo.saludar();
verde.saludar();

//Herencia prototípica
// Creamos una función y le indicamos cuál es su elemento padre

function Naranja(nombre, genero, tipo) {
  this.super = Color;
  this.super (nombre, genero);
  this.tipo = tipo; 
}

// Nuevamente para evitar duplicaciones el llamado a la función constructora lo hacemos desde afuera
// Naranja hereda las propiedades de Color
Naranja.prototype = new Color();
Naranja.prototype.constructor = Naranja;

const naranja = new Naranja("naranja", "secundario", "cálido");

// Al heredar ya puede acceder a sus métodos
Naranja.prototype.saludar = function () {
  console.log (`Soy ${nombre} y no solo soy un color ${genero} también soy una fruta`);
};

naranja.saludar();

