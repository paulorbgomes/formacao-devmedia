import React from "react";
import "./style.css";

import Banner from "../Banner";
import Informacoes from "../Informacoes";
import Produtos from "../Produtos";
import Contatos from "../Contatos";

function Principal() {
  return (
    <main>
      <Banner />
      <Produtos />
      <Informacoes />
      <Contatos />
    </main>
  );
}

export default Principal;
