import React from "react";
import "../App.css";
import PropTypes from "prop-types";

const Inspector = props => {
  return (
    <div className="personBorder">
      <h2>
        Hola mi nombre es {props.name} y tengo {props.age} años y soy {props.gender}
      </h2>
      <button className="button" onClick={props.clicked}>
        Eliminar
      </button>
    </div>
  );
};

Inspector.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  clicked: PropTypes.func,
  gender: PropTypes.oneOf(['hombre', 'mujer'])
};

export default Inspector;