// Shallow copy evita modificar el valor original 

const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e"
  }
    // No aplica para objetos dentro de objetos
};

const obj2 = {};

  for (let prop in obj1) {
    obj2[prop] = obj1[prop];
  };

  console.log(obj1);  
  console.log(obj2);
  obj2.a = "AA";
  obj2.c.d = "DD"
  console.log(obj1);  
  console.log(obj2);


  const obj3 = Object.create(obj1)


  // Para ello se implementó create
  console.log(obj3)
  // El objeto hereda las propiedades del objeto a pero si modificamos alguna de ellas no se modifica la original, como ocurría anteriormente