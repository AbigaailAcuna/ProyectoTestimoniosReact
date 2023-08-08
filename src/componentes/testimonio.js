//me permite usar el poder de react xd
import React from 'react';
import '../css/testimonio.css';

{/*definimos componente funcional, no de clase*/}
function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      {/*usando las llaves incluimos codigo js*/}
      <img className='imagen-testimonio' src={require(`../img/testimonio-${props.imagen}.png`)} alt='Foto de emma'/>

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong> </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>

  );
}

//lo exportamos, para poder importarlo desde app.js
export default Testimonio;
//hay 2 tipos de exportación, nombrada y por defecto