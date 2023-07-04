import { productoService } from "../service/producto-service.js";

const crearNuevaLinea = (imagen,nombre,precio,id) =>{
    const linea = document.createElement("li")
    const contenido = `
    <li class="producto__item">
                <img src="${imagen}" alt="">
            
            <p>${nombre}</p>
            <span>$${precio}</span>
            <a href="#">Ver producto</a>
            
    </li>
    ` 

    linea.innerHTML = contenido; 


    return linea;
}


const lista = document.querySelector("[data-card]");
const lista2 = document.querySelector("[data-card2]");
const lista3 = document.querySelector("[data-card3]");

productoService.listaProductos().then((data) =>{
    data.forEach(({imagen,nombre,precio,id,categoria}) =>{
        if (categoria == "starWars"){
            const nuevaLinea = crearNuevaLinea(imagen,nombre,precio,id);
            lista.appendChild(nuevaLinea)
        }if (categoria == "consola") {
            const nuevaLinea = crearNuevaLinea(imagen,nombre,precio,id);
            lista2.appendChild(nuevaLinea)
        } if (categoria == "otros") {
            const nuevaLinea = crearNuevaLinea(imagen,nombre,precio,id);
            lista3.appendChild(nuevaLinea)
        } 
        
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

const prev1 = document.querySelector('.prev1')
const next1 = document.querySelector('.next1')
const slider1 = document.querySelector('.slider1')

prev1.addEventListener("click", () =>{
    slider1.scrollLeft -=200
})

next1.addEventListener("click", () =>{
    slider1.scrollLeft +=200
})



const prev2 = document.querySelector('.prev2')
const next2 = document.querySelector('.next2')
const slider2 = document.querySelector('.slider2')

prev2.addEventListener("click", () =>{
    slider2.scrollLeft -=200
})

next2.addEventListener("click", () =>{
    slider2.scrollLeft +=200
})