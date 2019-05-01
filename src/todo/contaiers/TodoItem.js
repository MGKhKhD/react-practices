import React from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/actions";

import TodoItemTodo from "../components/TodoItemTodo";
import TodoItemDelete from "../components/TodoItemDelete";
import TodoItemManageCategory from "../components/TodoItemManageCategory";

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
      <TodoItemTodo todo={props.todo} handleToggle={handleToggle} />
      <p>
        <TodoItemDelete id={props.todo.id} deleteTodo={props.deleteTodo} />
        {"  "}
        <TodoItemManageCategory
          categoryId={props.todo.categoryId}
          handleCategory={handleCategory}
        />
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
