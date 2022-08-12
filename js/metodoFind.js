// Método find.  Busca dentro de un array y retorna el valor del primer elemento del array que satisface el pedido de la función. Regresa el primer valor que sea true y se detiene.

const animals2 = ['cat', 'dog', 'bird', 'fox']

const result2 = animals2.find ( (animal) => {
  return animal.includes ('fox')
})

console.log (result2);

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

const pelis2000 = sagaRocky.find ((objeto) => {
  return objeto.age >= 2000;
});
console.log (pelis2000);