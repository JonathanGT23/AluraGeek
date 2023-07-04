const listaProductos = () =>{
    return fetch ("https://my-json-server.typicode.com/JonathanGT23/AluraGeek/productos").then((respuesta) => respuesta.json())
};



const agregarProducto = (imagen,nombre,precio,categoria,descripcion)=>{
    return fetch("https://my-json-server.typicode.com/JonathanGT23/AluraGeek/productos",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen,nombre,precio,categoria,descripcion,id: uuid.v4()})
        
    })
}

const eliminarProducto = (id) =>{
    return fetch(`https://my-json-server.typicode.com/JonathanGT23/AluraGeek/productos/${id}` ,{
        method: "DELETE"
    })
}

const datosProducto = (id) =>{
    return fetch(`https://my-json-server.typicode.com/JonathanGT23/AluraGeek/productos${id}`).then((respuesta) => respuesta.json())
}

const editarProducto = (imagen,nombre,precio,categoria,descripcion,id) =>{
    return fetch(`https://my-json-server.typicode.com/JonathanGT23/AluraGeek/productos${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen,nombre,precio,categoria,descripcion})
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err))
}


export const productoService = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
    datosProducto,
    editarProducto
}