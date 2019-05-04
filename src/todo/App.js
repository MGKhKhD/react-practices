import React, {useState} from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import thunk from "redux-thunk";

import FormControl from "./components/FormControl";
import CategoryList from "./contaiers/CategoryList";
import InputContext from './inputContext';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const Index = props => {
  const [input, setInput] = useState({id:"-1", where: ""});

  const setInputId = id =>{
    setInput(id);
  }

  const removeInputId = ()=>{
    setInput({id:"-1", where: ""});
  }


  return (
  <InputContext.Provider value={{inputId: input,
    setInputId,
    removeInputId}} >
    <div>
      <FormControl />
      <CategoryList />
    </div>
    </InputContext.Provider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
