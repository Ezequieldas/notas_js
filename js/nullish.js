/*
 * Incorporado en ECMAS11.
  nullish entrega un valor por defecto en caso de que el valor sea nulo
 */

  const anotherNumber = null;
  const validate = anotherNumber ?? 5;
  console.log(validate);