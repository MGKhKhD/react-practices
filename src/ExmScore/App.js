import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";
import Counter from "./counter";
import Display from "./Display";
import List from "./List";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store =>{
  return next => {
    return action => {
      console.log('Logger Middleware, action:',action);
      const  result = next(action);
      console.log('Logger Middleware, state', store.getState());
      return result;
    }
  }
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

const Index = props => {
  return (
    <div>
      <h1>Scores example</h1>
      <Counter />
      <Display />
      <List />
    </div>
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
