let formulario = document.getElementById("formulario"); //en html
// creacion del formulario
let formularioCompleto = document.createElement('div')
formularioCompleto.className = 'formularioContacto'
formularioCompleto.innerHTML = `
                            <form id="form" action="" class="form text-warning fs-5">
                            <label for="name">Nombre</label>
                            <input class="campo " name="name" type="text" required >
                            <label for="email">Correo electrónico</label>
                            <input class="campo " name="email" type="text" required >
                            <label for="message">Mensaje</label>
                            <textarea  class="campo " name="message" ></textarea>
                            <button type="submit" class="boton-enviar  btn btn-outline-warning m-3 ">enviar mensaje</button>
                          </form>
              `
              formulario.appendChild(formularioCompleto)
const provinciasData = []
const direccion = "../provincias.json";

fetch(direccion)
  .then( (respuesta) => respuesta.json())
  .then( (provincias) => {
      provincias.forEach((lugares) => {
        provinciasData.push(lugares)
      });
  })    

function cargarProvinciasEnFormulario () {
  let select = document.getElementById("provincias"); 
  
  let option = document.createElement("option"); 
  option.innerHTML = "Seleccione su localidad"; 
  select.appendChild(option);

  provinciasData.forEach(element => {
    let {nombre} = element;
    let option = document.createElement("option"); 
    option.innerHTML = nombre; 
    select.appendChild(option); 
  });
}
setTimeout( () => {
  cargarProvinciasEnFormulario();
}, 100)
