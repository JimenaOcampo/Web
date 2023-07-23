const abrirModal=document.querySelector('.contenedor-carro');
const modal=document.querySelector('.modal');
const cerrarModal=document.querySelector('.cerrar_modal');

abrirModal.addEventListener('click',(e)=>{
    e.preventDefault();
modal.classList.add('modal--show');
});
cerrarModal.addEventListener('click',(e)=>{
    e.preventDefault();
modal.classList.remove('modal--show');
});
var botonVer = document.querySelector('carrito');
var botonCerrar = document.querySelector('cerrar_modal')[0];

function mostrarCursos() {
    document.querySelector('.modal')[0].style.display = 'block';
}

function ocultarCursos() {
    document.querySelector('.modal')[0].style.display = 'none';
}

botonVer.addEventListener('click', (e) => {
    mostrarCursos();
});

botonCerrar.addEventListener('click', (e) => {
    ocultarCursos();
});