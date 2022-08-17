// Manejo de errores en JS

//Estructura que nos va a permitir evaluar fragmentos de código. 

// Veamos cómo se compone:

// try {
//'En try se agrega el código a evaluar'
// } catch (error) {
//'Catch captura cualquier error surgido o lanzado en el try'
// } finally {
//'El bloque finally se ejecutará siempre al final de un bloque try-catch'
// }

// Este código no presenta problemas y ejecuta try
try {
  console.log ('Sin problemas')
} catch (error) {
  console.log ('Problema detectado')
} finally {
  console.log('Se ejecuta siempre')
};

// Este código detecta un problema y ejecuta catch
try {
  problema;
  console.log ('Sin problemas');
} catch (error) {
  console.log ('Problema detectado')
} finally {
  console.log('Se ejecuta siempre')
};

// Personalizando el error
try {
  let numero = 'hola';

    if (isNaN(numero)){
      throw new Error ("No has ingresado un número")
    }

    else {
      console.log (numero*numero)
    }
} catch (error) {
  console.log (`Lo siento, se ha producido el siguiente problema. ${error}`)
} finally {
  console.log('Se ejecuta siempre')
};

