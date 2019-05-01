import React from 'react';
import {connect} from 'react-redux';

import { addTodo, undeleteTodo, removeMessage } from "../store/actions";

const Message = (props) => {
const handleClick = ()=>{
    if(props.message.message.split(" ")[0] === 'existing'){
        props.addTodo(props.message.todo.todo.concat("-copy"),props.message.todo.todo.categoryId);
    }
    if(props.message.message.split(" ")[0] === 'deleted'){
        props.undeleteTodo(props.message.todo.id);
    }
    props.removeMessage();
}

    return (<React.Fragment>
        <p>{props.message.message}</p>
        <button onClick={handleClick}>{props.message.message.split(" ")[0] === 'existing'? 'add anyway' : 'un-delete todo'}</button>
        <button onClick={props.removeMessage}>Cancel</button>
    </React.Fragment>);
};

export default connect(null, dispatch=>({
    addTodo: (todo,categoryId) => dispatch(addTodo(todo, categoryId)),
    undeleteTodo: id => dispatch(undeleteTodo(id)),
    removeMessage: ()=>dispatch(removeMessage())
}))(Message);