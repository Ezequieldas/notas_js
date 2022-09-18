/*
  Optional chaining
 Incorporado en ECMAS11. Nos permite verificar de una forma sencilla si existe un elemento dentro de un objeto

 */

 const users = {

  user1: {
    country: 'AR'
  },

  user2: {
    country: 'CO'
  }

 };

 console.log(users?.user2?.country);

 // no da error porque está consultando. Si no hay valor devuelve undefined
 console.log(users?.user3?.country);