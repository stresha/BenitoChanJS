
function actualizarStorage (carritoActualizado) {

    sessionStorage.clear();
    const newJSON = JSON.stringify(carritoActualizado);
    sessionStorage.setItem("CarritoGuardado", newJSON);
    
}

function cargarCarritoStorage () {
    let carritoGuardado = JSON.parse(sessionStorage.getItem("CarritoGuardado")) || [];
        
        
        carritoGuardado.map((producto) => {

            // EMPIEZA - LLAMADA DENTRO DE LA CREACION DEL ELEMENTO EN EL CARRITO
            let {nombre, precio, id, cantidad} =  producto;
            let div = document.createElement('div')
            div.className='productoEnCarrito'
            div.innerHTML = `
                        <p>Nombre: ${nombre}</p>
                        <p>Precio: $${precio}</p>
                        <p id="cantidad${id}">Cantidad: ${cantidad}</p>
                        <button id="btnEliminar${id}" class=" radio  "><img  src="multimedia/compra/basura.png"></button>
                        `
            contenedorCarrito.appendChild(div)
    
            actualizarCarrito(carrito);
    
            let btnEliminar = document.getElementById(`btnEliminar${id}`)
    
            // TERMINA - LLAMDA DE CREACION

            // EMPIEZA - LLAMADA DENTRO DEL BOTON ELIMINAR

            btnEliminar.addEventListener('click',()=>{
                if(producto.cantidad == 1){
                    btnEliminar.parentElement.remove() 
                    carrito = carrito.filter(elemento => elemento.id != id)
                }else{           
                    producto.cantidad = producto.cantidad - 1
                    document.getElementById(`cantidad${id}`).innerHTML = `<p id=cantidad${id}>Cantidad: ${producto.cantidad}</p>`
                }
                actualizarCarrito(carrito);
            })

            // TERMINA - LLAMADA DENTRO DEL BOTON ELIMINAR
        })
        
        carrito = carritoGuardado;

        actualizarCarrito(carrito);
          
}