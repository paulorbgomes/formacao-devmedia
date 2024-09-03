import React, { useState } from "react";
import "./style.css";

function PaginaInicial() {
  const [mensagemGerada, mostrarMensagemGerada] = useState("");

  function mostrarMensagem() {
    mostrarMensagemGerada("Hello, World!");
  }

  return (
    <div>
      <div>
        <h1>Exemplo Hello World!</h1>
        <h3>{mensagemGerada}</h3>
      </div>

      <div>
        <label>Clique no botão abaixo para aparecer uma mensagem:</label>
        <br />
        <br />
        <button onClick={mostrarMensagem} className="botao">
          Gerar Texto
        </button>
      </div>
    </div>
  );
}

export default PaginaInicial;
