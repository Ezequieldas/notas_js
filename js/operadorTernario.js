// OPERADOR TERNARIO
// El signo de interrogación (?) opera como un if 
// Los dos puntos (:) operan como un else


let edad = 18


if (edad >= 18) {
  console.log ('Es mayor')
} 
else {
  console.log ('Es menor')
}


// Una forma resumida de if
// condicion ? siEsVerdadero : siEsFalso

edad >= 18 ? console.log ('Es mayor') : console.log ('Es menor');

// Forma resumida dentro de una variable
let resultado = edad >= 18 ? 'Es mayor' : 'Es menor';
console.log (resultado);

// Forma resumida dentro de un console.log
console.log (edad >= 18 ? 'Es mayor' : 'Es menor');