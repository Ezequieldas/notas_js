/*
9- Programa una función que obtenga un número aleatorio entre 501 y 600
*/

const numeroAleatorio = () => console.log (Math.round(Math.random() * 100) + 500)

numeroAleatorio();
/*
10- Programa una función que reciba un número y evalúe si es capicúa o n(o (que se lee igual en un sentido que en otro) Por ejemplo miFuncion(2002) devolverá true
*/

const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un número");

  if (typeof numero !== "number") return console.error ("El valor que ingresaste no es un número")

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");
  return (numero === alReves)
  ? console.info (`Sí es capicúa. número original ${numero}. Número al revés ${alReves}`)
  : console.info (`No es capicúa. número original ${numero}. Número al revés ${alReves}`)
}

capicua (2002)

/*
10- Programa una función que calcule el factorial de un número (el factorial de un entero positivo n, se define como el producto de todos los números positivos desde uno hasta n) Por ejemplo miFuncion(5) devolverá 120
*/

const factorial = (numero = undefined) => {
  if (numero === undefined) console.warn ("No ingresaste ningún número");

  if (typeof numero !== "number") return console.error ("El valor que ingresaste no es un número");

  if (numero === 0) return console.error ("El número no puede ser 0");

  if (Math.sign(numero) === -1) console.error ("El número no puede ser negativo");

  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info (`El factorial de ${numero} es ${factorial}`)
} 

factorial (5);