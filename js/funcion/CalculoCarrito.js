function mostrarPrecioFinal (array) {
    let precioFinal = 0;
    for (const iterator of array) {
        precioFinal += iterator.cantidad * iterator.precio;
    }
    valorFinal.innerText = precioFinal;
    valorDeCuota.innerText =`Podes pagar en 12 cuotas Sin Interes de: ${pagoEnCuotas(precioFinal, 12)}`   
}

function pagoEnCuotas (precioFinal, cuotas) {
    return (precioFinal / cuotas).toFixed(2)
}

function vaciarCarrito () {
    let compraCarritoBorrar = document.getElementById("carrito-contenedor");
    carrito = [];
    sessionStorage.clear();
    compraCarritoBorrar.innerHTML = "";
    actualizarCarrito(carrito)
}
