import React from "react";
import { connect } from "react-redux";

import { changeCategory } from "../store/actions";

const ChangeCategory = props => {
  let options = [];
  props.categories.forEach(category =>{
    if(category.id !== props.id){
      options.push(<option key={category.id} value={category.category}>
        {category.category}
      </option>);
    }
  }
  );

  const handleChange = event => {
    console.log(event.target);
    const chosenCategory = props.categories.filter(
      cat => cat.category === event.target.value
    );
    console.log(chosenCategory);
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
