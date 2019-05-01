import React from "react";

const TodoItemManageCategory = props => {
  return (
    <span
      style={{ color: "blue", fontSize: ".7rem" }}
      onClick={props.handleCategory}
    >
      {props.categoryId === 0 ? "Add" : "Change"} Category
    </span>
  );
};

export default TodoItemManageCategory;
