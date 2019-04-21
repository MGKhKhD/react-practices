import React from "react";
import PropTypes from "prop-types";

import Person from "./Person";

const PresonList = props => {
  return props.persons.map(person => (
    <Person
      key={person.id}
      name={person.name}
      age={person.age}
      deletePerson={() => props.deletePerson(person.id)}
      inputChange={(value, name) => props.inputChange(person.id, value, name)}
      registerInputChange={bool => props.registerInputChange(person.id, bool)}
      allowInputElm={props.registeredInput === person.id ? true : false}
    />
  ));
};

PresonList.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  deletePerson: PropTypes.func,
  inputChange: PropTypes.func,
  registerInputChange: PropTypes.func,
  registeredInput: PropTypes.number
};

export default PresonList;
