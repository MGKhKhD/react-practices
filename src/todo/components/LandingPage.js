import React from "react";

import classes from "./LandingPage.module.css";

const LandingPage = props => {
  return (
    <div className={classes.LandingImage}>
      <h1 className={classes.h1}>Todo App</h1>
      <p className={classes.p}>Click to add todos</p>
      <button className={classes.button} onClick={props.handleClick}>
        Explore Todo App
      </button>
    </div>
  );
};

export default LandingPage;
