const $whatIsDOM = document.getElementById("que-es");

let newText = `
<p>Este es un texto insertado con Javascript, que reemplaza a otro <b>párrafo</b> estático. </p>
`;

// Inyectar solo texto desde JS (también es válido innerText)
$whatIsDOM.textContent = newText;

// Inyectar código HTML desde JS
$whatIsDOM.innerHTML = newText;

// outerHMTL reemplaza todos los elementos del código HTML por el nuevo
$whatIsDOM.outerHTML = newText;
