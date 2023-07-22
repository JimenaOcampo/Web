
let introduccion = document.querySelector("#cambiar");
let unidad1 = document.querySelector("#cambio");
let texto1 = document.querySelector("#texto1");
let texto2 = document.querySelector("#texto2");
let texto3 = document.querySelector("#texto3");
let inscribirme = document.querySelector("#botones");


introduccion.addEventListener("click", () => {
    texto1.classList.toggle("d-none");
    if (cambiar.value == "Ver Introduccion") {
        cambiar.value = "Introduccion";
    } else {
        cambiar.value = "Ver Introduccion";
    }
});

unidad1.addEventListener("click", () => {
    texto2.classList.toggle("d-none");
    if (cambio.value == " Ver Unidad-1") {
        cambio.value = "Undad 1";
    } else {
        cambio.value = " Ver Unidad-1";
    }
});

