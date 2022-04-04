function agregarAlCarrito(item) {
    let seRepite = carrito.find(elemento => elemento.id == item)
    
    if(seRepite){
        seRepite.cantidad++;
        document.getElementById(`cantidad${seRepite.id}`).innerHTML = `<p id=cantidad${seRepite.id}>Cantidad: ${seRepite.cantidad}</p>`
        actualizarCarrito(carrito);
    }else{
        let agregarProducto = stockdisponibleActualizado.find(prod => prod.id == item)
        carrito.push(agregarProducto) 
        mostrarCarrito(agregarProducto)
    }
   
    
}