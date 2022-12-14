/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const ordenarArreglos = (array = undefined) => {
  if (array === undefined) return console.warn ("no ingresaste un arreglo de números");

  if (!array instanceof Array) return console.error ("El valor que ingresaste no es un arreglo");

  if (array.length === 0) return console.warn ("Ingresaste un array vacío");

  for (const num of array) {
    if (typeof num !== "number")
    return console.error (`El valor "${num}" ingresado NO es un número`);
  };

  return console.info ({
    array,
    asc: array.map (el => el).sort(),
    desc: array.map (el => el).sort().reverse()
  });
}

ordenarArreglos([2,4,8,6,9,1]);

/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

const quitarDuplicados = (array = undefined) => {
  if (array === undefined) return console.warn ("no ingresaste un arreglo de números");

  if (!array instanceof Array) return console.error ("El valor que ingresaste no es un arreglo");

  if (array.length === 0) return console.warn ("Ingresaste un array vacío");

  return console.info ({
    original: array,
    sinDuplicados: array.filter((value, index, self) => self.indexOf(value) === index)
  });
}

quitarDuplicados(["x", "x", 10, 10]);

/*
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const obtenerPromedio = (array = undefined) => {
  if (array === undefined) return console.warn ("no ingresaste un arreglo de números");

  if (!array instanceof Array) return console.error ("El valor que ingresaste no es un arreglo");

  if (array.length === 0) return console.warn ("Ingresaste un array vacío");

  for (const num of array) {
    if (typeof num !== "number")
    return console.error (`El valor "${num}" ingresado NO es un número`);
  };

  return console.info (
    array.reduce((total,num,index,array)=>{
      total += num;
      if (index === array.length -1){
        return `El promedio de ${array.join(" + ")} es ${total / array.length}`
      } else {
        return total;
      }
    })
  );
}

obtenerPromedio([2,4,5,6,8]);

