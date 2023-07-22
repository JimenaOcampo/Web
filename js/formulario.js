let form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
});
function validar() {
    let error = false;
    let mensajesError = "";
    let buenmensaje = "";
    let nombre = document.getElementById("nombre2").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;


    if (nombre == "") {
        error = true;
        mensajesError += "<p>El campo nombre es obligatorio</p>";
    }
    if (apellido == "") {
        error = true;
        mensajesError += "<p>El campo apellido es obligatorio</p>";
    }
    if (dni.length < 0 || dni.length > 8 || dni.length == "") {
        error = true;
        mensajesError += "<p>El campo dni es obligatorio</p>";
    }
    if (email.length == "") { //
        error = true;
        mensajesError += "<p>El campo email es obligatorio</p>";
    }
    if (error) {
        //mostrar los mensajes de error
        document.getElementById("mensajeerrorr").innerHTML = mensajesError;
    } else {
        form.submit(); //envía el formulario si todo está ol
        buenmensaje += "<p>MENSAJE ENVIADO</p>";
        document.getElementById("mensajeerrorr").innerHTML = buenmensaje;
    }
}




let agregar = document.getElementById("agregar-fila");
let contenedor = document.querySelector("#from");
let precio = 2500;
sessionStorage.setItem("precioTotal", precio);
let precioNuevo = precio;


agregar.addEventListener(("click"), function (event) {
    event.preventDefault();
    let filaprevia = document.querySelector(".linea1");
    let filaNueva = document.cloneNode(true);

    form.appendChild(filaNueva);

    precioNuevo += precio;
    sessionStorage.setItem("precioTotal", precioNuevo);
    document.querySelector(".precio-formulario").textContent = `${precioNuevo} $`;
    let botonBorrar = filaNueva.getElementsByClassName('boton-borrar');

    for (var i = 0; i < botonBorrar.length; i++) {
        botonBorrar[i].addEventListener('click', function (event) {
            event.preventDefault();
            let fila = this.parentNode;
            if (fila !== contenedor.firstElementChild) {
                contenedor.removeChild(this.parentNode);
                precioNuevo -= precio;
                sessionStorage.setItem('precioTotal', precioNuevo);
                document.getElementById('precio').textContent = `${precioNuevo} $`;
            }
        });
    }
});
