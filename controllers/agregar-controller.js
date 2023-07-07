import { productoService } from "../service/producto-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    const imagen = document.querySelector("[data-url]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const categoria = document.querySelector("[data-categoria]").value
    const descripcion = document.querySelector("[data-detalle]").value
  
    Swal.fire({
        title: 'Estas Seguro?',
        text: "Deseas Agregar este Producto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2A7AE4',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Agregalo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Agregado!',
            'Tu Producto a sido Agregado.',
            'success'
          )
          productoService.agregarProducto(imagen,nombre,precio,categoria,descripcion).then (() =>{
            window.location.href= "../screens/todoProductos.html"
        }).catch(err => console.log(err))

         
        }
      })






   

})