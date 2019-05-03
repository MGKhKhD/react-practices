import React, {useState} from 'react';
import {connect} from 'react-redux';

import ItemModify from '../components/ItemModify';
import InputItem from '../components/InputItem';
import ItemDelete from '../components/ItemDelete';

import {modifyCategory, deleteCategory} from '../store/actions'

const Category = (props) => {
    const [modify,setModify]=useState(false);
    const [text,setText] =useState(props.category.category);

    const modifyCategory = () =>{
        setModify(true);
    }

    const changeInput = value =>{
        setText(value);
    }

    const handleDelete = ()=>{
        setModify(false);
        props.deleteCategory(props.category.id);
    }

    return (modify? 
    <InputItem value={text? text : props.category.category} 
    handleChangeInput={changeInput}
    handleKeyDown={()=>{
        setModify(false);
        props.modifyCategory(text, props.category.id);
    }}/> : 
    <p><span>{props.category.category}</span>{"   "}
    <ItemDelete id={props.category.id} deleteItem={handleDelete} />{"   "}
    {props.category.id !== '0' && 
    <ItemModify id={props.category.id} modifyItem={modifyCategory} />}
    </p>);
};

export default  connect(null, dispatch=>({
    modifyCategory: (category, id)=> dispatch(modifyCategory(category,id)),
    deleteCategory: id => dispatch(deleteCategory(id))
}))(Category);