import "./App.css";
import React from "react";
import ListItens from "./Components/ListItens.jsx";

const App = () => {
  const MinhaLista = ["Ravel", "Eliza", "Miguel", "Dulcineia", "Jorge"];
  //Criar a lista
  return (
    <div>
      <h1>Lista de tarefas - Renderização com MAP</h1>
      {/* Retornar a lista */}
      <ListItens lista={MinhaLista} />
    </div>
  );
};

export default App;
