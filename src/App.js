import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import React, {useState} from 'react';

function App() {

  const [numClics, setNumClics ] = useState (0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarComtador = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
      <h1 className='titulo'>Contador de Clics</h1>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto='Reiniciar' esBotonDeClics={false} manejarClic={reiniciarComtador}/>
      </div>
    </div>
  );
}

export default App;
