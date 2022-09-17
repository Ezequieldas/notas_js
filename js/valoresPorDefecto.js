/*
En ECMA Script 6 se incorpora una nueva forma de establecer valores por defecto
*/
// Cómo era antes
function newUser(name, age, country) {
  var name = name || 'Oscar'
  var age = age || 32
  var country = country || 'CO'
  console.log(name,age,country)
}

// Con ECMAS6
function newAdmin (name = 'Oscar', age = 32, country = 'CO'){
  console.log(name,age,country)
};

newUser()
newAdmin()