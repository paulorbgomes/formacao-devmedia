import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaPrincipal from "../PaginaPrincipal/";
import PaginaFrontEnd from "../PaginaFrontEnd/";
import PaginaBackEnd from "../PaginaBackEnd/";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PaginaPrincipal />} />
        <Route path="/front-end" element={<PaginaFrontEnd />} />
        <Route path="/back-end" element={<PaginaBackEnd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
