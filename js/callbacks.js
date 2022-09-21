/*
 Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de una función externa para completar algún tipo de rutina o acción
 */


// Ejemplo
function sum(num1, num2) {
  return num1 + num2
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2,2,sum));


// Ejemplo con setTimeOut
function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value)
  }, 0 | Math.random() * 1000);
}

// Callback hell
cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log (`Callback ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log (`Callback ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log (`Callback ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log (`Callback ${value}, ${result}`)
      });
    });
  });
})


// Llamar a una API con callback
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi,true);
  xhttp.onreadystatechange = function (event) {
    if(xhttp.readyState === 4){
      if(xhttp.status === 200){
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error ('Error + urlApi');
        return callback(error,null);
      }
    } 
  }
  xhttp.send();
};

fetchData(`${API}/products`,function (error1, data1){
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2 ){
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
      if (error3) return console.error(error3);
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});