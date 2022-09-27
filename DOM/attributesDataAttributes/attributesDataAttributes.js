/*
 * Acceder a los atributos HTML desde JS
 */

// Recuperar atributo por su nombre(lang)
console.log(document.documentElement.lang);

// con el método getAttribute
console.log(document.documentElement.getAttribute("lang"));

// Se puede utilizar de ambas maneras pero en algunos casos hay pequeñas diferencias
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

// así como podemos obtener también podemos asignar un nuevo elemento al atributo
document.documentElement.setAttribute("lang", "es");
console.log(document.documentElement.getAttribute("lang"));

/* Buena práctica: agregar $ para variables que hagan referencia al dom */

const $linkDOM = document.querySelector(".link-dom");

// Creando un nuevo atributo desde JS
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("href", "https://google.com");

// consultar si existe un atributo
console.log($linkDOM.hasAttribute("target"));

// Borrar un atributo
$linkDOM.removeAttribute("target");


/* Data Attributes */

// data en HTML se declara data-elnombrequeelijamos
console.log($linkDOM.getAttribute("data-description"));

// Obtener un map de los data attributes
console.log($linkDOM.dataset);