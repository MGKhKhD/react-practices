const initState = {
  counter: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

export default reducer;
