import { productoService } from "../service/producto-service.js";

const crearNuevaLinea = (imagen, nombre ,precio,categoria, descripcion, id) =>{
    const linea = document.createElement("li")
    const contenido = `
    <li class="producto__item">
            <div class="imagen">
                <img src="${imagen}" alt="">
                
            </div>
            <div class="datos">
            <p>${nombre}</p>
            <span>$${precio}</span>
            <a href="../screens/detalleProducto.html?id=${id}">Ver producto</a>
            </div>
    </li>
    ` 

    linea.innerHTML = contenido; 


    return linea;
}





//Contenedor de resultados buscados
const resultados = document.querySelector("[data-card]");
const tituloBusqueda = document.querySelector("[data-info]");

const mostrarResultadoBuscado = async () => {
  const url = new URL(window.location);
  const nombreBuscado = url.searchParams.get("texto");
  console.log(nombreBuscado)
  if(nombreBuscado === null){
    console.log("Hubo un error al momento de buscar el producto");
  }
  const nombreBuscar = nombreBuscado.toLowerCase();

  let cantidadResultados = 0;
  //Resultados busqueda
  productoService.listaProductos().then(data => {
    data.forEach(({imagen, nombre ,precio,categoria, descripcion, id}) => {
      const nombreProducto = nombre.toLowerCase();
      const nombreCategoria = categoria.toLowerCase();
      const validar = nombreProducto.includes(nombreBuscar);
      const validarCategoria = nombreCategoria.includes(nombreBuscado);

      if(validar || validarCategoria){
        const mostrarResultadoBuscado = crearNuevaLinea(imagen, nombre ,precio,categoria, descripcion, id);
        resultados.appendChild(mostrarResultadoBuscado);
        cantidadResultados++;
      }
    });
    //Mostrar mensajes cuando no haya resultados
    if(cantidadResultados == 0){
      const textoInformativo = `
      <h3 class="busqueda__texto">No se encontraron resultados para esta busqueda</h3>
      `
      tituloBusqueda.innerHTML = textoInformativo;
    }
  }).catch( error => alert("Ocurrio un error en producto buscado"));
}
mostrarResultadoBuscado();

//Nueva busqueda
const buscador = document.querySelector(".cabecera__buscador-input");
let cantResultNuevaBusqueda = 0;

//Enviando nombre de la busqueda a pagina resultados busqueda
buscador.addEventListener("keypress", evento => {
  let texto = evento.target.value;
    if (evento.key === 'Enter') {
      texto = texto.toLowerCase();
      buscador.value = "";
      const limpiarContenido = ``;
      resultados.innerHTML = limpiarContenido;
      
      productoService.listaProductos().then(data => {
        data.forEach(({imagen, nombre ,precio,categoria, descripcion, id}) => {
          const nombreProducto = nombre.toLowerCase();
          const validar = nombreProducto.includes(texto);

          if(validar){
            const mostrarProductoBuscado = crearNuevaLinea(imagen, nombre ,precio,categoria, descripcion, id);
            resultados.appendChild(mostrarProductoBuscado);
            cantResultNuevaBusqueda++;
          }
          if(cantResultNuevaBusqueda > 0){
            const tituloProductosexistente = `
            <h3 class="busqueda__texto">Resultados de busqueda</h3>
            `
            tituloBusqueda.innerHTML = tituloProductosexistente;
          }else if (cantResultNuevaBusqueda <= 0){
            const textoInformativo = `
            <h3 class="busqueda__texto">No se encontraron resultados para esta busqueda</h3>
            `
            tituloBusqueda.innerHTML = textoInformativo;
          }
        });
      });
    }
});