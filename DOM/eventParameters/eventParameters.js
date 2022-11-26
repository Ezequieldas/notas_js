const $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

const removerCLick = () => {
  alert("Removiendo el evento de tipo " + e.type);
  $eventoRemover.removeEventListener("click", removerCLick);
};

function greeting(name = "Unkown") {
  alert("Hello " + name);
}

$eventoRemover.addEventListener("click", removerCLick);

$eventoMultiple.addEventListener("click", () => greeting());
