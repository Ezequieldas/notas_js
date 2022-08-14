// SHORT HAND PROPERTIES
/*
No soportado por Explorer

Con una función podemos crear un objeto nuevo directamente
*/

// Ejemplo: Tomamos datos de un array y los organizamos

const arrayDatos = [4,8,32,31,13,17,24]

const dameResultados = (array) => {
  // Estas variables serán directamente las keys del nuevo objeto creado
  const max = Math.max (...array);
  const min = Math.min (...array);
  const suma = array.reduce ((acumulador, valorActual) => acumulador + valorActual);
  const promedio = suma / array.length
  return {
    max,
    min,
    suma,
    promedio
  }
}

const resultados = dameResultados(arrayDatos);

console.log (resultados)