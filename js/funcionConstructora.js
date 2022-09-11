function auto (marca, modelo, annio) {
  this.marca = marca,
  this.modelo = modelo,
  this.annio = annio
}

let miAuto = new auto("Toyota","Corolla",2020);

miAuto;

let otroAuto = new auto ("Tesla", "Model 3", 2018);