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

// Método reverse. Invierte el sentido del array original cada vez que lo aplico.
// Importante: modifica el original.

console.log (names.reverse());
