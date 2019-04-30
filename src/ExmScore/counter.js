import React, { useReducer, useState, useEffect } from "react";
import { connect } from "react-redux";

import * as actionTypes from "./store/actiontypes";

const Counter = props => {
  const [input, setInput] = useState(null);
  const opReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.ADD:
        return { ...state, add: action.payload };
      case actionTypes.SUBTRACT:
        return { ...state, subtract: action.payload };
      default:
        return state;
    }
  };

  const [value, dispatch] = useReducer(opReducer, { add: 5, subtract: 15 });

  const inputRef = React.createRef();

  const handleAdd = () => {
    setInput(actionTypes.ADD);
  };

  const handleSubtract = () => {
    setInput(actionTypes.SUBTRACT);
  };

  useEffect(() => {
    if (input && inputRef) {
      inputRef.current.focus();
    }
  }, [input]);

  const handleChange = event => {
    dispatch({ type: input, payload: event.target.value });
  };

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      if (input === actionTypes.ADD) {
        props.onAdd(value.add);
        setInput(null);
      }
      if (input === actionTypes.SUBTRACT) {
        props.onSubtract(value.subtract);
        setInput(null);
      }
    }
  };

  return (
    <div>
      <button onClick={props.onIncrementCounter}>Increment</button>
      <button onClick={props.onDecrementCounter}>Decrement</button>
      <button onClick={handleAdd}>
        Add +{input && input === actionTypes.ADD ? value.add : 5}
      </button>
      <button onClick={handleSubtract}>
        Subtract -
        {input && input === actionTypes.SUBTRACT ? value.subtract : 15}
      </button>
      {input && (
        <React.Fragment>
          <hr />
          <label>Input value:</label>
          <input
            type="number"
            onChange={handleChange}
            name={input}
            value={input === actionTypes.ADD ? value.add : value.subtract}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAdd: value => dispatch({ type: actionTypes.ADD, payload: +value }),
    onSubtract: value =>
      dispatch({ type: actionTypes.SUBTRACT, payload: +value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
