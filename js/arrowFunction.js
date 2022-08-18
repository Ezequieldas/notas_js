// FUNCION FLECHA O ARROW FUNCTION

// Reemplaza a la función anónima y la palabra reservada function por una flecha =>

//(tampoco tiene hoisting (alcance global) es decir primero tiene que declararse la función antes de utilizarse)

let funcionFlecha = () => {
  //funcion a ejecutar
  return 'Flecha dorada';
}

//Dos formas de recuperar la información de la arrow function
let recuperarDato = funcionFlecha();
console.log (recuperarDato);

console.log (funcionFlecha());

//Datos a saber:

//Reducir el cógido cuando la funcion en el cuerpo solo usa una linea
const funcionSimple = () => console.log ('Esto es posible porque solo contiene un linea de código');
funcionSimple ();
//Nos ahorramos las llaves

//Si la funcion va a recibir un único parámetro no es necesario usar los ()
const funcionEsperaParam = texto => console.log (texto);
funcionEsperaParam ('Pasamos un argumento a la función flecha');


//Función flecha con varios parámetros, si necesitamos hacer cálculos complejos o usar más de una linea se recomienda hacerlo entre {} y usar return. Con una sola linea no es necesario
const funcionSumar = (dato1, dato2) => dato1 + dato2;
console.log (funcionSumar (10,5));

//Reducir el código cuando la función tiene una sola línea y retorna un valor
const funcionRetornaValor = () => 'Esto es posible porque solo contiene una línea de código, no es necesario usar return';

console.log (funcionRetornaValor());

//regresar un objeto
const regresarObjeto = () => ({nombre: 'Juan', apellido: 'Perez'})

console.log (regresarObjeto());

// la forma de retornar más de un parámetro, mediante []

// El comportamiento de this en las funciones flecha. Dentro de los objetos el comportamiento a cambiar si se utiliza una función flecha dentro del mismo

// This hace referencia al objeto perro
const perro = {
  nombre : "Fido",
  ladrar: function () {
    console.log (this);
  }
}

perro.ladrar();

// Con una función flecha, This se salta el objeto de su contexto y hace referencia a window como su objeto padre
const perro2 = {
  nombre : "Lassie",
  ladrar: () => {
    console.log (this);
  }
}

perro2.ladrar();