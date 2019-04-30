import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";
import Counter from "./counter";
import Display from "./Display";
import List from "./List";

const store = createStore(reducer);

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
