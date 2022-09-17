/* 
JSON - Javascript Objet Notation

Es un estándar en el intercambio de información entre lenguajes de programación (No es exclusivo de JS)

Tipos de datos que acepta:
-Strings
-Numbers
-Objects
-Arrays
-Booleans
-Null

*/

const json = {
  string: "Ezequiel",
  number: 30,
  boolean: true,
  array: ["run", "cook", "sleep"],
  object: {
    email: "eze@das.com",
    web: "ezedas.com"
  },
  null: null
}

// La forma de escribir en formato json. Las variables entre comillas

/*

{
  "string": "Ezequiel",
  "number": 30,
  "boolean": true,
  "array": ["run", "cook", "sleep"],
  "object": {
    "email": "eze@das.com",
    "web": "ezedas.com"
  },
  "null": null
}
*/

// Los métodos de JSON: PARSE y STRINGIFY

// parse convierte una notación de texto a Javascript

console.log(JSON);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse('{"string":"Ezequiel","number":30,"boolean":true,"array":["run","cook","sleep"],"object":{"email":"eze@das.com","web":"ezedas.com"},"null":null}'));

// stringify hace lo contrario. Convierte un objeto de JS a cadena de texto

console.log(JSON.stringify([1,2,3]));

// a un objeto le adiciona automáticamente la doble comilla a la key
console.log(JSON.stringify({a:1,b:2}));
console.log(JSON.stringify(json));