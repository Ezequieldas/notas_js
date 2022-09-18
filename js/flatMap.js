/*
 * flat se incorpora con ECMAS10. Es una herramienta para "aplanar" un array. Es decir dejarlo en un solo nivel 
 */

const array = [1,2,3,[2,3,4,[3,4,5]]];
console.log(array.flat(3));

/*
 * flatMap también se incorpora con ECMAS10. Devuelve el array transformado
 */

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v*2]));