/*
Object.getOwnPropertyDescriptors es una propiedad estática del prototipo Object. Nos devuelve:
   { value: '',
     writable: true,
     enumerable: true,
     configurable: true },
*/

const ezequiel = {
  name: "ezequiel",
  age: 20
}

console.log(Object.getOwnPropertyDescriptors(ezequiel));

const juan = {
  name: "Juan",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse){
    this.approvedCourses.push(newCourse)
  }
}