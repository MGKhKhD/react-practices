import React from "react";
import { connect } from "react-redux";

import * as actionTypes from "./store/actiontypes";

const List = props => {
  return (
    <div>
      <ul>
        {props.list.map(elm => (
          <li key={elm.id} onClick={() => props.onRemoveItem(elm.id)}>
            {elm.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(
  state => ({
    list: state.list
  }),
  dispatch => ({
    onRemoveItem: id =>
      dispatch({ type: actionTypes.REMOVE_FROM_LiST, payload: id })
  })
)(List);
