import React from "react";
import "../App.css";

const Inspector = props => {
  return (
    <div className="personBorder">
      <h2>
        Hola mi nombre es {props.name} y tengo {props.age} años
      </h2>
      <button className="button" onClick={props.clicked}>
        Eliminar
      </button>
    </div>
  );
};

export default Inspector;