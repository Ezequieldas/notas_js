// CLASES

/*
Azucar sintáctico de Javascript 
Basado en clases (como otros lenguajes de programación) pero convertido a prototipos
*/

// Las clases no reciben parámetros
class Animal { 
  // Lo hacen a través de un constructor. Es un método especial que se ejecuta al momento de instanciar la clase.
  constructor (nombre, genero){
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
  }
  //Métodos. Si pueden recibir parámetros
  sonar(){
    console.log(`Soy ${this.nombre} y hago sonidos`)
  };
  // Dentro de una clase sí podemos dejar los métodos dentro
  saludar (){
    console.log(`Hola, me llamo ${this.nombre}`)
  };
};

// La palabra reservada extends nos permite tomar una función constructora para la clase que la va a heredar
class Perro extends Animal {
  constructor(nombre, genero, tamanio){
  super(nombre, genero);
  this.tamanio // propiedad exclusiva de la class Perro
  }

  sonar (){ // El método heredado se puede traer y modificar
    console.log ("Soy un perro y ladro");
  }

  ladrar () { // Método exclusivo de Perro
    console.log ("Guau!!");
  }
}

const minnie = new Animal ("Minnie", "hembra");
const scooby = new Perro ("Scooby", "macho", "gigante");

console.log (minnie);
console.log (scooby);

// El prototipo de minnie es Object (el más primitivo). No viene de ninguna clase heredada
minnie.saludar();
minnie.sonar();
// El prototipo de scooby es Animal / y luego Object (el más primitivo)
scooby.saludar();
scooby.sonar();
scooby.ladrar(); 

// Las clases llegaron para simplificar en gran medida la cuestión de la herencia prototípica

// Métodos estáticos en la clases

// Un método estático es aquel que se puede ejecutar sin la necesidad de instanciar las clases

// static
class SegundoPerro extends Animal {
  constructor(nombre, genero){
  super(nombre, genero);
  }
  // Colocamos un método static dentro de la función
  static queEres () {
    console.log ("Soy un mamífero y soy el mejor amigo del hombre")
  }
}

SegundoPerro.queEres();

// Los setters y getters son métodos especiales que nos permiten establecer y obtener valores para atributos de nuestra clase

class TercerPerro extends Animal {
  constructor(nombre, genero, raza){
  super(nombre, genero);
  this.raza = raza;
  }
  // para obtener: get
  get getRaza () {
    return this.raza
  }

  // para establecer: set
  set setRaza (raza) {
    this.raza = raza
  }
};

const fido = new TercerPerro ("Fido", "macho");

// Aunque sean métodos get y set deben ser trtatados como atributos
fido.setRaza = "Gran Danés";

console.log(fido.getRaza);
console.log(fido)


