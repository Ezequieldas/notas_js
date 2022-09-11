

function capturar() {
  function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
  }

  let marcaCapturar = document.getElementById("marca").value;
  let modeloCapturar = document.getElementById("modelo").value;
  let annioCapturar = document.getElementById("annio").value;

  nuevoAuto = new Auto(marcaCapturar, modeloCapturar, annioCapturar);

  console.log(nuevoAuto);

  agregar();
};

let baseDatos = [];

function agregar() {
  baseDatos.push(nuevoAuto); 
  console.log(baseDatos);
  document.getElementById("tabla").innerHTML += ` <tbody><td>${nuevoAuto.marca}</td><td>${nuevoAuto.modelo}</td><td>${nuevoAuto.annio}</td></tbody>`;
};
