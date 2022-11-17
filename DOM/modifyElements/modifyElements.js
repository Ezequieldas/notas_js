/* Old school */

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

  $newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
  `;

  $newCard.classList.add("card");

  // //Reemplazar un elemento
  // $cards.replaceChild($newCard, $cards.children[2]);

  // // Insertar un elemento antes
  // $cards.insertBefore($newCard, $cards.firstElementChild);

  // // Eliminar un elemento
  // $cards.removeChild($cards.lastElementChild)

  // document.body.appendChild($cloneCards);


  /* New school */

  // insertar en el elemento hermano anterior
  // $cards.insertAdjacentElement("beforebegin", $newCard);

  // // insertar en el primer hijo
  // $cards.insertAdjacentElement("afterbegin", $newCard);

    // insertar en el elemento hermano posterior
    $cards.insertAdjacentElement("afterend", $newCard);
