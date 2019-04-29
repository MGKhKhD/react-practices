const redux = require("redux");

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ADD":
      return state + action.payload;
    case "SUBTRACT":
      return state - action.payload;
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
store.subscribe(() => console.log("subscription", store.getState()));

console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
console.log(store.getState());

store.dispatch({ type: "ADD", payload: 10 });
console.log(store.getState());

store.dispatch({ type: "SUBTRACT", payload: 5 });
console.log(store.getState());
