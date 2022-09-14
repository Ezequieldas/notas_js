/*
Al igual que set es un nuevo tipo de dato desde ECMA Script 6

Es una colección de datos

*/

let mapa = new Map();

// Para establecer un nuevo valor. Llave y valor.
mapa.set("nombre","Ezequiel");
mapa.set("apellido", "Das");
console.log(mapa);

// Cuántos elementos tiene map:
console.log(mapa.size);

// Verificar si existe una llave
console.log(mapa.has("nombre"));

// Para obtener un valor desde una llave
console.log(mapa.get("nombre"));

// Sobreescribir un valor
mapa.set("nombre","Eze");
console.log(mapa);

// Borrar llave y valor
mapa.delete("nombre");
console.log(mapa);

// Recorrer un Map

for (let [key,value] of mapa){
  console.log(`Llave "${key}" - Valor: "${value}"`)
};

// En Map es posible utilizar llaves que no sean strings (numbers, booleans, etc). A diferencia de los objetos primitivos donde sólo es posible generar llaves mediante strings.

mapa.set(10,"Diez");
mapa.set(null,"null");
console.log(mapa);

// En el primer ejemplo declaramos con un Map vacío pero también se puede inicializar como Set

let mapa2 = new Map ([
  ["nombre", "Hernán"],
  ["apellido", "Gómez"]
]);

console.log(mapa2);

// Podemos acceder a Map con spread 

const keyMap = [...mapa.keys()];
console.log(keyMap);














