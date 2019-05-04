import React, {useContext} from "react";

import AddCategory from "../contaiers/AddCategory";
import ChangeCategory from "../contaiers/ChangeCategory";

import InputContext from '../inputContext';

const TodoItemManageCategory = props => {
  const activeInput = useContext(InputContext);

const click =() =>{
  if (props.todo.deleted) return;
  if((activeInput.inputId.id !== props.todo.id) || 
    (activeInput.inputId.id === props.todo.id && activeInput.inputId.where === 'caption')){
      activeInput.removeInputId();
    }
  activeInput.setInputId({id:props.todo.id, where: "todo-category"});
}

  if (activeInput.inputId.id !== props.todo.id || (activeInput.inputId.id === props.todo.id && activeInput.inputId.where === 'caption') ) {
    return (
      <span
        style={{ color: "blue", fontSize: ".7rem" }}
        onClick={click}
      >
        {props.todo.categoryId === "0"  ? "Add" : "Change"} Category
      </span>
    );
  } else if ((activeInput.inputId.id === props.todo.id && activeInput.inputId.where !== 'caption') 
  && props.todo.categoryId === "0") {
    return (
  <AddCategory removeAddCategory={()=>activeInput.removeInputId()} id={props.todo.id} />
    );
  } else if ((activeInput.inputId.id === props.todo.id && activeInput.inputId.where !== 'caption') 
  && props.todo.categoryId !== "0") {
    return <ChangeCategory id={props.todo.categoryId} todoId={props.todo.id} />;
  }
};

export default TodoItemManageCategory;
