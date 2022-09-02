/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn ("No ingresaste una cadena de texto");

  if (typeof cadena !== "string") return console.warn (`${cadena} no es una cadena de texto`);

  let vocales = 0;
    consonantes = 0;

    cadena = cadena.toLowerCase();

    for (const letra of cadena) {
      if (/[aeiouáéíóú]/.test(letra))vocales++;

      if (/[bcdfghjklmnpqrstwxyz]/.test(letra))consonantes++;
    }
      
      return console.info ({
        cadena,
        vocales,
        consonantes
      });
}

contarLetras("Hola Mundo");
contarLetras("LoremAd ipsum enim laborum non Lorem tempor consequat adipisicing eiusmod ullamco commodo sit amet eiusmod. Quis laborum minim voluptate fugiat in quis exercitation aute. Sunt veniam ad in dolore commodo et")

/*
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero
*/

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn ("No ingresaste una cadena de texto");

  if (typeof nombre !== "string") return console.warn (`${nombre} no es una cadena de texto`);

let expReg = /^[A-Za-zÑñáéeíóúÁÉÍÓÚ?\s]+$/g.test(nombre);

return (expReg)
  ? console.info (`${nombre} es un nombre válido`)
  : console.warn (`${nombre} NO es un nombre válido`)
}

validarNombre("Ezequiel Das")
/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

const validarEmail = (email = "") => {
  if (!email) return console.warn ("No ingresaste una cadena de texto");

  if (typeof email !== "string") return console.warn (`${email} no es una cadena de email válida`);

let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

return (expReg)
  ? console.info (`${email} es un correo válido`)
  : console.warn (`${email} NO es un correo válido`)
}

validarEmail("Ezequiel@gmail.ar")