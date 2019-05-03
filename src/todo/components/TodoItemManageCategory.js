import React from "react";

import AddCategory from "../contaiers/AddCategory";
import ChangeCategory from "../contaiers/ChangeCategory";

const TodoItemManageCategory = props => {
  if (!props.category) {
    return (
      <span
        style={{ color: "blue", fontSize: ".7rem" }}
        onClick={props.handleCategory}
      >
        {props.categoryId === 0 ? "Add" : "Change"} Category
      </span>
    );
  } else if (props.category && props.categoryId === 0) {
    return (
      <AddCategory removeAddCategory={props.removeAddCategory} id={props.id} />
    );
  } else {
    return <ChangeCategory id={props.categoryId} todoId={props.id} />;
  }
};

export default TodoItemManageCategory;
