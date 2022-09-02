// Funciones anónimas autoejecutables

/*

En inglés IIFE

Son anónimas porque precisamente no tienen nombre 
Son autoejecutables porque se ejecutan al momento de crearse

*/

// Arquitectura
(function (d,w,c) {
  
  console.log(d);
  console.log(w);
  console.log(c);
  
})(document, window, console); // Se asignaron a los parámetros que se van a pasar para abreviar

// Es una forma antigua que se utilizaba para encapsular funciones con jQuery

