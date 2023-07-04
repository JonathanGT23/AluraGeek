import { productoService } from "../service/producto-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerDatos = async () =>{
    const url = new URL(window.location);

    const id = url.searchParams.get("id")

    if (id == null){
        alert("Error")
    }

    const imagen = document.querySelector("[data-url]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const categoria = document.querySelector("[data-categoria]");
    const descripcion = document.querySelector("[data-detalle]");
    try{
        const producto = await productoService.datosProducto(id)

        if (producto.imagen && producto.nombre && producto.precio && producto.categoria && producto.descripcion){
            imagen.value = producto.imagen;
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            categoria.value = producto.categoria;
            descripcion.value = producto.descripcion;
        }else{
            throw new Error()
        }
    }catch (error){
        alert("Error")
    }

}

obtenerDatos();

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    const url = new URL(window.location)
    const id = url.searchParams.get("id")

    const imagen = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const descripcion = document.querySelector("[data-detalle]").value;

    productoService.editarProducto(imagen,nombre,precio,categoria,descripcion,id).then(() => {
        window.location.href="/screens/todoProductos.html"
    })

})