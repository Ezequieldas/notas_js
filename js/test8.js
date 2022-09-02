/*
12- Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y por 1) o no. Por ejemplo miFuncion (7) devolverá true
*/
const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) console.warn ("No ingresaste ningún número");

  if (typeof numero !== "number") return console.error ("El valor que ingresaste no es un número");

  if (numero === 0) return console.error ("El número no puede ser 0");

  if (Math.sign(numero) === -1) console.error ("El número no puede ser negativo");

  let divisible = false;
  for (let i = 2; i < numero ; i++) {
    if((numero % i) === 0 ){
      divisible = true;
      break;
    }
  };

  return(divisible)
  ? console.info (`El número ${numero} NO es primo`)
  : console.info (`El número ${numero} es primo`)
} 

numeroPrimo (10);
/*
13- Programa una función que determine si un número es par o impar. Por ejemplo miFunción (29) devolverá impar
*/
const esParOImpar = (numero = undefined) => {
  if (numero === undefined) console.warn ("No ingresaste ningún número");

  if (typeof numero !== "number") return console.error ("El valor que ingresaste no es un número");

  return((numero % 2) === 0)
  ? console.info (`El número ${numero} es par`)
  : console.info (`El número ${numero} NO es par`)
} 

esParOImpar (22);

/*
14- Programa una función para convertir grados Celsius a Farenheit y viceversa. Por ejemplo 0 grados Celsius son 32 grados Farenheit
*/
const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined) console.warn ("No ingresaste ningún grado");

  if (typeof grados !== "number") return console.error (`El valor ${grados} no es un número`);

  if (unidad === undefined) return console.error ("No ingresaste unidad a convertir");

  if (typeof unidad !== "string") return console.error (`${unidad} no es un valor correcto`);

  if (unidad.length !== 1|| !/(C|F)/.test(unidad)) return console.error (`${unidad} no es reconocido`);

  if (unidad === "C"){ 
    return console.info (`${grados}°C = ${Math.round((grados *(9/5)) + 32)}°F`) 
  } else if (unidad === "F"){ 
    return console.info (`${grados}°F = ${Math.round(((grados -32) *(5/9)))}°C`) 
} 
}

convertirGrados (0,"C")
convertirGrados (85,"F")
convertirGrados (0)