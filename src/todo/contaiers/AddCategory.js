import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import { addCategory } from '../store/actions';

const AddCategory = (props) => {
    const [category,setCategory] = useState('');
    const inputRef=React.createRef();

    useEffect(()=>{
        if(inputRef){
            inputRef.current.focus();
        }
    },[])

    const handleKeyDown =e=>{
        if(e.keyCode === 13){
            if(category){
                props.addCategory(props.id,category)
            }
            setCategory('');
            props.removeAddCategory();
        }
        
    }


    return (<input type="text" placeholder="add category"
    ref={inputRef}
    value={category}
    onChange={e => setCategory(e.target.value)}
    onKeyDown={handleKeyDown}/>);
};

export default connect(null, dispatch=>({
    addCategory: (id, category) => dispatch(addCategory(id,category))
}))(AddCategory);