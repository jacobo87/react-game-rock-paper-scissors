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
      derrota: '✌️',
      name: 'piedra',
    },

    {
      eleccion: '✋',
      derrota: '✊',
      name: 'papel',
    },
    {
      eleccion: '✌️',
      derrota: '✋',
      name: 'tijera',
    },
  ];

  const opcionesFinales = {
    '✊': '✌️',
    '✋': '✊',
    '✌️': '✋',
  };

  const elegirOpcionJugador = (event) => {
    console.log('event:', event.target.context);
    const jugador = opciones.find(
      // creo funcion y le paso el props el elemento, el elemento
      // es igual a elección y me tiene que devolver el contenido del texto
      // del archivo opcion,  <p>{props.valor.eleccion}</p>
      (elemento) => elemento.eleccion === event.target.textContent,
      /*
      jugador = event.target.textContent
       elemento = {
      eleccion: '✌️',
      derrota: 'papel',
      name: 'tijera',
    }
      */
    );
    console.log('event:', event.target.context);

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
        {opciones.map((elemento, index) => (
          <Opcion valor={elemento} key={index} elegir={elegirOpcionJugador}>
            {/* {console.log(eleccion)} */}
          </Opcion>
        ))}
      </div>
      <div className="resultados">
        {
          <Resultado
            jugador={eleccionJugador}
            maquina={eleccionMaquina}
            opciones={opciones}
            opcionesFinales={opcionesFinales}
          />
        }
      </div>
    </main>
  );
};

export default Main;
