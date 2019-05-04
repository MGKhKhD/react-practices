import React from 'react';

const inputContext = React.createContext({
    inputId: {id:"-1", where: ""},//-1 is the id of input of the form control, where insures that only one input tag stays open per todo
    setInputId: ()=> {},
    removeInputId:()=>{}
})

export default inputContext;