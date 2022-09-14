/*

Proxies permite crear un objeto basado en un objeto literal inicial

El proxy va recibir el objeto literal, va a recibir una copia y va a hacer todas las validaciones dentro de la copia que se está creando

*/

const person = {
  nombre: "",
  apellido: "",
  edad: 0
}

// Este objeto dentro de una variable inicializa el objeto copia de proxy
const handler = {
  set(obj, prop,valor){
    obj[prop] = valor;
  }
}

const ezequiel = new Proxy(person, handler);
ezequiel.nombre = "Ezequiel";
ezequiel.apellido = "Das"
ezequiel.edad = 30
// Nueva llave y valor de la copia
ezequiel.correo = "ezequiel@das.com"

console.log(ezequiel)