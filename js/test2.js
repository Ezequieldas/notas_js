const miArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

let parcial = 0;
let total = 0;
for (let x = 0; x < miArray.length; x++){
    let fila = miArray[x];

    for (let y = 0; y < fila.length; y++) {
      console.log (fila[y]);
      parcial = parcial + fila[y];
    }
    console.log (parcial);
    total = total + parcial;
    parcial = 0;
}
console.log (total);