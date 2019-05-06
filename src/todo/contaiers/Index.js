import React, { useState } from "react";
import { connect } from "react-redux";

import LandingPage from "../components/LandingPage";
import FormControl from "../components/FormControl";
import CategoryList from "./CategoryList";
import InputContext from "../inputContext";

import { getTodosLength } from "../store/reducer";

import classes from "./Index.module.css";

const Index = props => {
  const [init, setInit] = useState(!props.todosLength === 0);
  const [input, setInput] = useState({ id: "-1", where: "" });

  const setInputId = id => {
    setInput(id);
  };

  const removeInputId = () => {
    setInput({ id: "-1", where: "" });
  };

  return !init ? (
    <LandingPage handleClick={() => setInit(true)} />
  ) : (
    <InputContext.Provider
      value={{ inputId: input, setInputId, removeInputId }}
    >
      <div className={classes.Container}>
        <FormControl todosLength={props.todosLength} />
        <CategoryList />
      </div>
    </InputContext.Provider>
  );
};

export default connect(state => ({
  todosLength: getTodosLength(state)
}))(Index);
