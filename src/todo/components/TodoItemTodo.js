import React from "react";

import InputItem from './InputItem';

const TodoItemTodo = props => 

  
    props.modify? 
    (
    <InputItem  value={props.value? props.value : props.todo.todo} 
      handleChangeInput={value=>props.handleChangeInput(value)}
      handleKeyDown={props.handleKeyDown}/>
      ) : (
      <p
      onClick={props.handleToggle}
      style={{
        color: !props.todo.active ? "green" : "red",
        textDecoration: "underline"
      }}
    >
      {props.todo.todo}
    </p>);
  
;

export default TodoItemTodo;
