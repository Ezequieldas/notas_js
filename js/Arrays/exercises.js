/* En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.

La solución debería tener un input y output como los siguientes: */

const arrayNum = [2, 4, 5, 6];

function solution(array) {
 return array.map(item => item * 2)
}; 

console.log(solution(arrayNum))

/*
Tienes un array de productos con los siguientes atributos:

name
price
stock

Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.

 */

let products = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
];

let productsWithTaxes = products.map(item => ({ ...item, 'taxes': Math.trunc( item.price * .19 ) }))

console.log(productsWithTaxes);

/*
 
Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

 */

const elements = ['love','sun','rock','day']

function filterSolution(array) {
	return array.filter(word => word.length >= 4)
}; 

console.log(filterSolution(elements));