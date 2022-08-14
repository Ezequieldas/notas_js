// COMPUTED PROPERTIES

// Obtener directamente el valor de una variable con []

const profesion = 'programador';
const nombre = 'Ezequiel';

const profesion2 = 'Diseñador';
const nombre2 = 'Andrea';

// Dentro de [] Javascript resuelve el valor de la variable

const objeto = {
  [profesion] : nombre,
  [profesion2] : nombre2,
}
// Aquí lo que estamos construyendo es que el valor de la variable se convierte en la key del objeto

console.log (objeto);

