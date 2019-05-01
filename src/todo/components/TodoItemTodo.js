import React from "react";

const TodoItemTodo = props => {
  return (
    <p
      onClick={props.handleToggle}
      style={{
        color: !props.todo.active ? "green" : "red",
        textDecoration: "underline"
      }}
    >
      {props.todo.todo}
    </p>
  );
};

export default TodoItemTodo;
