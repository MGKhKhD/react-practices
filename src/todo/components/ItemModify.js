import React from 'react';


const ItemModify = (props) => {
    return (<span
        style={{ color: "red", fontSize: ".7rem" }}
        onClick={props.handleModify}
      >
        modify
      </span>);
};

export default ItemModify;