/* 
Call - Llama al contexto en el que se encuentra
*/

console.log(this);
this.lugar = "Contexto Global"

function context (saludo, personas) {
  console.log(`${saludo} ${personas} desde ${this.lugar}`)
}

context("Hola", "amigos");

// Crearemos un objeto con la misma llave y llamaremos a la función peo con call

const obj = {
  lugar: "Contexto objeto"
}

context.call(obj, "Hola", "amigos");
// Es importante llamar al objeto para ejecutar el contexto

/* 
Apply - opera al igual que call desde un array
*/

context.apply(obj, ["Hola", "amigos"]);

/*
 Bind - Enlaza el contexto que se desea aplicar. Por ejemplo de la función que se trae 
 */

const one = {
  saludo: "amigos",
  context: function () {
    console.log(`Hola ${this.saludo}`)
  }
};

one.context()

const two = {
  context: one.context.bind(one)
};

two.context()



