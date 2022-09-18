/*
function* es una clave para determinar el uso de generator

Nos permiten generar mecanismos asíncronos mediante la palabra reservada: yield

*/

function* iterable() {
  yield "Hello";
  yield "Hello again";
  yield "Hello again and again"
};

let iterador = iterable();
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
  yield cuadrado(3);
  yield cuadrado(4);
  console.log("Termina generator")
};

let generatorCuadrado = generador(2);
console.log(generatorCuadrado.next());
console.log(generatorCuadrado.next());
console.log(generatorCuadrado.next());
console.log(generatorCuadrado.next());
console.log(generatorCuadrado.next());
console.log(generatorCuadrado.next());