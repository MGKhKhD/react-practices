import React from 'react';

const ItemModify = (props) => {
    return (<span
        style={{ color: "red", fontSize: ".7rem" }}
        onClick={
          props.modifyItem
        }
      >
        modify
      </span>);
};

export default ItemModify;