/*

Garbage collector las va limpiar

Weak Map y Weak Set no son iterables

No tienen la propiedad size

Weak Set tiene add, has y delete

*/

// Se declara únicamente mediante llaves
const ws = new WeakSet();

let valor1 = {"valor1":1};
let valor2 = {"valor2":2};

ws.add(valor1);

console.log(ws)