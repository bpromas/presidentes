import React from "react";

function Results({ gameFinished }) {
  if (gameFinished) {
    return <div>Fim de jogo!</div>;
  }
}

export default Results;
