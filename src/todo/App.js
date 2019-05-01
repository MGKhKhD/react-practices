import React from "react";
import { createStore, compose,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import thunk from 'redux-thunk';

import FormControl from "./components/FormControl";
import TodoList from "./components/TodoList";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const Index = props => {
  return (
    <div>
      <FormControl />
      <TodoList />
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
