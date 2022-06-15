import React, { useState } from 'react';
import Opcion from './Opcion';
import Resultado from './Resultado';

const Main = () => {
  // declaramos el estado por defecto
  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionMaquina, setEleccionMaquina] = useState({});

  // creamos los datos para el juego
  const opciones = [
    {
      eleccion: '✊',
      derrota: 'tijera',
      name: 'piedra',
    },

    {
      eleccion: '✋',
      derrota: 'piedra',
      name: 'papel',
    },
    {
      eleccion: '✌️',
      derrota: 'papel',
      name: 'tijera',
    },
  ];

  const elegirOpcionJugador = (event) => {
    const jugador = opciones.find(
      (e) => e.eleccion === event.target.textContent,
    );
    setEleccionJugador(jugador);
    eleccionMaquinaRival();
  };

  const eleccionMaquinaRival = () => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];

    setEleccionMaquina(eleccion);
  };

  return (
    <main>
      <section className="player">
        <div className="jugador">Jugador</div>
        <div className="eleccion">{eleccionJugador.eleccion}</div>
      </section>
      <section className="player">
        <div className="jugador">Máquina</div>
        <div className="eleccion">{eleccionMaquina.eleccion}</div>
      </section>
      <div className="opciones">
        {opciones.map((e, index) => (
          <Opcion valor={opciones[index]} elegir={elegirOpcionJugador} />
        ))}
      </div>
      <div className="resultados">
        {<Resultado jugador={eleccionJugador} maquina={eleccionMaquina} />}
      </div>
    </main>
  );
};

export default Main;
