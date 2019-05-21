import React, { Component } from "react";
import Inspector from "./components/Inspector";
class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Steven", age: '27', gender:"hombre" },
      { id: 2, name: "John", age: 2, gender:"hombre" },
      { id: 3, name: "Kelly", age: 8, gender:"mujer"}
    ],
    clicked: false
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
render() {
    return (
      <div className="app_heading">
        <h1>Bienvenidos Inspectores</h1>
        <button className="showButton" onClick={this.clickHandler}>
          Mostrar inspectores
        </button>
        {this.state.clicked && this.mapThroughPersonsArray()}
      </div>
    );
  }
}
export default App;