import React, { useState } from "react";
import { connect } from "react-redux";


import { addTodo } from "../store/actions";

const InputBox = props => {
  const [input, setInput] = useState("");

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.keyCode === 13 && input) {
      props.addTodo(input);
      setInput("");
    }
  };

  return (
    <React.Fragment>
      <label>Insert Todo: </label>
      <input
        type="text"
        palceholder="todos for today"
        onChange={handleChange}
        value={input}
        onKeyDown={handleKeyDown}
      />
    </React.Fragment>
  );
};

export default connect(
  null,
  dispatch => ({
    addTodo: todo => dispatch(addTodo(todo, 0))
  })
)(InputBox);
