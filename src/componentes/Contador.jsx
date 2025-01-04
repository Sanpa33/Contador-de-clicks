import React from "react";
import "../hojas-de-estilo/Contador.css"

// Es comun dejar los espacios entre los props
function Contador({ cantClicks }){
  return(
    <div className="contador">
      {cantClicks}
    </div>
  );
}


export default Contador;