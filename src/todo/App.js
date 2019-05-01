import React from "react";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

import FormControl from "./components/FormControl";
import TodoList from "./components/TodoList";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

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
