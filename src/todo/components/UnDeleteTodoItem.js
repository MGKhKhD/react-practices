import React from 'react';

const UnDeleteTodoItem = (props) => {
    return (<span
        style={{ color: "red", fontSize: ".7rem" }}
        onClick={() => {
          props.undeleteTodo(props.id);
        }}
      >
        un-delete
      </span>);
};

export default UnDeleteTodoItem;