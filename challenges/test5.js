/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/
function contarCaracteres (cadena = ""){
  if (!cadena){
    console.warn("No ingresaste ningún dato")
  }
  else {
    console.info(`La cadena '${cadena}' tiene ${cadena.length} caracteres`)
  }
}
contarCaracteres("Hola mundo");

// Solución en una linea
const contarCaracteres2 = (cadena = "") => 
(!cadena) 
  ? console.warn("No ingresaste ningún dato") 
  : console.info(`La cadena '${cadena}' tiene ${cadena.length} caracteres`);

contarCaracteres2 ("Hello world");

/* 
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
const recortarTexto = (cadena = "", longitud = undefined) => (!cadena)
? console.warn ('No ingresaste una cadena de texto')
: (longitud === undefined)
  ? console.warn ('No ingresaste el corte de la cadena')
  : console.info (cadena.slice(0,longitud));

recortarTexto("Hola mundo", 4);
recortarTexto ();
recortarTexto ('Hola mundo');

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

const cadenaAAreglo = (cadena = "", separador = undefined) => (!cadena)
? console.warn ('No ingresaste una cadena de texto')
: (separador === undefined)
  ? console.warn ('No ingresaste el separador de la cadena')
  : console.info (cadena.split(separador));

cadenaAAreglo("lorem ipsum dolor sit", ' ')

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repetirTexto = (texto = '', veces = undefined) => {
  if (!texto) return console.warn ("No ingresaste texto");
  if (veces === undefined) return console.warn ("No ingresaste el número de repetición deseado");
  if (veces === 0) return  console.warn ("El número de veces no puede ser 0");
  if (Math.sign(veces) === -1) return console.warn ("El número de veces no puede ser negativo");

  for (let i = 1 ; i <= veces ; i++) console.info (`${texto}, ${i}`);
};

repetirTexto ("Hola mundo", 5);




