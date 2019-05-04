import React, {useState, useContext} from 'react';
import {connect} from 'react-redux';

import ItemModify from '../components/ItemModify';
import InputItem from '../components/InputItem';
import ItemDelete from '../components/ItemDelete';

import InputContext from '../inputContext';

import {modifyCategory, deleteCategory} from '../store/actions'

const Category = (props) => {
    const activeInput = useContext(InputContext);
    const [text,setText] =useState(props.category.category);

    const changeInput = value =>{
        setText(value);
    }

    const handleDelete = ()=>{
        props.deleteCategory(props.category.id);
    }

    const handleModify =()=>{
        activeInput.setInputId({id:props.category.id, where: ""})
    }

    return (activeInput.inputId.id === props.category.id? 
    <InputItem value={text? text : props.category.category} 
    handleChangeInput={changeInput}
    handleKeyDown={()=>{
        activeInput.removeInputId();
        props.modifyCategory(text, props.category.id);
    }}/> : 
    <p><span>{props.category.category}</span>{"   "}
    <ItemDelete id={props.category.id} deleteItem={handleDelete} />{"   "}
    {props.category.id !== '0' && 
    <ItemModify handleModify={handleModify}  />}
    </p>);
};

export default  connect(null, dispatch=>({
    modifyCategory: (category, id)=> dispatch(modifyCategory(category,id)),
    deleteCategory: id => dispatch(deleteCategory(id))
}))(Category);