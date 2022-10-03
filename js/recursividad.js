// La función se llama a sí misma

function recursiva(numbersArray) {
  if (numbersArray.length !== 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);
    numbersArray.shift();
    return recursiva(numbersArray);
  } else {
  }
}

const numeros = [7, 87, 6, 5, 21, 88, 57, 6, 9, 1, 52];
let numero = 0;
for (let index = 0; index < numeros.length; index++) {
  numero = numeros[index];
  console.log({ index, numero });
}

recursiva(numeros);

