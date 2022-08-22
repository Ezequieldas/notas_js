// OBJECT MATH
// Math cuenta con una serie de propiedades nativas que nos permiten hacer algunos cálculos

//OBTENER EL NÚMERO PI
console.log (Math.PI);

//MOSTRAR SOLO 2 DECIMALES
console.log (Math.PI.toFixed(2));

//FLOOR. QUITAR LOS DECIMALES O REDONDEAR PARA ABAJO
console.log (Math.floor(5.60));

// CEIL. QUITAR LOS DECIMALES O REDONDEAR PARA ARRIBA
console.log (Math.ceil(2.4));

// ROUND. REDONDEAR UN NÚMERO AL MÁS CERCANO INMEDIATO
console.log (Math.round(4.51));
console.log (Math.round(Math.PI));

//PASAR UN NÚMERO A SU VALOR ABSOLUTO O POSITIVO
console.log (Math.abs(-404)); 

//CALCULAR LA POTENCIA
console.log (Math.pow(2,3));
// O du equivalente
console.log (2**3);

// SQRT. OBTENER LA RAIZ CUADRADA
console.log (Math.sqrt(81));


//CREAR UN NÚMERO ALEATORIO ENTRE 0 Y 1
console.log (Math.random());

//CREAR UN NÚMERO ALEATORIO ENTRE 0 Y 10 CON FRACCIÓN
console.log (Math.random() * 10 + 1);

//CREAR UN NÚMERO ALEATORIO ENTRE 0 Y 100
console.log (Math.floor(Math.random() * 100 + 1));

// SIGN. NOS INDICA SI EL VALOR ES POSITIVO, NEGATIVO O CERO
console.log (Math.sign(12));
console.log (Math.sign(-12));
console.log (Math.sign(0))


