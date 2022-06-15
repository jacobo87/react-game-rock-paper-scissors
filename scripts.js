// Crearemos un objeto para el jugador y el ordenador.
const player = {
  currentChoice: null,
};
const computer = {
  currentChoice: null,
};

// Distintas elecciones
const choices = ["Lapis", "Papyrus", "Scalpellus"];
player.currentChoice = choices[0];

// Para obtener la elección de computer, creamos una nueva variable randomIndex. La variable generará un nuevo número aleatorio cada vez que se ejecute el programa. Sólo estamos obteniendo un número aleatorio que corresponde a la longitud de la matriz.
// const randomIndex = Math.floor(Math.random() * choices.length);
// Luego, actualizaremos la propiedad currentChoice del objeto computer con su elección. Obtenemos su elección accediendo al array choices en el randomIndex que hemos generado.
// computer.currentChoice = choices[randomIndex];
// Comprobamos el resultado
// console.log("The computer chose " + computer.currentChoice);

function computerChooses() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}

// Hacemos la comparativa condicional entre el juegador y el PC
function compareChoices() {
  computerChooses();
  // Empate
  if (computer.currentChoice === player.currentChoice) {
    //console.log("¡Empate! Tanto el ordenador como el jugador han elegido " + computer.currentChoice);
    result =
      "¡Empate! Tanto el ordenador como el jugador han elegido " +
      computer.currentChoice;
    // Ahora escribimos el condicional
  } else if (computer.currentChoice === choices[0]) {
    if (player.currentChoice === choices[1]) {
      console.log(
        "El jugador ha ganado, el PC ha elegido " +
          computer.currentChoice +
          " y el jugador a elegido " +
          player.currentChoice
      );
    } else {
      console.log(
        "El PC ha ganado, el PC ha elegido " +
          computer.currentChoice +
          " y el jugador a elegido " +
          player.currentChoice
      );
    }
  } else if (computer.currentChoice === choices[1]) {
    if (player.currentChoice === choices[2]) {
      console.log(
        "El jugador ha ganado, el PC ha elegido " +
          computer.currentChoice +
          " y el jugador a elegido " +
          player.currentChoice
      );
    } else {
      console.log(
        "El PC ha ganado, el PC ha elegido " +
          computer.currentChoice +
          " y el jugador a elegido " +
          player.currentChoice
      );
    }
  } else if (computer.currentChoice === choices[2]) {
    if (player.currentChoice === choices[0]) {
      console.log(
        "El jugador ha ganado, el PC ha elegido " +
          computer.currentChoice +
          " y el jugador a elegido " +
          player.currentChoice
      );
    } else {
      console.log(
        "El PC ha ganado, el PC ha elegido " +
          computer.currentChoice +
          " y el jugador a elegido " +
          player.currentChoice
      );
    }
  }
}

// La función displayResult crea un nuevo elemento de párrafo, llamado resultText, que agrega los resultados de la función compareChoices anterior.
function displayResult(result) {
  const resultText = document.createElement("p");
  resultText.innerText = result;
  document.body.appendChild(resultText);
}

// const titulo = document.querySelector('.titulo');
// titulo.addEventListener("click", displayResult(result));

// Finally, don't forget to invoke the function!
compareChoices();
