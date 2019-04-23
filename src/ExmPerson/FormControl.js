import React from "react";
import PropTypes from "prop-types";


const FormControl = props => {

  const classes = [];
  if (props.personsLength <= 2) {
    classes.push("red");
  }
  if (props.personsLength <= 1) {
    classes.push("bold");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <p className={classes.join(" ")}>list of persons</p>
      <button className="btn" style={props.style} onClick={props.toggleList}>
        Toggle List
      </button>
    </div>
  );
};

FormControl.propTypes = {
  personsLength: PropTypes.number,
  style: PropTypes.object,
  toggleList: PropTypes.func
};

export default FormControl;
