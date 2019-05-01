import React from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../store/actionTypes';
import {setFilter} from '../store/actions';

const Filter = (props) => {

    const handleClick = filter =>{
        props.setFilter(filter);
    }

    const formLable = lable =>{
        return lable.split('_')[1].toLowerCase();
    }

    return (<p><span style={{color:'balck'}} onClick={()=> handleClick(actionTypes.visibilityFilter.SHOW_ALL)}>
    {formLable(actionTypes.visibilityFilter.SHOW_ALL)}</span>{'  '}
    <span style={{color:'red'}} onClick={()=> handleClick(actionTypes.visibilityFilter.SHOW_ACTIVE)}>
    {formLable(actionTypes.visibilityFilter.SHOW_ACTIVE)}</span>{'  '}
    <span style={{color:'green'}} onClick={()=> handleClick(actionTypes.visibilityFilter.SHOW_COMPLETED)}>
    {formLable(actionTypes.visibilityFilter.SHOW_COMPLETED)}</span>{'  '}
    <span style={{color:'blue'}} onClick={()=> handleClick(actionTypes.visibilityFilter.SHOW_DELETED)}>
    {formLable(actionTypes.visibilityFilter.SHOW_DELETED)}</span></p>);
};

export default connect(null, dispath=>({setFilter: filter =>dispath(setFilter(filter))}))(Filter);