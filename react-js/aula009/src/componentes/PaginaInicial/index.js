import React, { useState } from "react";
import "./style.css";

function PaginaInicial() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(1);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  return (
    <div className="corpo">
      <h1>Número Aleatório:</h1>
      <h1>{numeroAleatorio}</h1>

      <div>
        <label>
          <b>Clique no botão abaixo para gerar um número aleatório:</b>
        </label>
        <br />
        <br />
        <button onClick={gerarNumero}>Gerar Número</button>
      </div>
    </div>
  );
}

export default PaginaInicial;
