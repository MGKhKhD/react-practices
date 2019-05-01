import React from "react";

const TodoItemTodo = props => 


  
    props.modify? (<input type="text" value={props.value? props.value : props.todo.todo}
    onChange={e => props.handleChangeInput(e.target.value)}
    onKeyDown={e=>{if(e.keyCode === 13){
      props.handleKeyDown()
    }}} />) : (<p
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
