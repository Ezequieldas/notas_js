const $whatIsDOM = document.getElementById("que-es");

let newText = `
<p>Fugiat ad in ullamco irure tempor laborum. </p>
Esse qui velit aliqua labore adipisicing officia anim <p>mollit culpa minim eiusmod fugiat voluptate dolor. </p>
Cillum ut et do <strong>laboris sit mollit adipisicing </strong> magna cillum Lorem sint elit excepteur magna. Et labore nisi Lorem ad amet. Voluptate laboris ullamco <br><br> nisi nostrud et aliquip ad. Duis aute sunt qui excepteur enim labore nostrud elit in est cillum laborum
`;

// Inyectar solo texto desde JS
$whatIsDOM.textContent = newText;

// Inyectar código HTML desde JS
$whatIsDOM.innerHTML = newText;

// outerHMTL reemplaza todos los elementos del código HTML por el nuevo
$whatIsDOM.outerHTML = newText;
