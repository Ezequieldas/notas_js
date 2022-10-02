// Los setters y getters son métodos especiales que nos permiten establecer y obtener valores para atributos de nuestra clase

class Animal { 
  constructor (nombre, genero){
  this.nombre = nombre;
  this.genero = genero;
  }
};

class Perro extends Animal {
  constructor(
    nombre, 
    genero, 
    raza
    ){
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

const fido = new Perro ("Fido", "macho");

// Aunque sean métodos get y set deben ser trtatados como atributos
fido.setRaza = "Gran Danés";

console.log(fido.getRaza);
console.log(fido)


