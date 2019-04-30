import React from "react";
import { connect } from "react-redux";
import { randomBytes } from "crypto";

import { ADD_TO_LIST } from "./store/actiontypes";

const Display = props => {
  return (
    <div>
      <h2>the value of counter is:</h2>
      <p>{props.counter}</p>
      <button onClick={() => props.onAddToList(props.counter)}>
        Add to List
      </button>
    </div>
  );
};

export default connect(
  state => ({ counter: state.counter }),
  dispatch => ({
    onAddToList: counter =>
      dispatch({
        type: ADD_TO_LIST,
        payload: { id: randomBytes(10).toString("hex"), value: counter }
      })
  })
)(Display);
