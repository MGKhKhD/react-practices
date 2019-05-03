import React from "react";
import { connect } from "react-redux";

import TodoList from "./TodoList";
import { getTodosLength } from "../store/reducer";

const CategoryList = props => {
  if (props.todosLength === 0) {
    return <p>No todos to show</p>;
  } else {
    return (
      <ul>
        {props.categories.map(category => (
          <TodoList
            key={category.id}
            categoryId={category.id}
            category={category.category}
          />
        ))}
      </ul>
    );
  }
};

export default connect(state => ({
  categories: state.categories,
  todosLength: getTodosLength(state)
}))(CategoryList);
