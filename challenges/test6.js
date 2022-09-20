/*
5- Programa una función que invierta las palabras de una cadena de texto. Por ej, miFuncion ("Hola mundo") devolverá ("odnum aloH")
*/
const invertirCadena = (cadena = "") =>
(!cadena)
? console.warn ("No ingresaste una cadena de texto")
: console.info (cadena.split("").reverse().join(""));

invertirCadena("Hola mundo");
/*
6- Programa una función para contar el número de veces que se repite una palabra en un texto largo. Por ejemplo, ("Hola mundo, adios mundo") devolverá 2
*/
const textoEnCadena = (cadena = "", texto = "" ) => {
  if (!cadena) return console.warn("No ingresaste el texto largo");
  if (!texto) return console.warn("No ingresaste la palabra a comparar");
  
  let i = 0,
  contador = 0;

  //while compara las coincidencias e incrementa hasta que ya no haya
  while (i !== -1){
    i = cadena.indexOf(texto,i);
    if(i !== -1){
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador}veces`)
}

textoEnCadena();
textoEnCadena("Hola mundo, adios mundo")
textoEnCadena("Hola mundo, adios mundo","mundo");

/*
7- Programa una función que valide si una palabra o frase dada, es un palídromo (que se lee igual en un sentido que en otro). Por ejemplo miFuncion ("salas") devolverá true
*/
const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return (palabra === alReves) 
    ? console.info (`sí es palíndromo. Palabra original: ${palabra}. Palabra al revés ${alReves}` )
    : console.info (`no es palíndromo. Palabra original: ${palabra}. Palabra al revés ${alReves}` )
}

palindromo("hola mundo");
palindromo("salas")

/* 
8- Programa una función que elimine cierto patrón de caracteres de un texto dado. Por ejemplo miFuncion ("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz") devolverá "1, 2, 3, 4, 5"
*/

const eliminarCaracteres = (texto = "", patron = "") =>
(!texto)
  ? console.warn ("No ingresaste un texto" )
  : (!patron)
  ? console.warn ("No ingresaste un patrón" )
  : console.info (texto.replace(new RegExp(patron,"ig"), ""));
  
  eliminarCaracteres ();
  eliminarCaracteres ("xyz1, xyz2, xyz3, xyz4, xyz5");
  eliminarCaracteres ("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")
  eliminarCaracteres("Ullamco enim duis proident in elit incididunt est. Culpa occaecat exercitation eu culpa. Non nostrud cillum enim officia ad dolor incididunt eu. Sit irure sit pariatur culpa velit aliqua. Et amet sit magna anim incididunt reprehenderit consectetur consequat dolore laboris. Et aliqua id ut exercitation qui elit occaecat eiusmod amet duis occaecat ut reprehenderit.", "o")

  
