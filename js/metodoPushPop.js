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