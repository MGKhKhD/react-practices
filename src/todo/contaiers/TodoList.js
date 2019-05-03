import React, { useState } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";
import Message from "./Message";
import Category from "./Category"

import { getTodosForCategory } from "../store/reducer";

const TodoList = props => {
  const [modifyId, setModifyId] = useState(null);

  const handleModifyRegister = id => {
    if (!id) {
      setModifyId(null);
    } else {
      if (!modifyId) {
        setModifyId(id);
      }
    }
  };

  let list;
  if (props.todos.length !== 0) {
    list = props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        registerModify={id => handleModifyRegister(id)}
        modifyId={modifyId}
      />
    ));
  }

  if (!props.message) {
    if (list && list.length > 0) {
      return (
        <React.Fragment>
          <Category category={props.category} />
          <ul>{list}</ul>
        </React.Fragment>
      );
    } else if (!list) {
      return null;
    }
  } else {
    return <Message message={props.message} />;
  }
};

export default connect((state, ownProps) => ({
  todos: getTodosForCategory(state, ownProps.category.id),
  message: state.message
}))(TodoList);
