import { productoService } from "../service/producto-service.js";




const obtenerDatos = async () =>{
    const url = new URL(window.location);

    const id = url.searchParams.get("id")

    if (id == null){
        window.location.href ="../screens/error.html"
    }

    const imagen = document.querySelector("[data-imagen]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-detalle]");
    try{
        const productos = await productoService.datosProducto(id)

        if (productos.imagen && productos.nombre && productos.precio && productos.descripcion){
            imagen.src = productos.imagen
            nombre.innerHTML = productos.nombre;
            precio.innerHTML = productos.precio;
            descripcion.innerHTML = productos.descripcion;
        }else{
            throw new Error()
        }
    }catch (error){
        window.location.href ="../screens/error.html"
    }

}

obtenerDatos();



const crearNuevaLinea = (imagen,nombre,precio,id) =>{
    const linea = document.createElement("li")
    const contenido= `
    <li class="producto__item">
                <img src="${imagen}" alt="">
            
            <p>${nombre}</p>
            <span>$${precio}</span>
            <a href="../screens/detalleProducto.html?id=${id}">Ver producto</a>
            
    </li>
    ` 

    linea.innerHTML = contenido; 


    return linea;
}

const lista = document.querySelector("[data-card]");

productoService.listaProductos().then((data) =>{
    data.forEach(({imagen,nombre,precio,id}) =>{
        const nuevaLinea = crearNuevaLinea(imagen,nombre,precio,id);
        lista.appendChild(nuevaLinea)
    })
})




//botones
const prev = document.querySelector('.prev ')
const next = document.querySelector('.next ')
const slider = document.querySelector('.slider')

prev.addEventListener("click", () =>{
    slider.scrollLeft -=200
})

next.addEventListener("click", () =>{
    slider.scrollLeft +=200
})