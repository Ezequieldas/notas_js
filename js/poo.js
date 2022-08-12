// PROGRAMACIÓN ORIENTADA A OBJETOS

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