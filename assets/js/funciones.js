const urlProyectos = {
    "semana1": "",
    "semana2": "",
    "semana3": "",
    "semana4": "",
    "semana5": "https://moragaga.github.io/dl-mini-cv-s5/",
    "semana6": ""
}

document.querySelectorAll(".btn-popup").forEach((elemento) => {
    elemento.addEventListener("click", (event)=> {
        const key = event.target.getAttribute("data-value");
        const url = urlProyectos[key];
        const titulo = document.querySelector(`#${key} h5`).innerHTML

        Swal.fire({
            html:`<div class="container-fluid">
                    <div class="row text-center py-4">
                        <h1 class="color-celeste">Previsualización: ${titulo}</h1>
                    </div>
                    <div class="text-center text-white">
                        <p>Aquí una imagén del proyecto realizado, para ver la página pincha <b class="color-celeste">Ir a Página</b></p>
                    </div>
                    <div class="row">
                        <img src="assets/img/semana5.jpg">
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
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            willOpen: () => {
                const contenido = Swal.getHtmlContainer();
                const html = contenido.querySelector.bind(contenido);

                html("#ver-pagina").addEventListener("click", ()=>{
                    window.open(url, "_blank");
                })
            }
        })
        
        // window.open(url, "_blank")
    })
});