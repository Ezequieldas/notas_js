// BUCLE WHILE (mientras)

// Nos puede servir en casos donde no sabemos exactamente cuantas veces se tiene que ejecutar el bucle

// Comencemos por un ejemplo sencillo:

let contador = 0;
// mientras se cumpla la condición el bucle debe ejecutarse
while (contador < 10) {
// cuando ya no se cumpla el bucle corta
  console.log (contador);
  contador ++;
};


// Vamos a construir una lotería virtual

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

// En lugar de usar while (mientras) para comparar que dos variables fueran diferentes, lo que hicimos fue que cuando la condición fuera verdadera cortara el bucle con un break


// DO WHILE

let contador2 = 0;
do {
  console.log (contador2);
  contador2 ++;
} while (contador2 < 11) ;

// Similar a while
// Do hace que se ejecute el bucle
// While pone la condición para que se detenga
