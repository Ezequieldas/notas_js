// MÓDULOS

/*

Importar elementos de otros archivos

Usar type = "module" en el script de HTML

Usar export antes de la variable en el archivo del cual se va exportar

Usar export defualt para que cargue esa variable o función por defecto

*/

// Los módulos se asignan en primer lugar

//import {dameUnNumero} from "./functions.js"

//console.log (dameUnNumero);
// Quokka no funciona con archivos importados

import {aritmetica} from "./aritmetica.js"

// Aplicamos la función importada y funciona
console.log(aritmetica.sumar(3,4));


// Cómo declarar export default en variables
let name = "Ezequiel";
export default name;
// export default se declara después

// Renombrar archivo importado

import {aritmetica as op} from "./aritmetica.js"

// Cambiamos una palabra larga poruna más corta
console.log(op.restar(12,3));
