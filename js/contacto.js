let form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    validar();

});

function validar() {
    let error = false;
    let mensajesError = "";
    let buenmensaje = "";
    let nombre = document.getElementById("nombreyapellido").value;
    let email = document.getElementById("eMail").value;
    let celular = document.querySelector('#telefono-').value;
    const regex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/; // nombre@dominio.com


    if (nombre == "" && nombre.length < 3) {
        error = true;
        mensajesError += "<p>El campo nombre y apellido es obligatorio</p>";
    }



    for (let i = 0; i < email.length; i++) {
        if (!regex.test(email[i].value)) {
            mensajesError = '\n email incorrecto, asegurate de usar @ y un dominio valido.';

        }
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
