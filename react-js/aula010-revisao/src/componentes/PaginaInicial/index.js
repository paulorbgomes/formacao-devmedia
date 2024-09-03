import React, { useState } from "react";
import "./style.css";

function PaginaInicial() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  return (
    <div className="paginaPrincipal">
      <div>
        <h1>Número Aleatório</h1>
        <h1>{numeroAleatorio}</h1>
      </div>

      <div>
        <label>Clique no botão abaixo para gerar um número aleatório:</label>
        <br />
        <br />
        <button onClick={gerarNumero}>Gerar Número Aleatório</button>
      </div>
    </div>
  );
}

export default PaginaInicial;
