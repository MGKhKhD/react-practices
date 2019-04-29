import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";

const store = createStore(reducer);

const Index = props => {
  return <h1>Scores example</h1>;
};

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
