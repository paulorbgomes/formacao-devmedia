import React from "react";
import "./style.css";

import BotaoVoltar from "../BotaoVoltar/";

function PaginaFrontEnd() {
  return (
    <div>
      <h1>React.js</h1>
      <p>
        React é uma biblioteca JavaScript para a criação de interfaces de
        usuário e, nesse contexto, uma das tecnologias mais utilizadas pelo
        mercado. No guia abaixo, você aprenderá quais são os pré-requisitos para
        iniciar no React do eito certo e como cria as suas primeiras SPAs com
        ela.
      </p>

      <a href="https://www.devmedia.com.br/react/">Guia de React</a>

      <BotaoVoltar />
    </div>
  );
}

export default PaginaFrontEnd;
