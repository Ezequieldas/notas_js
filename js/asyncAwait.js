/*
 * async define una función asíncrona, la cual devuelve un objeto AsyncFunction 
 */

const fnAsync = () => {
  return new Promise((resolve,reject) => {
    (true)
    ? setTimeout(() => resolve('Async'), 3000)
    : reject (new Error('test error'))
  })
};

const helloAsync = async () => {
  const hello = await fnAsync();
  console.log(hello);
}

console.log('Before');
helloAsync();
console.log('After');

/* Otra forma de usar async await*/

const anotherFunction = async () => {
  try {
    const hello = await fnAsync();
    console.log(hello);
  } catch (error) {
    console.log(error)
  }
};

anotherFunction();

/*
 * async await aplicado a un caso real
 */

 import fetch from "node-fetch";
 const API = 'https://api.escuelajs.co/api/v1';
 
 async function fetchData(urlApi) {
   const response = await fetch(urlApi);
   const data = await response.json();
   return data;
 }
 
 const anotherFunction2 = async (urlApi) => {
   try {
     const products = await fetchData(`${urlApi}/products`);
     const product = await fetchData(`${urlApi}/products/${products[0].id}`);
     const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
 
     console.log(products)
     console.log(product.title)
     console.log(category.name)
   } catch (error){
     console.error(error)
   }
 };
 
 anotherFunction2(API)