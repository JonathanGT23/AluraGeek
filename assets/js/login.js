
    const btn = document.querySelector(".login__boton")

    btn.addEventListener("click" , (evento) =>{
    evento.preventDefault();
   inicio();
})

    const inicio = () =>{
        const correoIngresado = document.querySelector("[data-correo]").value
        const contraIngresado = document.querySelector("[data-contra]").value
        
        let correo =  "jona.gonzalez.t@gmail.com"
        let contra = "jona23$$"
    
        if (correoIngresado === correo && contraIngresado === contra) {
            Swal.fire({
                title: 'Inicio de Sesion',
                text: 'Correo y Contraseña Validos',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.value) {
                  window.location.href="../../screens/todoProductos.html"
                }
              }); 
           
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Correo o Contraseña Incorrecta',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
        }
    }

