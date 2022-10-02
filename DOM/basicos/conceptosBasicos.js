
/*

API - Aplication Programming Interface

DOM - Document Object Model

BOM - Browser Object Model

CSSOM - CSS Object Model

Manipulación de HTML mediante JS

*/



  // Modificar el texto original de HTML
  let nuevoTitulo = document.getElementById ('titulo');
  nuevoTitulo.textContent = ('Cambiando el título con DOM');

  let nuevoParrafo = document.getElementById ('texto');
  nuevoParrafo.textContent = ('Hola mundo');

  let nuevaImagen = document.getElementById ('foto');
  nuevaImagen.src = ("https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OF3SZKCXHZADLOGT3V5KFAXG4E.png");

  // querySelector. Para seleccionar el elemento de HTML con el nombre genérico, su clase o id
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');
  const texto = document.querySelector('#texto');
  const foto = document.querySelector('#foto');
  const input = document.querySelector('input');

  console.log ({
    h1,
    texto,
    foto,
    input
  })

  // querySelectorAll. Selecciona todos los elementos de ese tipo
  const p = document.querySelectorAll('p');
  console.log(p)

  // innerHTML. Modificar directamente cualquier elemento HTML que cuente con ID.
  txt.innerHTML = "Texto inyectado con innerHTML";

  // innerHTML también interpreta los símbolos de HTML
  texto2.innerHTML = 
  `
  <h3>Cambiamos texto plano por lista de las compras</h3>
  <ul>
    <li>Pan</li>
    <li>Queso</li>
    <li>Leche</li>
  </ul>
  `;

  // innerText. Cambiar solo texto
  innerTXT.innerText = "Nuevo texto inyectado con innerText"

  // Obtener un atributo de un elemento HTML
  console.log(h1.getAttribute('class'));

  // Modificar un atributo de un elemento HTML
  h2.setAttribute('class', 'nuevoValorconSet');

  // classList.add - Agregar nuevas clases
  h1.classList.add("nuevaClase");

   // classList.remove - Eliminar una clase
   h1.classList.remove("nuevaClase");

   // Value. Valor por defecto
   input.value = "123"

   // createElement. Crear el documento que queramos
   console.log(document.createElement('span'));

   const img = document.createElement('img');
   img.setAttribute('src','https://cdn.pixabay.com/photo/2022/09/04/20/11/plane-7432680_960_720.jpg');

   console.log(img);

   texto.append(img);