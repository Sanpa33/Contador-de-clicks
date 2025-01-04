import './App.css';
import Boton from "./componentes/Boton"
import Contador from "./componentes/Contador"
import { useState } from 'react'; // Esto es un hook

function App() {

  const [numClicks, setNumClicks ] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0)
  };


   return (
    <div className="App">
    
      <div className='contenedor-principal'>
        <h1>Contador de Clicks</h1>

        <Contador
          cantClicks = {numClicks} />

        <Boton
          texto="Click"
          esBotonDeClic={true}
          manejarClick={manejarClick} />
        
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClick={reiniciarContador} />

      </div>
    
    </div>

  );
}

export default App;
