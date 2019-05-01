import React from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/actions";

const TodoItem = props => {
  const handleToggle = () => {
    if (props.todo.deleted) return;
    props.toggleTodo(props.todo.id);
  };

  const handleCategory = () => {
    if (props.todo.deleted) return;
    console.log(props.todo.id);
  };

  return (
    <li>
      <p
        onClick={handleToggle}
        style={{
          color: !props.todo.active ? "green" : "red",
          textDecoration: "underline"
        }}
      >
        {props.todo.todo}
      </p>
      <p>
        <span
          style={{ color: "red", fontSize: ".7rem" }}
          onClick={() => {
            props.deleteTodo(props.todo.id);
          }}
        >
          delete
        </span>
        {"  "}
        <span
          style={{ color: "blue", fontSize: ".7rem" }}
          onClick={handleCategory}
        >
          {props.todo.categoryId === 0 ? "Add" : "Change"} Category
        </span>
      </p>
    </li>
  );
};

export default connect(
  null,
  dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id))
  })
)(TodoItem);
