/*
Resuelve algunos problemas de los callbacks al incorporar el método then

*/ 

// Ejemplo simple con una variable
const helloPromise = () => {
  return new Promise ((resolve,reject) => {
    (true)
      ? resolve ('Good!')
      : reject (new Error('Bad'));
  });
};

helloPromise()
.then (response => console.log(response))
.catch (error => console.log(error))
.finally(()=> console.log('finalizó'))


// Función para reemplazar callbacks
function cuadradoPromise(value) {
  if (typeof value !== "number") return Promise.reject(`Error: el valor "${value}" ingresado no es número`);
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve({
        value,
        result: value * value
      })
    }, 0 | Math.random() * 1000);
  });
}

cuadradoPromise(1)
.then(obj => {
  // console.log(obj);
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromise(1)
})
.then(obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromise(2)
})
.then(obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromise("3")
})
.then(obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromise(4)
})
.then(obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  return cuadradoPromise(5)
})
.then(obj => {
  console.log(`Promise: ${obj.value}, ${obj.result}`);
  console.log(`End Promise`);

})

// ECMAS9 incorpora finally. Ejecutar una acción cuando la promesa terminó el proceso
//finally(() => console.log('finally'));