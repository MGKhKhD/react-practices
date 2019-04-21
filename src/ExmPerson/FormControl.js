import React, { useContext } from "react";
import PropTypes from "prop-types";
import AuthContext from "./AuthContext";

const FormControl = props => {
  const authed = useContext(AuthContext);

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
      <button
        className="btn"
        style={{ margin: "1rem auto", background: "gray", color: "red" }}
        onClick={authed.isAuthenticated ? authed.logout : authed.login}
      >
        {authed.isAuthenticated ? "Logout" : "Login"}
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
