function mostrarCartelModelo(){
Toastify({
    text: "Producto agregado",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){}
  }).showToast();

}

function mostrarCartelCarrito(){
    Toastify({
        text: "Producto ya agregado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #C90039, #C70039)",
        },
        onClick: function(){}
      }).showToast();
    
    }


const renderModalCompra = () =>{
    let salida= "";
    salida+=`<div class="modal-header">
        <h3 class="modal-title">Felicidades ha concluido la compra! </h3>
        <button type="button" class="btn-close" data-bs-dismiss="modalCompra" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p> En breve recibirá un mail de confirmación </p>
        <model-viewer id="mv-demo" shadow-intensity="1" src="spacesuit.glb.glb"
alt="A 3D model of an astronaut" auto-rotate camera-controls
poster=""></model-viewer>

      </div>
     <div class="modal-footer">
        <button type="button" onClick="vaciarCarrito();"; class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>`;

         document.getElementById("modalCompra").innerHTML = salida;
}

const mensajeMail = () => {
        const modelos = cargarModelosCarrito();
        let salida ="";
        for(model of modelos){
           salida+=`<a href="${model.link}"><article class="col-sm-12 col-md-3 col-lg-3 text-center p-3">
            <img class="w-75 " src="${model.imagen}" alt="${model.nombre}">
               <p class="">${model.link}"</p>
           </article></a>`
           ; 
    }
    return salida;
}
