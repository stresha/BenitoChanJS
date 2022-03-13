
fetch(url) //asincronico - Se llama al final de todo el codigo
.then( (respuesta) => respuesta.json())
.then( (productos) => {
    // console.log(productos)
    productos.forEach((producto) => {
        stockdisponibleActualizado.push(producto)
    });
})    