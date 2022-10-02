// Cursos

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this.name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
}

const programacionBasica = new Course({
  name: "Curso de programación básica",
  classes: 20,
  isFree: true,
});

const python = new Course({
  name: "Curso de Python",
  classes: 25,
});

const javascript = new Course({
  name: "Curso de Javascript",
  classes: 22,
});

const css = new Course({
  name: "Curso de CSS",
  classes: 22,
});

const html = new Course({
  name: "Curso de HTML",
  classes: 18,
  lang: "english",
});

const sql = new Course({
  name: "Curso de SQL",
  classes: 29,
});

// Escuelas
class LearningPaths {
  constructor({ name, courses = [] }) {
    (this.name = name), (this.courses = courses);
  }
}

const webDeveloper = new LearningPaths({
  name: "Escuela de desarrollo web",
  courses: [programacionBasica, html, css, javascript],
});
const dataScience = new LearningPaths({
  name: "Escuela de data science",
  courses: [programacionBasica, sql, python],
});

// Estudiantes
class Student {
  constructor({
    name,
    email,
    username,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos ${this.name}, solo puedes tomar cursos abiertos`
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos ${this.name}, no puedes tomar cursos en inglés`
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const ezequiel = new ExpertStudent({
  name: "Ezequiel",
  username: "EzequielDas",
  twitter: "ezedas",
});

const hernan = new FreeStudent({
  name: "Hernan",
  username: "hernan",
  twitter: "her",

});

ezequiel.approveCourse(sql)

console.log(ezequiel);

hernan.approveCourse(programacionBasica)

console.log(hernan);

