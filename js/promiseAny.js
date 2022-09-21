// any - incorporado en ES12

// devuelve el primer promise que de como resultado resolve

const promise1 = new Promise ((resolve,reject) => reject('Reject'));
const promise2 = new Promise ((resolve,reject) => resolve('Resolve'));
const promise3 = new Promise ((resolve,reject) => resolve('Resolve 2'));

Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response));
