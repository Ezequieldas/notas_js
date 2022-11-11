// Método Split. Transforma en un array

let string = "Cadena de texto convertida a array con split"

// Separa donde encuentre un espacio
 console.log(string.split(' '));
 // Separa luego de cada caracter
 console.log(string.split(''));

 //creamos una url de una string gracias a split y a join
 const creaUrl = string.split(' ').join('-').toLowerCase();
console.log(creaUrl)


return lines.join(" ").split(" ").length
