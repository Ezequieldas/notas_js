// Operaciones matemáticas habituales

let a = 5,
    b = 2,
    resultado = 0;

resultado = a + b;
console.log(resultado);

resultado = a - b;
console.log(resultado);

resultado = a * b;
console.log(resultado);

resultado = a / b;
console.log(resultado);

// Modulo: es el resto, el númeo que queda cuando ya no puedo seguir dividiendo

resultado = a % b;
console.log(resultado);

//potencia: a es la base y b es el exponente
resultado = a ** b;
console.log(resultado);

//orden de precedencia: * / se resuelve antes que + - excepto que se asigne prioridad mediante ()
resultado = 2 + 2 * 5;
console.log(resultado);

resultado = (2 + 2) * 5;
console.log(resultado);

a = 10;

a += 5; //a = a + 5; toma el valor de la variable y lo suma con el segundo número

console.log(a);

a -= 5; //a = a - 5; toma el valor de la variable y lo resta con el segundo número
console.log(a);

a *= 5; //a = a * 5; toma el valor de la variable y lo multiplica con el segundo número
console.log(a);

a /= 5; //a = a / 5; toma el valor de la variable y lo divide con el segundo número
console.log(a);

a %= 5; //a = a % 5; toma el valor de la variable y da el resto de la operación con el segundo número
console.log(a);

a **= 5; //a = a ** 5; toma el valor de la variable y lo potencia con el segundo número
console.log(a);