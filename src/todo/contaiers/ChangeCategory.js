import React, { setState } from "react";
import { connect } from "react-redux";

import { changeCategory } from "../store/actions";

const ChangeCategory = props => {
  const options = props.categories.map(category =>
    category.id !== props.id ? (
      <option key={category.id} value={category.category}>
        {category.category}
      </option>
    ) : null
  );

  const handleChange = event => {
    console.log(event.target.value);
    const chosenCategory = props.categories.filter(
      cat => cat.category === event.target.value
    );
    console.log(chosenCategory[0]);
    if (chosenCategory.length === 0) {
      return;
    }
    props.changeCategory(props.todoId, chosenCategory[0].id);
  };

  return <select onChange={handleChange}>{options}</select>;
};

export default connect(
  state => ({
    categories: state.categories
  }),
  dispatch => ({
    changeCategory: (todoId, categoryId) =>
      dispatch(changeCategory(todoId, categoryId))
  })
)(ChangeCategory);
