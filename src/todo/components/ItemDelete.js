import React from "react";

const ItemDelete = props => {
  return (
    <span
      style={{ color: "red", fontSize: ".7rem" }}
      onClick={() => {
        props.deleteItem(props.id);
      }}
    >
      delete
    </span>
  );
};

export default ItemDelete;
