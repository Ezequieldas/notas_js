// Creamos un objeto primitivo

const ezequiel = {
  name: "Ezequiel",
  age: 26,
  cursosAprobados: ["JS", "CSS", "GIT"],
  aprobarCursos(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

// Con el métoso incluimos un nuevo elemento en el array dentro del objeto
ezequiel.aprobarCursos("React");

console.log(ezequiel);

// Creamos un prototipo para los objetos
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

// Creamos el método por fuera de la función para no tener que llamarlo cada vez que instanciemos la clase
Student.prototype.aprobarCursos = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const lucas = new Student(
  "Lucas",
  20,
  [
    "Curso 1",
    "Curso 2",
    "Curso 3"
  ]
)

lucas.aprobarCursos("Curso 4")
console.log(lucas)