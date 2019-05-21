import React from "react";
import "../App.css";
import PropTypes from "prop-types";
import Direccion from "../clases/Direccion";

const Locales = props => {
  return (
    <div className="personBorder">
      <h2>
        Local {props.nombre} de la ciudad de {props.ciudad} 
      </h2>
    </div>
  );
};

Locales.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  ciudad: PropTypes.string,
  direccion: PropTypes.instanceOf(Direccion)
};

export default Locales;