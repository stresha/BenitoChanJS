const stockdisponibleActualizado = [] 
const contenedorCarrito = document.getElementById("carrito-contenedor"); // id donde esta la compra
const productos = document.getElementById("productos_vigentes");  //id de productos html
let carrito = []; //array carrito  - carrito vacio
const valorFinal = document.getElementById("valorFinal"); // precio final que se ve 
const contadorCarrito = document.getElementById('contadorCarrito'); // cuenta productos
const url = "./data.json";


function mostrarCarrito(agregarProducto) {
    let {nombre, precio, cantidad, id} = agregarProducto;
    let div = document.createElement('div')
    div.className='productoEnCarrito'
    div.innerHTML = `
                    <p>Nombre: ${nombre}</p>
                    <p>Precio: $${precio}</p>
                    <p id="cantidad${id}">Cantidad: ${cantidad}</p>
                    <button id="btnEliminar${id}" class="radio"><img  src="multimedia/compra/basura.png"></button>
                    `
    contenedorCarrito.appendChild(div)
    let btnEliminar = document.getElementById(`btnEliminar${id}`)
    btnEliminar.addEventListener('click',()=>{
        if(agregarProducto.cantidad == 1){
            btnEliminar.parentElement.remove()
            carrito = carrito.filter(elemento => elemento.id != id)
        }else{           
            agregarProducto.cantidad--;
            console.log(agregarProducto.cantidad);
           
            document.getElementById(`cantidad${id}`).innerHTML = `<p id=cantidad${id}>Cantidad: ${agregarProducto.cantidad}</p>`
        }
        actualizarCarrito(carrito);
    })
}

function mostrarProductos(array) {
    cargarCarritoStorage();
    productos.innerHTML = "";
    array.forEach(producto =>  {
        let {img, nombre, id , categoria, precio , detalle } = producto;
        let caja = document.createElement('div')
        caja.className = 'producto '
        caja.innerHTML = `
                        <div class="card ">
                            <div class="card-image text-center">
                                <img src=${img}>
                                <span class="card-title">${nombre}</span>
                                <button id="botonAgregar${id}"  class="boton_agregar"><img src="./multimedia/productos/carts.png" alt="logo" > </button>
                                <p>id producto: ${id}</p>
                                <button id="boton${id}" class="radio" ></button>
                                <p>Categoria: ${categoria}</p>
                                <p> $${precio}</p>
                             </div>
                        </div> `
        productos.appendChild(caja)
            
        let btnAgregar = document.getElementById(`botonAgregar${id}`)
        btnAgregar.addEventListener('click', ()=>{
             Toastify({
                text: "Agregado al carrito!",
                duration: 2000,
                style: {
                    background: '#f0ad4e'
                        }
                }).showToast();
        agregarAlCarrito(id)
        })

        let botonDetalle = document.getElementById(`boton${id}`)
        botonDetalle.innerHTML = `<button class=" btn btn-warning "> Click Me! </button>`;
        botonDetalle.addEventListener('click', ()=>{
            botonDetalle.innerHTML = botonDetalleProducto(detalle);
        
        })
    })
}

let botonEstado = true;
function botonDetalleProducto(Descripcion){
    let textoADevolver;

    botonEstado = !botonEstado;
    botonEstado ?
    textoADevolver = `<button class=" btn btn-warning "> Click Me! </button>` :
    textoADevolver = `<button class=" btn btn-warning "> ${Descripcion}</button>`;
    return textoADevolver;
    
}
    
function  actualizarCarrito (array){
    console.log(carrito);
    let cantidadDeElementos = 0;
    for (const iterator of array) {
        cantidadDeElementos += iterator.cantidad;
    }
    contadorCarrito.innerText = cantidadDeElementos;
    mostrarPrecioFinal(array)
    actualizarStorage(array);
}

