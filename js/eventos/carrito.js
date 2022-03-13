const contenedorProductos = document.getElementsByClassName('modal-contenedor')[0] //magia de la compra
const contenedorCarritoCompra = document.getElementsByClassName('modal-carrito')[0] // magia de la compra
const carritoAbrir = document.getElementById('boton-carrito'); // un boton del carro
const carritoCerrar = document.getElementById('carritoCerrar'); // cierra carro
const finalizarCompra = document.getElementById('finalizar-compra'),
contenedorTexto = document.getElementById("contenedorTexto");

// evento dom carrito 
carritoAbrir.addEventListener('click', ()=> {
    contenedorProductos.classList.toggle('modal-active')
})
carritoCerrar.addEventListener('click', ()=> {
    contenedorProductos.classList.toggle('modal-active')
})
contenedorCarritoCompra.addEventListener('click',(e)=>{
    e.stopPropagation()
})
contenedorProductos.addEventListener('click', ()=>{
    carritoCerrar.click()
})
finalizarCompra.addEventListener('click', ()=>{
    swal({
        title: "Gracias por tu compra!",
        text:  "Volviendo al menu principal" ,
        button: false,
        timer: 2000    
    })
    carritoCerrar.click()
    vaciarCarrito();      
})
