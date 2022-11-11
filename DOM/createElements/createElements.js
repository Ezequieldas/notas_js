const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");

// appendChild = agregar un hijo
$cards.appendChild($figcaptionText);
$cards.appendChild($img);
$cards.appendChild($figcaption);
$cards.appendChild($figure);

$img.setAttribute("src", "https://placeimg.com/200/200/animals")


// Dos formas diferentes de instertar contenidos
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
$ul = document.createElement("ul");

document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
 $ul2 = document.createElement("ul");

document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`))

