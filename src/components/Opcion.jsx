import React from 'react';

const Opcion = (props) => {
  return (
    <div className="opcion" onClick={props.elegir}>
      <p>{props.valor.eleccion}</p>
      {/*       <p>{props.valor.name}</p> */}
    </div>
  );
};

export default Opcion;
