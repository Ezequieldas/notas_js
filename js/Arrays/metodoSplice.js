// Método splice. Se utiliza para trabajar con datos que están en medio de un array, podemos quitar, mover, reemplzar e incluso agregar nuevos elementos.
// Modifica el array original

const names = ['John', 'Michael', 'Richard', 'Robert', 'Anna', 'Steven', 'Lucy'];


// splice (index, borrar, agregar);

names.splice (5, 0, 'Peter');
console.log (names);
// El primer dato entre paréntesis marca el lugar del índice donde comenzar a trabajar; el segundo si desde esa posición hay que borrar, y el tercero para agregar un nuevo elemento. Un cuarto o quinto son más elementos para agregar en la misma sentencia.

names.splice (3, 3, 'Peter', 'Paul');
console.log (names);

// Como la modificación es permanente, con el mismo console.log es posible recuperar los elementos eliminados.

console.log(names.splice (4, 1));
console.log (names);