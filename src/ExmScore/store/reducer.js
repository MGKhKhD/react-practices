import * as actionTypes from "./actiontypes";

const initState = {
  counter: 0,
  list: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.ADD:
      return { ...state, counter: state.counter + action.payload };
    case actionTypes.SUBTRACT:
      return { ...state, counter: state.counter - action.payload };
    case actionTypes.ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.payload)
      };
    case actionTypes.REMOVE_FROM_LiST:
      return {
        ...state,
        list: state.list.filter(elm => elm.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
