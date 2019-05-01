import React from "react";

const TodoItemDelete = props => {
  return (
    <span
      style={{ color: "red", fontSize: ".7rem" }}
      onClick={() => {
        props.deleteTodo(props.id);
      }}
    >
      delete
    </span>
  );
};

export default TodoItemDelete;
