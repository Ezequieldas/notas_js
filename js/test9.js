/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) console.warn ("No ingresaste ningún número");

  if (typeof numero !== "number") return console.warn ("El valor que ingresaste no es un número");

  if (base === undefined) console.warn ("No ingresaste la base a convertir");

  if (typeof base !== "number") return console.warn ("El valor que ingresaste no es una base");

  if (base === 2){
    return console.info (`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
  } else if (base === 10){
    return console.info (`${numero} base ${base} = ${(numero.toString(2))} base 2`);
  } else {
    return console.warn("El valor ingresado no es válido")
  }
}

convertirBinarioDecimal(101001,2);
convertirBinarioDecimal(12,2);


/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/
const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) console.warn ("No ingresaste el monto");

  if (typeof monto !== "number") return console.warn ("El monto que ingresaste no es un número");

  if (monto === 0) return console.warn("El monto no puede ser cero");

  if (Math.sign(monto) === -1) console.error ("El número no puede ser negativo");

  if (typeof descuento !== "number") return console.warn ("El descuento que ingresaste no es un número");

  if (Math.sign(descuento) === -1) console.error ("El descuento no puede ser negativo");

  return console.info (`Monto $${monto}. Descuento ${descuento}% = El monto con descuento es $${monto -((monto * descuento) / 100)}`)
}

aplicarDescuento(100,20)


/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

const calcularFecha = (fecha = undefined) => {
  if (fecha === undefined) return console.warn ("No igresaste ningún dato");

  if (!(fecha instanceof Date)) return console.error ("el valor que ingresaste no es una fecha válida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime()
  fechaEnMS = 1000*60*60*24*365
  dateInYears = Math.floor(hoyMenosFecha/fechaEnMS);

  return (Math.sign(dateInYears) === -1 )
    ? console.info (`Faltan ${Math.abs(dateInYears)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(dateInYears) === 1)
      ? console.info (`Han pasado ${dateInYears} años desde ${fecha.getFullYear()}`)
      : console.info (`Estamos en el año ${fecha.getFullYear()}`)
};

calcularFecha(new Date(1988,4,18))
