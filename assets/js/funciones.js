const proyectos = {
    "semana1": "",
    "semana2": "",
    "semana3": "",
    "semana4": "",
    "semana5": {"pagina":"https://moragaga.github.io/dl-mini-cv-s5/", "imagen": "assets/img/semana5.jpg"},
    "semana6": {"pagina":"https://moragaga.github.io/", "imagen": "assets/img/semana6.jpg"}
}

// Función que muestra imagen del proyecto y redirige a la página de dicho proyecto
document.querySelectorAll(".btn-popup").forEach((elemento) => {
    // Iteración sobre los elementos de la clase esperando el evento
    elemento.addEventListener("click", (event)=> {
        // Obtiene atributo seteado manualmente
        const key = event.target.getAttribute("data-value");
        // Obtiene datos del diccionario
        const proyecto = proyectos[key];
        // Obtiene el nombre del proyecto
        const titulo = document.querySelector(`#${key} h5`).innerHTML

        // Levanta pop up
        Swal.fire({
            html:`<div class="container-fluid">
                    <div class="row text-center py-4">
                        <h1 class="color-celeste">Previsualización: ${titulo}</h1>
                    </div>
                    <div class="text-center text-white">
                        <p>Aquí una imagén del proyecto realizado, para ver la página pincha <b class="color-celeste">Ir a Página</b></p>
                    </div>
                    <div class="row">
                        <img src="${proyecto["imagen"]}">
                    </div>
                    <div class="text-center pt-4">
                        <a class="btn btn-detalles py-2 px-5" id="ver-pagina">Ir a Página</a>
                    </div>
                </div>`,
            width: '1000px',
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: true,
            // background: "#202021",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            willOpen: () => {
                // Selecciona el contenido del pop up
                const contenido = Swal.getHtmlContainer();
                const html = contenido.querySelector.bind(contenido);

                // Al detectar el evento click en el pop up redirige a la página
                html("#ver-pagina").addEventListener("click", ()=>{
                    window.open(proyecto["pagina"], "_blank");
                })
            }
        })
        
        // window.open(url, "_blank")
    })
});


//Función que muestra mensaje en construcción
document.querySelectorAll(".link-construccion").forEach((elemento)=>{
    elemento.addEventListener("click", ()=> {
        Swal.fire({
            icon: 'info',
            html: `<div>
                        <div class="row pt-4 text-center">
                            <h1 class="titulo-bloque text-white">'Oops...'</h1>
                            <h4 class="text-muted">Sitio en construcción</h4>
                        </div>
                        <div class="text-center pt-4">
                            <a class="btn btn-detalles py-2 px-5" id="cerrar-ventana">Cerrar</a>
                        </div>
                    </div>`,
            showCloseButton: true,
            allowOutsideClick: true,
            showCancelButton: false,
            showConfirmButton: false,
            // background: "#202021",
            willOpen: () => {
                // Selecciona el contenido del pop up
                const contenido = Swal.getHtmlContainer();
                const html = contenido.querySelector.bind(contenido);

                // Al detectar el evento click en el pop up redirige a la página
                html("#cerrar-ventana").addEventListener("click", ()=>{
                    Swal.close();
                })
            }
        })
    })
});