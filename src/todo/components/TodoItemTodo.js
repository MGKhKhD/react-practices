import React, {useContext} from "react";

import InputItem from './InputItem';
import InputContext from '../inputContext';

const TodoItemTodo = props => {
  const activeInput = useContext(InputContext);
  
   return (activeInput.inputId.id === props.todo.id && activeInput.inputId.where === 'caption') ? 
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
}


export default TodoItemTodo;
