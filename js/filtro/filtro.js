//logica filtro

const filtro = document.getElementById('filtros') // filtrar categorias

filtro.addEventListener('change',()=>{
    let {value} = filtro ;
    value == 'all' ? mostrarProductos(stockdisponibleActualizado) :  mostrarProductos(stockdisponibleActualizado.filter(elemento => elemento.categoria == filtro.value))
    
})