
const buscador = document.querySelector(".cabecera__buscador-input");

buscador.addEventListener("input", evento => {
  const texto = evento.target.value;
  console.log(texto)
  buscador.addEventListener("keypress", eventoDos => {
    if (eventoDos.key === 'Enter') {
      alert("hola")
      buscador.value="";
    }
  });
});
