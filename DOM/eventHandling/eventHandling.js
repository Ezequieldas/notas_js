function helloWorld() {
  alert ("Hello world");
  console.log(event)
}

const $eventoSemantico = document.getElementById("evento-semantico"),
$eventoMultiple = document.getElementById("evento-multiple")

$eventoSemantico.onclick = helloWorld;

$eventoMultiple.addEventListener("click", helloWorld)