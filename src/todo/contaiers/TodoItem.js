import React, {useState, useContext} from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo, undeleteTodo, modifyTodo } from "../store/actions";
import {visibilityFilter} from '../store/actionTypes';

import TodoItemTodo from "../components/TodoItemTodo";
import ItemDelete from "../components/ItemDelete";
import TodoItemManageCategory from "../components/TodoItemManageCategory";
import UnDeleteTodoItem from '../components/UnDeleteTodoItem';
import ItemModify from '../components/ItemModify';

import InputContext from '../inputContext';

const TodoItem = props => {
  const activeInput = useContext(InputContext);
  const [text,setText] = useState('');

  const handleToggle = () => {
    if (props.todo.deleted) return;
    props.toggleTodo(props.todo.id);
  };

  const handleChangeInput = value => {
    setText(value);
  }

  const handleKeyDown = () => {
    props.modifyTodo(props.todo.id,text);
    activeInput.removeInputId();
    setText('');
  }

  const handleModify =()=>{
    activeInput.setInputId({id:props.todo.id, where: "caption"});
  }


  return (
    <li>
      <TodoItemTodo todo={props.todo} 
      handleToggle={handleToggle} 
      handleChangeInput={handleChangeInput}
      handleKeyDown={handleKeyDown}
      value={text} />
      {props.filter !== visibilityFilter.SHOW_DELETED && <p>
        <ItemDelete id={props.todo.id} deleteItem={props.deleteTodo} />
        {"  "}
        <ItemModify handleModify={handleModify} />
        {"   "}
        <TodoItemManageCategory
          todo={props.todo}
        />
      </p>}
      {props.filter === visibilityFilter.SHOW_DELETED && <p>
        <UnDeleteTodoItem  id={props.todo.id} undeleteTodo={props.undeleteTodo} />
      </p>}
    </li>
  );
};

export default connect(
  state=>({
    filter: state.visibilityFilter
  }),
  dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    undeleteTodo: id => dispatch(undeleteTodo(id)),
    modifyTodo: (id,text) => dispatch(modifyTodo(id,text))
  })
)(TodoItem);
