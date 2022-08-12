//IF Y SUS VARIANTES

// Condicional if

// Ejemplo
let password = '12345'

if (password.length >= 5) {
  console.log ('Cumple la condición')
}
// Se ejecuta cuando la condición es verdadera
console.log ('continúa')

// Condicional if else

let player = 8

if (player > 0) {
    console.log ("You're not dead");
} else { 
  console.log ("You're dead");
}

console.log ('continúa');

// Condicional if else if

let edad = 34;

if (edad >= 1 && edad <= 12) {
    console.log ("Eres un niño");
} 
else if (edad >= 13 && edad <= 18){
  console.log ("Eres un joven");
} 
else if (edad >= 19 && edad <= 60){
  console.log ("Eres un adulto");
} 
else if (edad >= 61 && edad <= 120){
  console.log ("Eres un anciano");
} 
else {   
  console.log ("Edad ingresada no es válida");
}

let nota = 10;

if (nota === 10) {
    console.log ("Excelente");
} 
else if (nota >= 7 && nota <= 9){
  console.log ("Muy bien");
} 
else if (nota >= 4 && nota <= 6){
  console.log ("Estudia más para la próxima");
} 
else if (nota >= 0 && nota <= 3){
  console.log ("Aplazado");
} 
else {   
  console.log ("Nota mal ingresada");
}

//if anidados

let password2 = "Hola@mundo";

if (password2.length >= 8) {
    console.log ("Primer if, tiene más de 8 caracteres")
    if (password2.indexOf(" ") === -1) {
        console.log ("Segundo if, la cadena no tiene espacios")
      if (password2.indexOf("@") === -1) {
          console.log ("tercer if, la cadena no tiene @")
      }
      else {
        console.log ("No es permitido poner @")
      }
    } 
    else {
      console.log ("No es permitido poner espacios")
    } 
}
else {
  console.log ("La contraseña debe tener al menos 8 caracteres");
}

//No siempre es recomendable tantos anidamientos porque suponen un código muy coomplicado de leer
//Forma resumida

let password3 = "Hola-mundo"

let comprobation = (password3.length >= 8 && password3.indexOf(' ') === -1 && password3.indexOf('@') === -1);
  if (comprobation) {
    console.log ("Password válido");
  }
  else {
    console.log ("INVÁLIDO")
  }


// &&

let condition1 = true;
let condition2 = true;
let condition3 = false;

if (condition1 && condition2 && condition3) {
  console.log ("Great");
} 
else {
  console.log ("Shame")
}