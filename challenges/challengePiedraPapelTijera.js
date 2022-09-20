// Juego piedra, papel, tijera con condicional if

function game(gamer, machine) {

  if ((gamer === "piedra" && machine === "tijera") || (gamer === "papel" && machine === "piedra") || (gamer === "tijera" && machine === "papel")) {
    console.log (`Escogiste ${gamer} y tu rival escogió ${machine}. Ganaste! Eres el duro de este juego`);
} else if ((gamer === "piedra" && machine === "papel") || (gamer === "papel" && machine === "tijera") || (gamer === "tijera" && machine === "piedra")) {
  console.log (`Escogiste ${gamer} y tu rival escogió ${machine}. Lo siento, perdiste amigo. Será la próxima!`);
} else if ((gamer === "piedra" && machine === "piedra") || (gamer === "papel" && machine === "papel") || (gamer === "tijera" && machine === "tijera")) {
  console.log (`Escogiste ${gamer} y tu rival escogió ${machine}. Es un empate amigos. Vuelvan a intentarlo`);
} else {
  console.error("Debes escoger entre piedra, papel o tijera")
}
};

// game("piedra", "tijera");
// game("tijera", "piedra");
// game("papel", "papel");

// Juego piedra, papel, tijera con condicional switch

function gameWithSwitch (gamer, machine) {

  switch (true) {
    
    case ((gamer === "piedra" && machine === "tijera") || (gamer === "papel" && machine === "piedra") || (gamer === "tijera" && machine === "papel")):
        console.log (`Escogiste ${gamer} y tu rival escogió ${machine}. Ganaste! Eres el duro de este juego`);
      break;

    case ((gamer === "piedra" && machine === "papel") || (gamer === "papel" && machine === "tijera") || (gamer === "tijera" && machine === "piedra")):
      console.log (`Escogiste ${gamer} y tu rival escogió ${machine}. Lo siento, perdiste amigo. Será la próxima!`);
      break;
  
    case ((gamer === "piedra" && machine === "piedra") || (gamer === "papel" && machine === "papel") || (gamer === "tijera" && machine === "tijera")):
      console.log (`Escogiste ${gamer} y tu rival escogió ${machine}. Es un empate amigos. Vuelvan a intentarlo`);
      break;
  
    default:
      console.error("Debes escoger entre piedra, papel o tijera");
  };
};

// gameWithSwitch("piedra", "tijera");
// gameWithSwitch("piedra", "papel");
// gameWithSwitch("papel", "papel");




