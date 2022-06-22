import React, { useState } from 'react';

const Section = () => {
  // creamos los datos para el juego
  const datosJuego = [
    {
      name: 'piedra',
      derrota: 'tijera',
      icon: '✊',
      src: 'https://wiki.melvoridle.com/images/3/34/Cool_Rock_%28pet%29.svg',
      item: 'piedra',
    },

    {
      name: 'papel',
      derrota: 'piedra',
      icon: '✋',
      src: 'https://www.svgrepo.com/show/155092/paper.svg',
      item: 'papel',
    },
    {
      name: 'tijera',
      derrota: 'papel',
      icon: '✌',
      src: 'https://cdn-icons-png.flaticon.com/512/40/40742.png',
      item: 'tijera',
    },
  ];

  const [elecionJugador, seleccionEleccionJugador] = useState('');
  const [elecionMaquina, seleccionEleccionMaquina] = useState('');

  return (
    <>
      <div className="opciones">
        <h2>Elija una opción</h2>
        <div id="opciones">
          {datosJuego.map((opcion, index) => {
            return (
              <picture id={opcion.item} key={opcion.name}>
                <img src={opcion.src} alt={opcion.name} />
              </picture>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
