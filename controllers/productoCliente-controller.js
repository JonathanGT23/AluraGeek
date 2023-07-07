import { productoService } from "../service/producto-service.js";

const crearNuevaLinea = (imagen,nombre,precio,id) =>{
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


const lista = document.querySelector("[data-card]");

productoService.listaProductos().then((data) =>{
    data.forEach(({imagen,nombre,precio,id}) =>{
        const nuevaLinea = crearNuevaLinea(imagen,nombre,precio,id);
        lista.appendChild(nuevaLinea)
    })
})
