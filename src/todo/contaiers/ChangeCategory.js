import React from "react";
import { connect } from "react-redux";

const ChangeCategory = props => {
  const options = props.categories.map(category =>
    category.id !== props.id ? (
      <option key={category.id} value={category.category}>
        {category.category}
      </option>
    ) : null
  );

  return <select>{options}</select>;
};

export default connect(state => ({
  categories: state.categories
}))(ChangeCategory);
