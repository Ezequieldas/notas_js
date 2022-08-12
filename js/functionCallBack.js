//Es una funcion CALLBACK porque recibe como parámetro una función

function comprar (articulo1, articulo2, funcion) {
  let gastado = articulo1 + articulo2;
  funcion (gastado);
}

function verTotal (mensaje) {
  console.log (`Compramos leche y pan - gastamos ${mensaje}`);
}

comprar (65, 70, verTotal);