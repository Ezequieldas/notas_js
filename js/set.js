/*
Set es un nuevo tipo de estructura de datos en Javascript

Una forma especial de objeto

Es una forma filtrar elementos repetidos. Solo almacena elementos únicos

*/

const set = new Set ([1,2,2,3,3,true,true,false,{},{}]);
// No aplica a objetos, porque se entiende que de por sí ya son diferentes entre sí

console.log(set);

// El método add nos permite agregar valores
set.add("I'm a new element");

console.log(set);



// Set tiene un método especial que permite eliminar valores
set.delete(3);

console.log(set);

// El método has comprueba si existe un elemento dentro.

console.log(set.has(2));

// El método clear limpia el objeto set. Lo deja vacío.
