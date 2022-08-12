/* REDUCE

Ejecuta una función por cada elemento del array para que resulte en un único valor


El primer parámetro opera como un acumulador
[2,4,6,8,10].reduce (acumulador, valorActual) => (acumulador + valorActual)

*/ 

console.log ([2,4,6,8].reduce ((acumulador, valorActual) => (acumulador * valorActual)));

// Ejemplo
const numeros = [20, 52, 85, 69, 10];

// Programa para obtener el número menor del array
const resultado = numeros.reduce ((menor, valorActual) => {
  if (valorActual > menor) return menor;
    return valorActual;
});

console.log (resultado);

// Para obtener el mayor invertimos los roles
const resultado2 = numeros.reduce ((mayor, valorActual) => {
  if (valorActual < mayor) return mayor;
    return valorActual;
});

console.log (resultado2);

// También lo podemos hacer con el método Math.max

const resultado3 = numeros.reduce ((mayor, valorActual) => {
  return Math.max (mayor,valorActual);
  // Math.max compara los dos valores y devuelve el mayor. Al hacerlo dentro del reduce, se comporta como un bucle.
});

console.log (resultado3);

// Así mismo, para obtener el menor podríamos utilizar Math.min

const votos = ['yes','yes','no','yes','no','no','yes' ];

// Resultados es la variable constante donde va a guardar el objeto resultante
const resultados = votos.reduce ((total, porCadaVoto) => {
  if (total[porCadaVoto]) {
    total[porCadaVoto]++;
  }
  else {
    total [porCadaVoto] = 1;
  }
  return total;
}, {});

console.log(resultados);


