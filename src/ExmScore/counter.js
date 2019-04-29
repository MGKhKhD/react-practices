import React from "react";
import { connect } from "react-redux";

const Counter = props => {
  console.log(props.counter);
  return (
    <div>
      <button onClick={props.onIncrementCounter}>Increment</button>
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
    onIncrementCounter: () => dispatch({ type: "INCREMENT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
