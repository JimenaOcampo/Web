
let vistaPrevia = document.querySelector(".vista-previa");
let vistaPreviaprecio = document.querySelector(".vista-previa-precio");
let monto=document.querySelector("#monto");
let nombre = document.querySelector("#nombre");

/* estas vienen de un  <label for="algo"></label> que siguen a un name="algo" */
let tamaño_fuente = document.getElementsByName("tamaño");
let color = document.getElementsByName("colorfuente");

let ubicacion = document.getElementsByName("posi");
let fondos = document.getElementsByName("fondo");


//CAMBIAR MONTO
monto.addEventListener("keyup", () => {
    vistaPreviaprecio.innerHTML = `$ ${monto.value}.-`;
  }); 

nombre.addEventListener("keyup", () => {
    //agregar a vista previa el valor del imput nombre
    vistaPrevia.innerHTML = `GIFCARD PARA: ${nombre.value}`;


});


fondos.forEach((item) => {
    item.addEventListener("click", () => {
        //console.log(item.value);
        vistaPrevia.classList.remove(
            "fondo1",
            "fondo2",
            "fondo3",
            "fondo4",
            "fondo5",
            "fondo6");
        vistaPrevia.classList.add(`fondo${item.value}`);
    });

});


color.forEach((item) => {
    item.addEventListener("click", () => {
        //console.log(item.value);
        vistaPrevia.classList.remove(
            "colorfuente1",
            "colorfuente2",
            "colorfuente3",
            "colorfuente4",
            "colorfuente5");
            vistaPrevia.classList.add(`colorfuente${item.value}`);

    });
});


tamaño_fuente.forEach((item) => {
    item.addEventListener("click", () => {
        vistaPrevia.classList.remove(
            "tamaño1",
            "tamaño2",
            "tamaño3",
            "tamaño4",
            "tamaño5");
        vistaPrevia.classList.add(`tamaño${item.value}`);
    });
});



ubicacion.forEach((item) => {
    item.addEventListener("click", () => {
        vistaPreviaprecio.classList.remove(
            "posi1",
            "posi2",
            "posi3");
            vistaPreviaprecio.classList.add(`posi${item.value}`);
    });
});