// Método some. Valida verdadero o falso. Con que un solo valor devuelva true, entonces regresa true.

const englishWords = ["I", "You", "We", "Their", "Your", "Us", "between" ]

// Alguna de estas palabras tiene más de 6 caracteres?
const firstCase = englishWords.some ((word) => {
  return word.length > 7
});

console.log (firstCase);

// Alguna de estas palabras comienza con u?
const secondCase = englishWords.some ((word) => {
  return word[0]=== 'u';
});

console.log (secondCase);

// Alguna de estas palabras contiene eir?
const thirdCase = englishWords.some ((word) => {
  return word.includes('eir');
});

console.log (thirdCase);
