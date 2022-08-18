// CONSOLE

// el más popular y que sirve para mostrar todo tipo de elementos en el consola es console.log

// Console cuenta con una gran cantidad de métodos, log es solo uno de ellos.

// log es un registro de lo que ha pasado en nuestra aplicación
console.log(console);

// error muestra en consola mensajes de error
console.error("Esto es un error");

// warn muestra en consola mensajes de aviso
console.warn("Esto es un aviso");

// info muestra en consola mensajes informativos
console.info("Esto es un aviso informativo");

// clear limpia la consola
// console.clear()

// Con log podemos acceder al html mediante document
console.log (document);

// Con dir podemos acceder a las propiedades de document
console.dir (document);

console.group("group agrupa otros mensajes de la consola");
console.log ("mensaje agrupado 1");
console.log ("mensaje agrupado 2");
console.log ("mensaje agrupado 3");
console.log ("mensaje agrupado 4");
console.groupEnd();

// Con table podemos mostrar elementos en forma de tabla
console.log(console);

console.table(Object.entries(console).sort()) // Con sort en orden alfabético

// Con time podemos obtener el tiempo de ejecución del código
console.time("Cuanto tiempo tarda mi código");

// const arreglo = Array(1000000);

// for (let i = 0; i < arreglo.length; i++) {
//   arreglo[i] = i
// }

console.timeEnd("Cuanto tiempo tarda mi código");

// Con count podemos revisar cómo se ejecuta el código
for (let i = 0; i < 100; i++) {  
console.count("revisando código for")
console.log(i)
};


// Con assert podemos hacer comprobaciones. assert se ejecuta cuando la pureba falla
let x = 3
let y = 2
pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x < y, {x,y,pruebaXY});






