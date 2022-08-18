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

// Se puede crear una posición nueva así no sea consecutiva. No es recomendable
console.log (daysOfWeek);


// Acceder a la última posición consecutiva

let daysOfWeek2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

daysOfWeek2[daysOfWeek2.length] = 'Saturday';

console.log (daysOfWeek2);

// Array dentro de otro array

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

// Método push. Agrega elementos al final del array

let fruits = ['apple', 'pineapple', 'blueberry', 'orange'];
console.log (fruits);

fruits.push ('pear', 'tangerine');
console.log (fruits);

// El método push además de agregar elementos retorna la cantidad de elementos nuevos que hay. Por ejemplo si colocamos el resultado dentro de una variable.

let large = fruits.push ();
console.log (large);

// Método pop. Elimina el último elemento del array

let fruitsPop = fruits.pop ();

// Accedo al array con el último elemento borrado
console.log (fruits);

// Accedo al elemento borrado guardado en una variable nueva
console.log (fruitsPop);

// Cada vez que invoque el método pop volverá a quitar el último elemento del array
fruits.pop ();
console.log (fruits);

// Método unshift. Agregar elementos al array desde el comienzo
fruits.unshift ('Avocado');
console.log (fruits);

// Método shift. Quita el primer elemento del array
fruits.shift ();
console.log (fruits);

// Dentro de una variable también podemos ver lo que eliminó shift
let fruitsShift = fruits.shift ();
console.log (fruitsShift);
console.log (fruits);

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


// Método join. Devuelve el contenido del array en strings.

console.log (numbers.join());

// Por defecto devuelve los elementos separados por comas, pero también se puede asignar otro símbolo o simplemente un espacio

console.log (numbers.join(' '));
console.log (numbers.join('. '));

// Método slice. Crea un nuevo array tomando una porción del array que usamos o pasamos. Debemos indicar índice donde comenzar e índice dónde terminar de cortar +1.
// No modifica el original

console.log (names.slice(0,3));
console.log (names.slice(3,6));

//Con negativos es posible contar de atrás para adelante
console.log (names.slice(1,-2));


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

// Método forEach. Mostrar o traer el elemento o su índice.

function returnValues(value, position) {  
  console.log (`El nombre ${value} está en la posición ${position}`)
}

names.forEach(returnValues);

// Método map. Similar a forEach. Mostrar o traer el elemento o su índice.

const numbers3 = [1, 2, 3, 4, 5]

const double = numbers3.map (function (value) {
  return value * 3;
});

console.log (double);

// Al igual que forEach, map permite recuperar tanto los elementos como sus índices.

function returnValue(value, position) {  
  console.log (`${value} = ${position}`)
}

numbers3.map(returnValue);

// Método filter. Permite generar un nuevo array en base a la función y su condición. Evalúa true o false, cuando el resultado a la condición sea true, ese dato pasará a formar el nuevo array filtrado.

const numeros = [10, 13, 22, 57, 16, 11];

const numersoPares = numeros.filter ((elemento) => {
  return elemento % 2 === 0;
});

console.log (numersoPares);
// numerosPares es un nuevo array que recogió aquellas posiciones que dieron como resultado true


const numersoInpares = numeros.filter ((elemento) => {
  return elemento % 2 === 1;
});

console.log (numersoInpares);

//Veamos un ejemplo con un array de objetos:

const sagaRocky = [
  {
    titulo: "Rocky I",
    age: 1990,
    puntos: 7.8
  },
  {
    titulo: "Rocky II",
    age: 1994,
    puntos: 6.9
  },
  {
    titulo: "Rocky III",
    age: 1998,
    puntos: 5.8

  },
  {
    titulo: "Rocky IV",
    age: 2000,
    puntos: 5.5

  },
  {
    titulo: "Rocky V",
    age: 2004,
    puntos: 6.7
  }
]

const obtenerPuntos = sagaRocky.filter ((elemento) => {
return elemento.puntos > 7;
});

console.log (obtenerPuntos);

// Método some. Con que un solo valor devuelva true, entonces regresa true.

const englishWords = ["I", "You", "We", "Their", "Your", "Us", "between" ]

// Alguna de estas palabras tiene más de 6 caracteres?

// Alguna de estas palabras comienza con u?

// Alguna de estas palabras contiene eir?

const firstCase = englishWords.some ((word) => {
  return word.length > 7
});

console.log (firstCase);

const secondCase = englishWords.some ((word) => {
  return word[0]=== 'b';
});

console.log (secondCase);

const thirdCase = englishWords.some ((word) => {
  return word.includes('eir');
});

console.log (thirdCase);

