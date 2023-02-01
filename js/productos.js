modelos = [];

const buscarContenido = async () => {
        const respuesta = await fetch("https://api.jsonbin.io/v3/b/63d6f2edc0e7653a05663991?meta=false");
        const data = await respuesta.json();
        let contenido = "";
        modelos= data;
        guardarModelosLC(modelos);
        verificarModelos(data).then((respuesta) =>{
            renderModelos();
        }).catch(()=> {
        });
    }
    
    buscarContenido();

    const guardarModelosLC = (modelos) => {
        localStorage.setItem("modelos", JSON.stringify(modelos));
    }

    const cargarModelosLC = () => {
        return JSON.parse(localStorage.getItem("modelos")) || [];
    }