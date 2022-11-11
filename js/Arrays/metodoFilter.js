/*

 Método filter. Permite generar un nuevo array en base a la función y su condición. Evalúa true o false, cuando el resultado a la condición sea true, ese dato pasará a formar el nuevo array filtrado.

 Importante: no modifica el array original
*/

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
    title: "Rocky I",
    age: 1990,
    points: 7.8
  },
  {
    title: "Rocky II",
    age: 1994,
    points: 6.9
  },
  {
    title: "Rocky III",
    age: 1998,
    points: 5.8

  },
  {
    title: "Rocky IV",
    age: 2000,
    points: 5.5

  },
  {
    title: "Rocky V",
    age: 2004,
    points: 6.7
  }
]

const points = sagaRocky.filter ((elemento) => {
return elemento.points > 7;
});

console.log (points);


// Creamos un buscador con filter e includes
const orders = [
  {
    customerName: 'Juan',
    total: 150,
    delivered: true
  },
  {
    customerName: 'Nicolas',
    total: 120,
    delivered: true
  },
  {
    customerName: 'Ana',
    total: 180,
    delivered: true
  },
  {
    customerName: 'Sofía',
    total: 100,
    delivered: true
  },
  {
    customerName: 'Nicolas',
    total: 130,
    delivered: false
  },
]

const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  })
}

console.log(search("Nico"));

const fourLetters = () => {
  return orders.filter(item => {
    if (item.total >= 140) {
      return item.total
    }
  })
}

console.log(fourLetters("Nico"));
