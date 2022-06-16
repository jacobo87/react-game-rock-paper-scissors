import React from 'react';

const Resultado = (props) => {
  let resultadoFinal;

  /*   console.log(props.opciones);
  console.log(props.jugador.eleccion, props.jugador.derrota);
  console.log(props.maquina.eleccion, props.maquina.derrota); */

  if (props.jugador.eleccion != null) {
    if (props.jugador.eleccion === props.maquina.eleccion) {
      resultadoFinal = <h3>¡Empate!</h3>;
    } else if (props.maquina.eleccion === props.jugador.derrota) {
      resultadoFinal = <h3>¡Ganaste!</h3>;
    } else {
      resultadoFinal = <h3>¡Has perdido!</h3>;
    }
  }

  return (
    <div className="resultado">
      <section>
        <h2>Resultado</h2>
        <h3>{resultadoFinal}</h3>
      </section>
    </div>
  );
};

export default Resultado;
