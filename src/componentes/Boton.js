import React from 'react';
import '../estilos/boton.css'; 

const Boton = ({ texto, esBotonDeClics, manejarClic }) => {
  return (
    <button className={esBotonDeClics ? 'boton-clic' : 'boton-reiniciar'} onClick={manejarClic}>{texto}</button>
  )
}

export default Boton;