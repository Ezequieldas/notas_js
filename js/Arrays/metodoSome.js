/*
 Método some. 
 
 Valida verdadero o falso. Con que un solo valor devuelva true, entonces regresa true.
 
 */

const englishWords = ["I", "You", "We", "Their", "Your", "Us", "between" ]

// Alguna de estas palabras tiene más de 6 caracteres?
const firstCase = englishWords.some ((word) => {
  return word.length >= 7
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

// Aplicado a objetos

// Programa para evaluar si alguna de las citas se cruza con alguna que ya está programada (se usan paquetes npm)
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));