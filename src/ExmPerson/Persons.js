import React from "react";

import FormControl from "./FormControl";
import PresonList from "./PersonList";

import "./Persons.css";

class Persons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: "Person1", age: 10,},
        { id: 2, name: "Person2", age: 13 },
        { id: 3, name: "Person3", age: 50 }
      ],
      toggle: true,
      registeredInput: 0
    };
  }

  handleToggleList = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  handleDelete = personId => {
    this.setState({
      persons: this.state.persons.filter(person => person.id !== personId)
    });
  };

  handleInputChnage = (personId, value, name) => {
    const index = this.state.persons.findIndex(
      person => person.id === personId
    );
    const persons = [...this.state.persons];
    const person = { ...persons[index] };
    if (name === "name") {
      person.name = value;
    } else {
      person.age = value;
    }
    persons[index] = person;
    this.setState({ persons: persons });
  };

  handleRegisterInputChange = (personId, bool) => {
    this.setState({ registeredInput: bool ? personId : 0 });
  };

  render() {
    const style = {
      background: this.state.toggle ? "green" : "red"
    };

    return (
        <div>
          <FormControl
            personsLength={this.state.persons.length}
            style={style}
            toggleList={this.handleToggleList.bind(this)}
          />
          {this.state.toggle && (
            <PresonList
              persons={this.state.persons}
              deletePerson={this.handleDelete}
              inputChange={this.handleInputChnage}
              registerInputChange={this.handleRegisterInputChange}
              registeredInput={this.state.registeredInput}
            />
          )}
        </div>
    );
  }
}

export default Persons;
