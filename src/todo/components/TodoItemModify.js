import React from 'react';

const TodoItemModify = (props) => {
    return (<span
        style={{ color: "red", fontSize: ".7rem" }}
        onClick={
          props.modifyTodo
        }
      >
        modify
      </span>);
};

export default TodoItemModify;