import React from "react";
import '../hojas-de-estilo/Boton.css';



//Si uso {texto} se llama sintaxis de desenstructuracion
// de hecho es lo que normalmente se hace

function Boton({ texto, esBotonDeClic , manejarClick }){
  return(
    <button
      className={ esBotonDeClic ? "boton-click" : "boton-reiniciar" }
      onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;