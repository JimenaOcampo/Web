


let form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    validar();

});

/*---------------VALIDAR EL FORMULARIO-----------------------------------*/
function validar() {
    let error = false;
    let mensajesError = "";
    let buenmensaje = "";
    let nombre = document.getElementById("nombre2").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;
    let celular = document.querySelector('#telefono').value;


    if (nombre == "") {
        error = true;
        mensajesError += "<p>El campo nombre es obligatorio</p>";
    }
    if (apellido == "") {
        error = true;
        mensajesError += "<p>El campo apellido es obligatorio</p>";
    }
    if (dni.length < 0 || dni.length > 8 || dni.length == "" || dni.length !== 8) {
        error = true;
        mensajesError += "<p>El campo dni es obligatorio</p>";
    }
    if (email.length == "") { //
        error = true;
        mensajesError += "<p>El campo email es obligatorio</p>";
    }
    if (celular.length < 0 || celular.length > 10 || celular.length == "" || celular.length !== 10) {
        error = true;
        mensajesError += "<p>El campo telefono es obligatorio</p>";
    }


    if (error == true) {
        //mostrar los mensajes de error
        document.getElementById("mensajeerrorr").innerHTML = mensajesError;
    } else {
        form.submit(); //envía el formulario si todo está ol
        buenmensaje += "<p>ESTA TODO CORRECTO</p>";
        document.getElementById("mensajeerrorr").innerHTML = buenmensaje;

    }

};

