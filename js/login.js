const guardarDatos =  () => {
    let mail = document.getElementById("mail").value;
    localStorage.setItem("usuario", JSON.stringify(mail));
    console.log("datos guardados");
    location.reload();
    location.href = "./productos.html";

}

const recuperarDatos = () => {
    return JSON.parse(localStorage.getItem("usuario"));
}

let dato= recuperarDatos();
if(dato!=null){
    let salida = `    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Mi perfil
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
      <li><a class="dropdown-item" onClick="cerrarSesion()" href="#">Cerrar sesion</a></li>
    </ul>
  </li>`;
    
    document.getElementById("user").innerHTML = salida;
}
else
{
    let salida = `<a class="nav-link active"  aria-current="page" href="../page/login.html">Iniciar sesion</a>`;
    document.getElementById("user").innerHTML = salida;
}

const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    verificarUsuario();
   
}


const verificarUsuario = () =>  {
        return new Promise((rejected) => {
            setTimeout(() => 
            rejected(recuperarDatos()));
            console.log(rejected);
          
        }).then(location.href = "./login.html")
        }

if(document.getElementById("btnGuardarDatos")!= null){
    document.getElementById("btnGuardarDatos").addEventListener("click", guardarDatos);
}