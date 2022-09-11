// Formas de construir un array

let miArray = [1,2,3,true,null,'hola', 8.56];
let miSegundoArray = new Array (1,2,3,true,null,'hola', 8.56);

console.log (miArray);
console.log (miSegundoArray)

// Acceder a una posición en el array

console.log (miArray[3]);
console.log (miSegundoArray[4]);

// Modificar un array

let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log (daysOfWeek);

daysOfWeek[1] = 'Saturday';

console.log (daysOfWeek);

daysOfWeek[10] = 'Sunday';

// Se puede crear una posición nueva así no sea consecutiva. No es recomendable porque automáticamente crea posiciones vacías "undefined".
console.log (daysOfWeek);


// Acceder a la última posición consecutiva

let daysOfWeek2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

daysOfWeek2[daysOfWeek2.length] = 'Saturday';

console.log (daysOfWeek2);

// Array dentro de otro array

let numbers2 = [2,3,5,[1,2,3],8,9]

// Array dentro de otro array (dentro de una variable)

let domesticAnimals = ['cat', 'dog', 'turtle'];

let animals = ['lion', 'tiger', 'elephant', domesticAnimals, 'panter']

console.log (animals);
console.log (animals[3]);

// Acceder a un dato dentro un array que está dentro de otro array. Ejemplo
console.log (animals[3][1]);

// Los strings también tienen índices y se comportan como si se tratara de un array. Ejemplo
console.log (animals[2][3])

// También se puede acceder a un tercer nivel: en este caso, una posición de un string, dentro de un array, dentro de otro array. Ejemplo
console.log (animals[3][1][0]);

// Se puede acceder a tantos niveles, como niveles de profundidad haya

//MÉTODOS

// Método concat. Unir dos arrays en uno solo

let numbers = [1, 2, 3, 4, 5]
let colors = ['green', 'blue', 'yellow']

// En console.log los muestra como uno pero cada uno se mantiene original.
console.log (numbers.concat(colors));
console.log (numbers);
console.log (colors);


// Dentro de una variable generamos un nuevo array con la concatenación de los ambos.
let numbersColors = numbers.concat(colors);
console.log (numbersColors);

// Para concatenar más de dos arrays:
let cities = ['Paris', 'Rome', 'New York']

let numbersColorsCities = cities.concat (numbers, colors);
console.log (numbersColorsCities)

// Métodos includes e indexOf
// Se utilizan para BUSCAR dentro de un array
// includes - retorna un boolean, dependiendo si encuentra el valor o no
// indexOf - retorna la posición del índice si lo encuentra, si no existe, retorna -1

const names = ['John', 'Michael', 'Richard', 'Robert', 'Anna', 'Steven', 'Lucy'];

// includes recorre el array, si encuentra la coincidencia retorna true
console.log (names.includes('Anna'));

// Es posible controlar a partir de qué posición comenzar a buscar
console.log (names.includes('Anna', 5));

// indexOf recorre el array, si encuentra la coincidencia retorna la posición del mismo, si no lo encuentra, retorna -1

console.log (names.indexOf('Anna'));

// Al igual que includes, en indexOf también es posible controlar a partir de qué posición comenzar a buscar

console.log (names.includes('Anna', 5));

// Método reverse. Invierte el sentido del array original cada vez que lo aplico.
// Importante: modifica el original.

console.log (names.reverse());

// Método splice. Se utiliza para trabajar con datos que están en medio de un array, podemos quitar, mover, reemplzar e incluso agregar nuevos elementos.
// Modifica el array original

// splice (index, borrar, agregar);

names.splice (5, 0, 'Peter');
console.log (names);
// El primer dato entre paréntesis marca el lugar del índice donde comenzar a trabajar; el segundo si desde esa posición hay que borrar, y el tercero para agregar un nuevo elemento. Un cuarto o quinto son más elementos para agregar en la misma sentencia.

names.splice (3, 3, 'Peter', 'Paul');
console.log (names);

// Como la modificación es permanente, con el mismo console.log es posible recuperar los elementos eliminados.

console.log(names.splice (4, 1));
console.log (names);

// Método every. Determina si todos los elementos en el array satisfacen una condición, retorna un boolean.

const ages = [3, 6, 12, 17, 5, 9];
const youngers = (age) => age <= 18;

let result = (ages.every(youngers));

console.log (result);

// Otra forma

let a = [20, 55, 19, 33, 34, 24].every (valor => valor >= 18);
console.log (a);
