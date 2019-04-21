import React, { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "./AuthContext";

import PropTypes from "prop-types";

const Person = props => {
  const [inputValue, setInputValue] = useState("");
  const [inputName, setInputName] = useState(false);
  const [inputAge, setInputAge] = useState(false);

  const inputRef = useRef(null);
  const authed = useContext(AuthContext);

  const style = {
    width: "60%",
    margin: "10px auto",
    border: "1px solid blue",
    boxShadow: "1px 2px 3px red",
    padding: "16px",
    textAlign: "center"
  };

  const inputChange = event => {
    setInputValue(event.target.value);
    props.inputChange(event.target.value, event.target.name);
  };

  const nameClick = event => {
    setInputName(!inputName ? true : false);
    setInputAge(false);
  };

  const ageClick = event => {
    setInputName(false);
    setInputAge(!inputAge ? true : false);
  };

  useEffect(() => {
    if (
      authed.isAuthenticated &&
      props.allowInputElm &&
      (inputName || inputAge)
    ) {
      inputRef.current.focus();
    }
    registerChange(inputName || inputAge);
  }, [inputName, inputAge, props.allowInputElm]);

  const handleKeyDown = event => {
    if (event.keyCode !== 13) return;
    setInputAge(false);
    setInputName(false);
    registerChange(false);
  };

  const registerChange = bool => {
    props.registerInputChange(bool);
  };

  return (
    <div style={style}>
      <p>
        <span style={{ margin: "2rem " }} onClick={nameClick.bind(this)}>
          Name: {props.name}
        </span>
        <span style={{ margin: "2rem " }} onClick={ageClick.bind(this)}>
          Age: {props.age}
        </span>
      </p>
      <AuthContext.Consumer>
        {context =>
          context.isAuthenticated ? (
            <React.Fragment>
              <button
                type="button"
                className="btn"
                onClick={props.deletePerson}
              >
                Delete
              </button>
              <br />
              {props.allowInputElm && (inputName || inputAge) && (
                <input
                  type="text"
                  ref={inputRef}
                  name={inputName ? "name" : "age"}
                  onChange={inputChange.bind(this)}
                  placeholder={
                    inputName ? "enetr new name..." : "enter new age..."
                  }
                  onKeyDown={handleKeyDown.bind(this)}
                />
              )}
            </React.Fragment>
          ) : null
        }
      </AuthContext.Consumer>
    </div>
  );
};

Person.propTypes = {
  allowInputElm: PropTypes.bool,
  deletePerson: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
  registerInputChange: PropTypes.func,
  inputChange: PropTypes.func
};

export default Person;
