import React from 'react';

const Resultado = (props) => {
  let resultadoFinal;

  if (
    props.jugador.derrota === props.maquina.eleccion &&
    props.jugador.eleccion
  ) {
    resultadoFinal = <h3>Ganador: Jugador</h3>;
  } else if (
    props.maquina.derrota === props.jugador.eleccion &&
    props.jugador.elecion
  ) {
    resultadoFinal = <h3>Ganador: Máquina</h3>;
  } else if (
    props.jugador.eleccion === props.maquina.eleccion &&
    props.jugador.eleccion
  )
    resultadoFinal = <h3>¡Empate!</h3>;

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
