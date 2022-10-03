/*
Objeto THIS
This es un objeto especial de JS que hace referencia al contexto en el que se está ejecutando la función, el objeto que lo contiene. Puede ser global o local

objeto -- metodo --> this referencia al objeto
funcion --> this referencia al objeto global (window en navegadores y global en node)

*/


const objeto = {
  nombre : 'Ezequiel',
  apellido : 'Das',

  // Este método imprime todo el objeto con this, porque this lo referencia dentro de su ámbito
  nombreCompleto () {
    console.log(this);
  }
}
objeto.nombreCompleto ();

// This es una forma genérica de referenciar al objeto.

const objeto2 = {
  nombre : 'Eze',
  apellido : 'Dastolfo',

  nombreCompleto () {
  // esta función se llama igual que la anterior y no da error porque está encapsulada dentro del objeto

  console.log(objeto2.nombre);
  console.log(this.nombre);
  // Llamar al objeto por su nombre junto con la key es lo mismo que llamarlo con this. El resultado es igual:
  }
}

objeto2.nombreCompleto ();

// Destructuring con this

const objeto3 = {
  nombre : 'Hernan',
  apellido : 'Gomez',
  dni: 308255471,

  nombreCompleto () {
    const {nombre, apellido} = this;
    // Deconstruimos para asignarle keys a this antes de utilizarla, para no tener que llamar a la key con this una por una (this.nombre etc), sino directamente con el nombre de la misma

  console.log(`${nombre} ${apellido}`);
  // No es posible imprimir dni porque no se lo asignamos a this previamente con destructuring

  }
}


// Creamos una función desde afuera del objeto y lo incluimos al mismo:

objeto3.nombreCompleto ();

const objeto4 = {
  nombre : 'Luisa',
  apellido : 'Morelos',
  dni: 3084545421,

  nombreCompleto () {
    const {nombre, apellido, miNuevaFuncion} = this;
  console.log(`${nombre} ${apellido}`);
  }
}

objeto4.nombreCompleto ();


objeto4.apodo = 'Lucha';
// Asignamos una función desde afuera del objeto pero pasa a formar parte del mismo, y el this que esté adentro también lo hace.
objeto4.miNuevaFuncion = function () {
  console.log ('nueva función');
  console.log (this);
}

// Pero si guardamos la función (con this dentro) en una constante que está afuera del objeto. El this ahora va a referenciar de forma global.
const otraConstante = objeto4.miNuevaFuncion;
// otraConstante saca a la función del objeto y this ya no lo referencia


//Las funciones flecha no tienen un this propio, heredan el this del contexto en el que se encuentran.

const objeto5 = {
  nombre : 'Luis',
  apellido : 'Moreno',
  dni: 45878412,

  // start () {
  //   setInterval (function () {
  //     console.log (this);
  //   });
  // }
}

// objeto5.start();

// setInterval ees un método que pertenece a window. Al igual que todos los elementos de window cuando son llamados, this hace referencia a window


// Función constructora
function Texto (nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  console.log (this);
}

const cliente = new Texto ('Ezequiel', 'Das');
// Esta función construye un objeto cuando le pasamos los datos.
// Los parámetros de la función se convierten en las llaves (keys) del objeto (this.nombre); y sus parámetros serán los valores ( = nombre / 'Ezequiel' )


const objeto6 = {
  titulo : 'Mis nombres:',
  nombres : ['Marcos', 'Pedro', 'Raul'],
  mostrameNombres () {
    this.nombres.forEach ((nombre) => {
      console.log (this.titulo, nombre);
    });
  }
}

objeto6.mostrameNombres ();