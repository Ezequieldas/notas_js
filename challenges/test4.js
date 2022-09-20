// Crear un mazo de cartas 1, 2, 3, 4, 5, 6, 7, 10, 11, 12
// Crear oro, espada, copa, basto
function crearMazo () {
  const tipos = ['espada', 'oro', 'basto', 'copa'];
  const numeros = '1,2,3,4,5,6,7,10,11,12';
  const mazo = [];
  for (let numero of numeros.split (',')){
    for (let tipo of tipos) {
      mazo.push ({numero, tipo});
    }
  }
return mazo;
}

console.log(crearMazo());

/*
Crear un nuevo mazo, en base a ese mazo crear una función que me permita repartir una carta. Debo obtener la carta que estoy repartiendo y el mazo debe tener una carta menos, la carta repartida.
*/

const nuevoMazo = crearMazo();

function repartirUnaCarta (mazo) {
 return mazo.pop ();
};

console.log (repartirUnaCarta(nuevoMazo));
console.log (nuevoMazo);

// Vamos a hacerlo con un objeto para que sea más funcional
const objeto = {
  tipos : ['espada', 'oro', 'basto', 'copa'],
  numeros : '1,2,3,4,5,6,7,10,11,12',
  mazo : [],
  cartasRepartidas : [],

  crearMazo () {
    const {tipos, numeros, mazo} = this;
    for (let numero of numeros.split (',')){
      for (let tipo of tipos) {
        mazo.push ({numero,tipo});
      }
    }
  },
  repartirUnaCarta (mazo) {
    const carta = this.mazo.pop ();
    this.cartasRepartidas.push(carta);
    return carta;
  },

  repartirVariasCartas (numCartas) {
      const cartas = [];
      for (let i = 0 ; i < numCartas ; i++) {
        cartas.push(this.repartirUnaCarta());  
      }
      return cartas
  },

  mezclar () {
    const {mazo} = this;
  for (let i = mazo.length -1; i > 0  ; i--) {
    let j = Math.floor (Math.random() * (i + 1));
    [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
    
  }
  console.log (mazo);
}
}

objeto.crearMazo();
console.log (objeto.mazo);

// Llamamos a la función mezclar para barajar el mazo
objeto.mezclar ();

let carta1 = objeto.repartirUnaCarta();
let carta2 = objeto.repartirUnaCarta();
let carta3 = objeto.repartirUnaCarta();
console.log (carta1);

// Crear un array llamado cartasRepartidas que se actualice automáticamente y muestre cada carta que fue repartida.
console.log (objeto.cartasRepartidas);

// Crear un método llamado repartirVariasCartas que guarde en un nuevo array llamado (cartas) las cartas repartidas y que implemente el método repartirUnaCarta.
console.log (objeto.repartirVariasCartas(7));
console.log (objeto.mazo)


// Mezclar mazo (Algoritmo aleatorio de Fisher Yates o algoritmo de codificación de Knuth)


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
};




