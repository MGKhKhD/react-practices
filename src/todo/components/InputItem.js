import React from 'react';

const InputItem = (props) => {
    return (<input type="text" value={props.value}
    onChange={e => props.handleChangeInput(e.target.value)}
    onKeyDown={e=>{if(e.keyCode === 13){
      props.handleKeyDown()
    }}} />);
};

export default InputItem;