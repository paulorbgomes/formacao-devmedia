import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function BotaoVoltar() {
  return (
    <div>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default BotaoVoltar;
