// Bucle while (mientras)
// Nos puede servir en casos donde no sabemos exactamente cuanta veces se tiene que ejecutar el bucle

// Ejemplo: 

const numeroSecreto = Math.floor(Math.random()*100);
console.log (numeroSecreto);

let numeroMaquina = Math.floor(Math.random()*100);
console.log (numeroMaquina);

let intentos = 1;

while (numeroSecreto !== numeroMaquina) {
  console.log (`${numeroSecreto} versus ${numeroMaquina}`)

  numeroMaquina = Math.floor(Math.random()*100)
  intentos++
  
}
console.log (`Termina el bucle. Coincidencia en el número ${numeroSecreto}`)

console.log (`Ganamos luego de ${intentos} intentos. We are the best!`);

// Cuando se cumple la condición, el bucle corta.

// Romper el bucle con break
while (true) {
  if (numeroSecreto === numeroMaquina) break;
  console.log (`${numeroSecreto} versus ${numeroMaquina}`)
  numeroMaquina = Math.floor(Math.random()*100)
  intentos++
  
}
console.log (`Termina el bucle. Coincidencia en el número ${numeroSecreto}`)

console.log (`Ganamos luego de ${intentos} intentos. We are the best!`);

// En lugar de usar while (mientras) para comparar dos que dos variables fueran diferentes, lo que hicimos fue que cuando la condición fuera verdadera cortara el bucle con un break

