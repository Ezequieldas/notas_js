/*

generator es una herramienta junto con promises / async await / para trabajar JS en asincronía

la clave para determinar el uso de generator es function* que nos permiten generar mecanismos asíncronos mediante la palabra reservada: yield

*/

function* iterable() {
  yield "Hello";
  yield "Hello again";
  yield "Hello again and again"
};

let iterador = iterable();
// Con cada yield y next podemos controlar cuantas veces queremos que se ejecute 
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());


// En este ejemplo yield llamará a la función cuadrado y la ejecutará paso por paso

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({valor, resultado: valor * valor})
  }, Math.random() * 1000);
}

function* generador(){
  console.log("Inicia generator")
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  console.log("Termina generator")
};

let generatorCuadrado = generador(2);
console.log(generatorCuadrado.next());
console.log(generatorCuadrado.next());
console.log(generatorCuadrado.next());
console.log(generatorCuadrado.next());

// Probemos el uso de generators con un array
function* iterate (array) {
  for (const value of array) {
    yield value
  }
};

const it = iterate(['Ezequiel', 'Hernán', 'Alma', 'Andrea']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
