import React from "react";
import "./ListItens.css"
const ListItens = ({ lista }) => {
  return (
     <>
      {" "}
      {/*Sempre utilizar os fragments <> </> */}
      {lista.length > 0 ? (
        lista.map((item) => <p>{item}</p>)
      ) : (
        <h2>"Sua lista está vazia"</h2>
      )}
    </>
  );
};

export default ListItens;
