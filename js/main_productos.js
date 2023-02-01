const renderModelos = () =>{
    const modelos = cargarModelosLC();
    let salida ="";
    for(model of modelos){
       salida+=`<article class="col-sm-12 col-md-6 col-lg-4 text-center p-3">
       <a onClick="renderModal(${model.id});" class="sp-btn-size lsc-btn-adjust btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalcontainer" href="#"   >
        <img class="w-75 " src="${model.imagen}" alt="${model.nombre}">
           <p class="">"${model.nombre}"</p>
           <p class="">$${model.precio}</p>
       </a>
       <button class="btn btn-info w-50  type="button" onClick="(agregarAlCarrito(${model.id}));" ">Agregar al carrito</button></article>`
       ;
    }
    
    document.getElementById("carga").innerHTML = salida;
}

renderBotonCarrito();

const renderModal = (id) =>{
    let modeloModal = modelos.find(item => item.id === id);
    let salida ="";
    salida+=`<div class="modal-header">
    <h5 class="modal-title">${modeloModal.nombre}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <model-viewer id="mv-demo" shadow-intensity="4" src="${modeloModal.model}"
alt="A 3D model of an astronaut" auto-rotate camera-controls
poster=""></model-viewer>

  </div>
 <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    <button type="button" onClick="(agregarAlCarrito(${modeloModal.id}))" class="btn btn-primary">Agregar al carrito</button>
  </div>`
    
    document.getElementById("modal").innerHTML = salida;
}