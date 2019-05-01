import React, {useState} from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo, undeleteTodo, modifyTodo } from "../store/actions";
import {visibilityFilter} from '../store/actionTypes';

import TodoItemTodo from "../components/TodoItemTodo";
import TodoItemDelete from "../components/TodoItemDelete";
import TodoItemManageCategory from "../components/TodoItemManageCategory";
import UnDeleteTodoItem from '../components/UnDeleteTodoItem';
import TodoItemModify from '../components/TodoItemModify';

const TodoItem = props => {
  const [modify,setModify] =useState(false);
  const [text,setText] = useState('');
  const [category,setCategory]=useState(false);

  const handleToggle = () => {
    if (props.todo.deleted) return;
    props.toggleTodo(props.todo.id);
  };

  const handleCategory = () => {
    if (props.todo.deleted) return;
    console.log(props.todo.id);
    setCategory(true);
  };

  const handleModifyTodo = () =>{
    if(props.modifyId && props.modifyId !== props.todo.id) return;
    if(props.modifyId && props.modifyId === props.todo.id){
      setModify(false);
      props.registerModify(null);
      return;
    };
    setModify(true);
    props.registerModify(props.todo.id);
  }

  const handleChangeInput = value => {
    setText(value);
  }

  const handleKeyDown = () => {
    props.modifyTodo(props.todo.id,text);
    setModify(false);
    setText('');
    props.registerModify(null);
  }

  const removeAddCategory = ()=>{
    setCategory(false);
  }

  return (
    <li>
      <TodoItemTodo todo={props.todo} 
      handleToggle={handleToggle} 
      modify={modify} 
      handleChangeInput={handleChangeInput}
      handleKeyDown={handleKeyDown}
      value={text} />
      {props.filter !== visibilityFilter.SHOW_DELETED && <p>
        <TodoItemDelete id={props.todo.id} deleteTodo={props.deleteTodo} />
        {"  "}
        <TodoItemModify id={props.todo.id} modifyTodo={handleModifyTodo} />
        {"   "}
        <TodoItemManageCategory
        id={props.todo.id}
          categoryId={props.todo.categoryId}
          handleCategory={handleCategory}
          category={category}
          removeAddCategory={removeAddCategory}
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
