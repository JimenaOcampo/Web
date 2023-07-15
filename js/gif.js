let nombre = document.querySelector("#nombre");
let fondos = document.getElementsByName("fondo");
let color = document.getElementsByName("color");
let ubicacion =document.getElementsByName("posi");
let vistaPrevia = document.querySelector(".vista-previa");
let texto = document.querySelector("#texto");

//escucho el keyup porque quiero soltar teclado
//usar en texto sobre escrito en algo
nombre.addEventListener("keyup", () => {
    //agregar a vista previa el valor del imput nombre
    vistaPrevia.innerHTML = nombre.value;

});

//usar en los imput
//usar en los imput
fondos.forEach((item) => {
    item.addEventListener("click", () => {
        //console.log(item.value);
        vistaPrevia.classList.remove("fondo1", "fondo2", "fondo3","fondo4", "fondo5", "fondo6");
        vistaPrevia.classList.add(`fondo${item.value}`);
    });

});

//color de la letra seleccionable
color.forEach((item) => {
    item.addEventListener("click", () => {
        //console.log(item.value);
        vistaPrevia.classList.remove("blanco", "negro");
        vistaPrevia.classList.add(item.value);

    });
});