import React from "react";
import { connect } from "react-redux";


import {addToList} from './store/actions';

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
      dispatch(addToList(counter))
  })
)(Display);
