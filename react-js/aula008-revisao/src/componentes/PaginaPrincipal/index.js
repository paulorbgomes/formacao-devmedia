import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

function PaginaPrincipal() {
  return (
    <div>
      <h1>Escolha seu caminho em JavaScript ...</h1>
      <div>
        <Link to="/front-end">Front-End</Link>
        <Link to="/back-end">Back-End</Link>
      </div>
    </div>
  );
}

export default PaginaPrincipal;
