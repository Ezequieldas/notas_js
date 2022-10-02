const button = document.getElementById('btn');

button.addEventListener('click', async function(){
  const module = await import("./moduleExport.js");
  console.log(module);
  module.hello();
});

