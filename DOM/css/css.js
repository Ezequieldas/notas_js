/** Acceder a los atributos CSS */

const $linkDOM = document.querySelector(".link-dom");

// Muestra en consola todas las propiedades css válidas
console.log($linkDOM.style);

// Solo accede a las propiedades declaradas
console.log($linkDOM.getAttribute("style"));

// Acceder a la propiedad (importante: en JS no se utiliza guion, sino lowerCamelCase)
console.log($linkDOM.style.fontFamily);

// Acceder a todas las propiedades por defecto del elemento HTML
console.log(window.getComputedStyle($linkDOM));

//Establecer valores con setProperty
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");

//Establecer valores con la notación de puntos
$linkDOM.style.width = "50%";
$linkDOM.style.border = "1px solid black";

console.log($linkDOM.style);

// Variables CSS - Custom properties
const $html = document.documentElement;
$body = document.body;

let vaDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
vaYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(vaDarkColor, vaYellowColor);

$body.style.backgroundColor = vaDarkColor;
$body.style.color = vaYellowColor;

const $card = document.querySelector(".card");
console.log($card);

// Listar las clases CSS de un elemento
$card.classList;

// Agregar una nueva clase CSS (con separación de coma se puede agregar más de una)
$card.classList.add("rotate-45");
$card.classList.add("sepia");

// Remover una clase CSS (con separación de coma se puede eliminar más de una)
$card.classList.remove("sepia");

// toggle invierte el estado de la clase: si no la tiene la agrega, si la tiene la remueve
$card.classList.toggle("opacity-50");

// replace reemplaza una clase por otra
$card.classList.replace("rotate-45","rotate-135");



