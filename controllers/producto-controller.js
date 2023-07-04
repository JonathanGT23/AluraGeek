import { productoService } from "../service/producto-service.js";

const crearNuevaLinea = (imagen,nombre,precio,id) =>{
    const linea = document.createElement("li")
    const contenido = `
    <li class="producto__item">
            <div class="imagen">
                <img src="${imagen}" alt="">
                <div class="update">
                    <i class="fa-solid fa-trash trash" id="${id}"></i>
                    <a class="link"href="/screens/editar.html?id=${id}"><i class="fa-solid fa-pen pencil" ></i></a>
                </div>
            </div>
            <div class="datos">
            <p>${nombre}</p>
            <span>$${precio}</span>
            <span class="serie">#${id}</span>
            </div>
    </li>
    ` 

    linea.innerHTML = contenido; 

    const btn = linea.querySelector("i")
    btn.addEventListener("click", () =>{
        const id = btn.id
        productoService.eliminarProducto(id).then(respuesta => {
            console.log(respuesta)
        }).catch(err => alert("err"))
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


