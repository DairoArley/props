import React, { Component } from "react";
import Inspector from "./components/Inspector";
import Locales from "./components/Locales";
import Direccion from "./clases/Direccion";
class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Steven", age: 27, gender:"hombre" },
      { id: 2, name: "John", age: 2, gender:"hombre" },
      { id: 3, name: "Kelly", age: 8, gender:"mujer"}
    ],
    clicked: false,
    locales: [
      { id: 1, name: "Camacol", ciudad: "Medellín"},
      { id: 2, name: "El redondo", ciudad: "Medellín"},
      { id: 3, name: "Proteccion", ciudad: "Bogotá"}
    ],
    dir : new Direccion(1,2,3)
    
    
  };
clickHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };
mapThroughPersonsArray = () => {
    return this.state.persons.map((person, index) => (
      <Inspector
        key={person.id}
        person={person}
        name={person.name}
        age={person.age}
        clicked={() => this.removePersonHandler(index)}
        gender={person.gender}
      />
    ));
  };
removePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

mapLocales = () => {
  return this.state.locales.map((local, index) => (
    <Locales
      key={local.id}      
      name={local.name}
      ciudad={local.ciudad}
      direccion={this.dir}
    />
  ));
};

render() {
    return (
      <div className="app_heading">
        <h1>Bienvenidos Inspectores</h1>
        <button className="showButton" onClick={this.clickHandler}>
          Mostrar inspectores
        </button>
        {this.state.clicked && this.mapThroughPersonsArray()}
        {this.state.clicked && this.mapLocales()}
      </div>
    );
  }
}
export default App;