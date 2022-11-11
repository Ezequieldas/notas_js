/*
 * flat se incorpora con ECMAS10. Es una herramienta para "aplanar" un array. Es decir dejarlo en un solo nivel 
 */


const array = [1,2,3,[2,3,4,[3,4,5]]];
// Si hay más de dos niveles debemos indicarle a flat cuántos hay
console.log(array.flat(3));

/*
 flatMap también se incorpora con ECMAS10. Permite pasar una función y devolver el array transformado

Es una fusión de flat y map :)
 */

const array2 = [1,2,3,4,5];

console.log(array2.flatMap(v => [v*2]));

// Podemos aplicarle flatMap a un objeto y reunir sus atributos en un solo array
const users = [
  {
    userId: 1,
    username: 'Tom',
    attributes: ['Nice', 'Cute']
  },
  {
    userId: 1,
    username: 'Mike',
    attributes: ['Lovely']
  },
  {
    userId: 1,
    username: 'Nick',
    attributes: ['Funny', 'Cool']
  },
];

const newArray = users.flatMap(user => user.attributes);
console.log(newArray)

// Antes de que exista flat se iteraba con for anidados

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

const flatArray = []

for(let i=0; i < matrix.length; i++){
  const array = matrix[i]
  for(let j=0; j < array.length; j++){
    flatArray.push(array[j]) // o matrix[i][j]
  }
}

console.log(flatArray)