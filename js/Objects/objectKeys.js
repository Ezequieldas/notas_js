/* 
Object.keys es una propiedad estática del prototipo Object que nos permite acceder a las llaves del objeto
Al mismo tiempo las convierte en un array
*/
const juan = {
  name: "Juan",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse){
    this.approvedCourses.push(newCourse)
  }
}

console.log(Object.keys(juan));

console.log(Object.entries(juan)[3][1]);