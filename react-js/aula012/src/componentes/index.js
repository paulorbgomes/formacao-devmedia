import React, { useState } from "react";
import "./style.css";

function PaginaInicial() {
  const [novoEstilo, setCor] = useState("areaColoridaVermelha");

  function mudarCor() {
    if (novoEstilo === "areaColoridaVermelha") {
      setCor("areaColoridaAzul");
    } else {
      setCor("areaColoridaVermelha");
    }
  }

  return (
    <div>
      <div>
        <h1>ALTERANDO O ESTILO DO ELEMENTO</h1>
        <div className={novoEstilo}></div>
      </div>

      <div>
        <label>
          Clique no botão abaixo para alterar o estilo do elemeto acima:
        </label>
        <br />
        <br />
        <button onClick={mudarCor} className="botao">
          ALTERAR COR
        </button>
      </div>
    </div>
  );
}

export default PaginaInicial;
