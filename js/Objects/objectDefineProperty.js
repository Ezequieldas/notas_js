/* 
Object.defineProperty es una propiedad estática del prototipo Object que nos permite 

*/
const juan = {
  name: "Juan",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse){
    this.approvedCourses.push(newCourse)
  }
}

Object.defineProperty(juan, "EverythingIsTrue", {
  value: "Everithing is true",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(juan, "EverythingisFalse", {
  value: "Everithing is false",
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(juan, "writableFalse", {
  value: "wfalse",
  writable: false,
  enumerable: true,
  configurable: true
});
// Writable en false desactiva la posibilidad de editar el valorr del objeto


Object.defineProperty(juan, "enumerableFalse", {
  value: "efalse",
  writable: true,
  enumerable: false,
  configurable: true
});
// Enumerable en false desactiva la posibilidad de listar la propiedad con Object.keys (sigue disponible con getPropertyNames)

Object.defineProperty(juan, "configurableFalse", {
  value: "cfalse",
  writable: true,
  enumerable: true,
  configurable: false
});
// Configurable en false desactiva la posibilidad de borrar el valor con delete


console.log(juan);


// Object.seal cambia la propiedad "configurable" a false de todos los elementos del objeto para que no se puedan borrar
const ezequiel = {
  name: "ezequiel",
  age: 25
}

Object.seal(ezequiel);
console.log(Object.getOwnPropertyDescriptors(ezequiel));

// Object.freeze cambia la propiedad "writable" a false de todos los elementos del objeto para que no se puedan editar
const hernan = {
  name: "hernan",
  age: 26
}

Object.freeze(hernan);
console.log(Object.getOwnPropertyDescriptors(hernan));
