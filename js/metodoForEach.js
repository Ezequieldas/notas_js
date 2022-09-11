// Método forEach. Mostrar o traer el elemento o su índice.

// const names = ['John', 'Michael', 'Richard', 'Robert', 'Anna', 'Steven', 'Lucy'];


// function returnValues(value, position) {
//   console.log (`El nombre ${value} está en la posición ${position}`)
// }

// names.forEach(returnValues);

const names = ['John', 'Michael', 'Richard', 'Robert', 'Anna', 'Steven', 'Lucy'];

const result = names.find((name) => {
  return name.includes ('John')
});

console.log(result);