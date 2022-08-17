/*

= 1 igual es asignación
== 2 iguales es comparación de valores
=== 3 iguales es comparación de valores y tipo de dato

*/

/*
&& AND
------------
true && true = true
true && false = false
false && true = false
false && false = false

|| OR
------------
true || true = true
true || false = true
false || true = true
false || false = false

!NOT (invertir o negar)

*/

// Prueba

let misterio = !(false && true);
console.log (misterio);

// Orden de precedencia de operadores lógicos

/*

No corre en orden de izquierda a derecha sino por jerarquía

1. !   NOT
2. &&  AND
3. ||  OR

*/