/* 

This hace referencia al objeto global.
Por ejemplo, en entorno global devuelve el objeto window

*/

console.log(this);
console.log(this === window);

this.nombre = "Contexto global"

function imprimir() {
  console.log(this.nombre)
}

imprimir();

// Ejemplo con una función en un objeto
const obj = {
  nombre: "Contexto dentro del objeto",
  imprimir: function () {
    // Este this hace referencia al elemento nombre pero dentro de la función
    console.log(this.nombre)
  }
};

obj.imprimir();

// Ejemplo con una función fuera del objeto
const obj2 = {
  nombre: "Contexto de obj2",
  // This se mete en el objeto junto con la función y al hacerlo hace referencia al objeto 
  imprimir: imprimir
};

obj2.imprimir()

// Ejemplo con una arrow function
const obj3 = {
  nombre: "Contexto de objeto 3",
  // Al ejecutarse con arrow function ahora this toma la variable del objeto global
  // La arrow function no crea scope local
  imprimir: () => {
    console.log(this.nombre)
  }
};

obj3.imprimir()

// Una función constructora crea su propio scope
function Persona(nombre) {
  this.nombre = nombre;
  return(console.log(this.nombre));
};

let person = new Persona("Ezequiel");

// Pero si retornamos una función anónima vuelve a tomar el contexto global
function Animal(nombre) {
  this.nombre = nombre;
  return function (){
  console.log(this.nombre);
  }
};

let animal = new Animal("Perro");
animal(); // Contexto global

// Recuerda que cada función crea un contexto

// Volvamos a intentarlo con una arrow function
function Colores(nombre) {
  this.nombre = nombre;
  return () => {
  console.log(this.nombre);
  }
};

let color = new Colores("Rojo");
color(); // Rojo

