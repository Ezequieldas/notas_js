// Crear una funcion isValidPassword que acepte dos argumentos, user and pass

// Reglas a cumplir
// 1. pass debe contener al menos 8 caracteres
// 2. pass no debe contener espacios
// 3. pass no debe contener el usuario como parte del mismo en ningún sitio || (pass.indexOf(user) === 1)

// Retornar solo true o false.
let pass = 'password';

function isValidPassword (user, pass) {
  if (pass.indexOf(user) !== -1 || pass.length <= 8 || pass.indexOf(" ") !== -1  ) {
    return false
}
  else return true
}
console.log (isValidPassword('carlos33', 'password1carlos33'));



// Crear una función que reciba un array de números y retorne el promedio de esos números


function promedios (miArray) {

let suma = 0;

for (let notas of miArray) {
  suma += notas;
  }
  promedio = suma / miArray.length;

  return promedio
}

console.log (promedios ([15, 36, 85, 67]));


/* Dada una cadena de texto cualquiera, evaluar si dicha cadena contiene al menos 1 caracter de cada letra del alfabeto, si es así regresar true, de otro modo si falta aunque sea un solo caracter regresar false  */

function abecedario (cadena) {
  const letras = 'abcdefghijklmnoprqrstuvwxyz';
  for (let caracter of letras) {
    console.log (caracter)
    if (cadena.indexOf(caracter) === -1) {
      return false;
    }
  }  
  return true;
}

console.log (abecedario('abcdefghijklmnopqrstuvwxyz'));


// Crear una función que reciba un array con datos y regrese uno de esos datos en forma aleatoria

function randomArray (random) {
    const aleatorio = Math.floor(Math.random() * random.length);
    return random[aleatorio];
}

function dameObjeto () {
  let nombre = randomArray (['Marcos', 'Cristian', 'Luis']);
  let apellido = randomArray (['Paz', 'Martinez', 'Lopez']);
  return {nombre, apellido}
}

console.log (dameObjeto());






