class Student {
  // Desde nuestro constructor podemos recibir un objeto en lugar de parámetros
  constructor({
    name,
    age,
    // cursosAprobados espera un array. Dejamos uno vacío por defecto
    cursosAprobados = [],
    email,
    twitter
  }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCursos(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

// De esta manera cuando haya que enviar información, solo se envía un objeto en lugar de argumentos por separado
const miguel = new Student({
  name: "Miguel",
  age: 28,
  cursosAprobados: ["Curso JS", "Curso Python", "Curso Java"],
});

// Esto facilita la tarea en el caso de que sean muchos argumentos, no tenemos que enviarlos todos, solo los que necesitemos

console.log(miguel)