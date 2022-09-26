/*
 * Un nodo es una API que tiene JS para interpretar documentos HTML y XML

  JS recoge elementos de muchos tipos, los principales son tipo texto y tipo atributo
*/

//Obtener un elemento por tipo de clase (deprecated)
console.log(document.getElementsByClassName("card"));

//Obtener un elemento por nombre (deprecated)
console.log(document.getElementsByName("nombre"));

//Obtener un elemento por ID (used)
console.log(document.getElementById("menu"));

// querySelector va a recibir cualquier selector válido de CSS. Reemplaza los que están en desuso (used)
// Es más lento porque debe analizar qué tipo de atributo
console.log(document.querySelector("#menu"));

// Si hay varios elementos devuelve el primero
console.log(document.querySelector(".card"));


// querySelectorAll extrae todos los elementos de ese tipo (used)
console.log(document.querySelectorAll("a"));

