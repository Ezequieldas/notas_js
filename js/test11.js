/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined) return console.warn ("no ingresaste un arreglo de números");

  if (!arr instanceof Array) return console.error ("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.warn ("Ingresaste un array vacío");

  for (const num of arr) {
    if (typeof num !== "number")
    return console.error (`El valor "${num}" ingresado NO es un número`);
  }

  const newArray = arr.map(el => el*el);

  return console.info (`Arreglo original = ${arr} / Arreglo elevado al cuadrado = ${newArray}`)
}

devolverCuadrados([2,3,4]);
/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
const arrayMinMax = (array = undefined) => {
  if (array === undefined) return console.warn ("no ingresaste un arreglo de números");

  if (!array instanceof Array) return console.error ("El valor que ingresaste no es un arreglo");

  if (array.length === 0) return console.warn ("Ingresaste un array vacío");

  for (const num of array) {
    if (typeof num !== "number")
    return console.error (`El valor "${num}" ingresado NO es un número`);
  }

  return console.info (`Arreglo original = ${array}\nValor mayor ${Math.max(...array)} / \nValor menor ${Math.min(...array)}`)
}

arrayMinMax([2,-3,8,10]);

/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const arrayParesImpares = (array = undefined) => {
  if (array === undefined) return console.warn ("no ingresaste un arreglo de números");

  if (!array instanceof Array) return console.error ("El valor que ingresaste no es un arreglo");

  if (array.length === 0) return console.warn ("Ingresaste un array vacío");

  for (const num of array) {
    if (typeof num !== "number")
    return console.error (`El valor "${num}" ingresado NO es un número`);
  }

  return console.info ({
    pares: array.filter(num => num % 2 === 0),
    impares: array.filter(num => num % 2 === 1),
  })
}

arrayParesImpares([2,8,11,15,20,1]);

