// Cada vez que mezcle dará una resultado diferente
function mezclar (array) {
  // Recorre el array de atrás hacia adelante
  for (let i = array.length -1; i > 0  ; i--) {
    // Elije un índice aleatorio antes del elemento actual
    let j = Math.floor (Math.random() * (i + 1));
    //intercambia [a,b] por [b,a]; cambian sus posiciones entre sí.
    [array[i], array[j]] = [array[j], array[i]];
    
  }
  console.log (array);
}