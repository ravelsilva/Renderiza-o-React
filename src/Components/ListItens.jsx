import React from "react";
import "./ListItens.css"
const ListItens = ({ lista }) => {
  return (
    <> {/*Sempre utilizar os fragments <> </> */}
      {lista.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
};

export default ListItens;
