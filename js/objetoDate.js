let fecha = new Date();

console.log(fecha)

// día del mes
console.log(fecha.getDate());
// día de la semana D L M M J V S -> 0 1 2 3 4 5 6
// Según el día en el que estamos muestra la posición como un array. Ejemplo jueves = 4
console.log(fecha.getDay());

// mes del año Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11 12
// Según el mes en el que estamos muestra la posición como un array. Ejemplo agosto = 7
console.log(fecha.getMonth());

// Año
console.log(fecha.getFullYear());

// Con Date podemos obtener horas, minutos, segundo y milisegundos
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

// otro método para obtener la fecha completa como un string
console.log(fecha.toString());

// Sin huso horario
console.log(fecha.toDateString());

// Otra forma
console.log(fecha.toLocaleString());

// Solo la fecha
console.log(fecha.toLocaleDateString());

// Solo la hora
console.log(fecha.toLocaleTimeString());

// Solo el día del huso horario 0
console.log(fecha.getUTCDate());

// Solo la hora del huso horario 0
console.log(fecha.getUTCHours());

// Cuántos segundos pasaron desde el 1 de enero de 1970
console.log (Date.now());


// Librería de javascript especializada en el tiempo: moment.js






