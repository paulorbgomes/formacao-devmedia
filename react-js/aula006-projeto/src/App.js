import React from "react";
import "./App.css";

import Topo from "./componentes/Topo";
import Principal from "./componentes/Principal";
import Rodape from "./componentes/Rodape";

function App() {
  return (
    <div>
      <Topo />
      <Principal />
      <Rodape />
    </div>
  );
}

export default App;
