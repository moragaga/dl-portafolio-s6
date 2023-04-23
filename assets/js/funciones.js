const proyectos = {
    "semana1": {"pagina":"https://moragaga.github.io/dl-primer-paso-cv-s1/", 
                "imagen": "assets/img/semana1.jpg",
                "detalle": "Primer CV realizado unicamente con HTML."},
    "semana2": {"pagina":"https://moragaga.github.io/dl-chicstyle-s2/", 
                "imagen": "assets/img/semana2.jpg",
                "detalle": "Primera Landing Page utilizando solo CSS para entregar una mejor visualización."},
    "semana3": {"pagina":"https://moragaga.github.io/dl-iguanas-s3/", 
                "imagen": "assets/img/semana3.jpg",
                "detalle": "Construcción de Landing Page a partir de una maqueta utilizando solo CSS y Flex."},
    "semana4": {"pagina":"https://moragaga.github.io/dl-cuppon-s4/", 
                "imagen": "assets/img/semana4.jpg",
                "detalle": "Construcción de Landing Page a partir de una maqueta utilizando Bootstrap y CSS. <br>(Adicionalmente cuenta con funcionalidades de JavaScript para dinamismo a los productos y al contacto)."},
    "semana5": {"pagina":"https://moragaga.github.io/dl-mini-cv-s5/", 
                "imagen": "assets/img/semana5.jpg",
                "detalle": "Construcción de un CV a partir de un Fork realizando cambios con Bootstrap y CSS para poder validar conocimientos de Git. <br>(Adicionalmente cuenta con funcionalidades de JavaScript para dinamismo en el botón tecnología de los proyectos y al contacto)."},
    "semana6": {"pagina":"https://moragaga.github.io/", "imagen": 
                "assets/img/semana6.jpg",
                "detalle": "Construcción de CV Final responsivo utilizando Bootstrap y CSS, se agrega enlace al portafolío actual. <br>(Adicionalmente cuenta con funcionalidades de JavaScript para dinamismo)."}
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
                    <div class="row text-center pt-4 pb-3">
                        <h1 class="color-celeste">Previsualización: ${titulo}</h1>
                    </div>
                    <div class="row text-center text-white pb-2">
                        <p class="p-0 m-0">${proyecto["detalle"]}</p>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <hr class="divisor w-75">
                    </div>
                    <div class="text-center text-white">
                        <p class="detalle-pop-up">Aquí una imagén del proyecto realizado, para ver la página pincha <b class="color-celeste">Ir a Página</b></p>
                    </div>
                    <div class="row">
                        <img src="${proyecto["imagen"]}">
                    </div>
                    <div class="text-center pt-4">
                        <a class="btn btn-detalles py-2 px-5" id="ver-pagina">Ir a Página</a>
                    </div>
                </div>`,
            width: '750px',
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


////Función que muestra mensaje en construcción
// document.querySelectorAll(".link-construccion").forEach((elemento)=>{
//     elemento.addEventListener("click", ()=> {
//         Swal.fire({
//             icon: 'info',
//             html: `<div>
//                         <div class="row pt-4 text-center">
//                             <h1 class="titulo-bloque text-white">'Oops...'</h1>
//                             <h4 class="text-muted">Sitio en construcción</h4>
//                         </div>
//                         <div class="text-center pt-4">
//                             <a class="btn btn-detalles py-2 px-5" id="cerrar-ventana">Cerrar</a>
//                         </div>
//                     </div>`,
//             showCloseButton: true,
//             allowOutsideClick: true,
//             showCancelButton: false,
//             showConfirmButton: false,
//             // background: "#202021",
//             willOpen: () => {
//                 // Selecciona el contenido del pop up
//                 const contenido = Swal.getHtmlContainer();
//                 const html = contenido.querySelector.bind(contenido);

//                 // Al detectar el evento click en el pop up redirige a la página
//                 html("#cerrar-ventana").addEventListener("click", ()=>{
//                     Swal.close();
//                 })
//             }
//         })
//     })
// });