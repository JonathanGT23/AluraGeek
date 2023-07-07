import { productoService } from "../service/producto-service.js";

const crearNuevaLinea = (imagen,nombre,precio,id) =>{
    const linea = document.createElement("li")
    const contenido = `
    <li class="producto__item">
            <div class="imagen">
                <img src="${imagen}" alt="">
                <div class="update">
                    <i class="fa-solid fa-trash trash" id="${id}"></i>
                    <a class="link" href="../screens/editar.html?id=${id}"><i class="fa-solid fa-pen pencil" ></i></a>
                </div>
            </div>
            <div class="datos">
            <p>${nombre}</p>
            <span>$${precio}</span>
            <span class="serie">#${id}</span>
            </div>
    </li>
    ` 
    /*href="../screens/editar.html?id=${id}"*/
    linea.innerHTML = contenido; 

    const btn = linea.querySelector("i")

   
    btn.addEventListener("click", () =>{
        
        Swal.fire({
        title: 'Estas Seguro?',
        text: "Deseas Eliminar este Producto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2A7AE4',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borralo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'Tu Producto a sido eliminado.',
            'success'
          )
          const id = btn.id
            productoService.eliminarProducto(id).then(respuesta => {
            console.log(respuesta)
            location.reload();
        })
        }
      })
     
        
    })

    return linea;
}



const lista = document.querySelector("[data-card]");

productoService.listaProductos().then((data) =>{

    data.forEach(({imagen,nombre,precio,id}) =>{
        const nuevaLinea = crearNuevaLinea(imagen,nombre,precio,id);
        lista.appendChild(nuevaLinea)
    })
})


