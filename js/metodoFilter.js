// Método filter. Permite generar un nuevo array en base a la función y su condición. Evalúa true o false, cuando el resultado a la condición sea true, ese dato pasará a formar el nuevo array filtrado.

const numeros = [10, 13, 22, 57, 16, 11];

const numerosPares = numeros.filter ((elemento) => {
  return elemento % 2 === 0;
});

console.log (numerosPares);
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
