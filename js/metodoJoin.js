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