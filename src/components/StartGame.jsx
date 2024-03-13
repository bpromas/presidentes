import React from "react";

function StartGame({ startGame }) {
  return (
    <div className="startgame">
      <h2>Arraste os presidentes para a linha do tempo na ordem correta</h2>
      <div className="start-button" onClick={startGame}>
        Começar
      </div>
    </div>
  );
}

export default StartGame;
