import React from "react";
import { connect } from "react-redux";

import TodoItem from "../contaiers/TodoItem";

import { getTodos } from "../store/reducer";

const TodoList = props => {
  let list;
  if (props.todos.length !== 0) {
    list = props.todos.map(
      todo => !todo.deleted && <TodoItem key={todo.id} todo={todo} />
    );
  } else {
    list = <p>No todos to show</p>;
  }

  return <ul>{list}</ul>;
};

export default connect(state => ({
  todos: getTodos(state)
}))(TodoList);
