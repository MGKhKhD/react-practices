import React, {useState} from "react";
import { connect } from "react-redux";

import TodoItem from "../contaiers/TodoItem";
import Message from '../contaiers/Message';

import { getTodos } from "../store/reducer";

const TodoList = props => {
  const [modifyId,setModifyId] = useState(null);

  const handleModifyRegister = (id)=>{

    if(!id) {
      setModifyId(null);
    }else{
      if(!modifyId){
        setModifyId(id);
      }
    }
  }

  let list;
  if (props.todos.length !== 0) {
    list = props.todos.map(
      todo =>  <TodoItem key={todo.id} todo={todo} registerModify={(id)=>handleModifyRegister(id)} modifyId={modifyId}/>
    );
  } else {
    list = <p>No todos to show</p>;
  }

  if(!props.message){
    return (<ul>{list}</ul>);
  }else{
   return <Message message={props.message} />
  }
};

export default connect(state => ({
  todos: getTodos(state),
  message: state.message
}))(TodoList);
