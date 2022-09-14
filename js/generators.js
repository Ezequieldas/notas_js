/*
Nos permiten generar mecanismos asíncronos mediante la palabra reservada: yield

*/

function* iterable() {
  yield "Hello";
  console.log("Hello console");
  yield "Hello again";
  console.log("More instruccions");
  yield "Hello again and again"
};

let iterador = iterable();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());


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

let gen = generador();

for (let y of gen){
  console.log(y);
}