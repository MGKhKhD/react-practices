import * as actionTypes from "./actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return { ...state, [`${action.payload.id}`]: action.payload };
    }
    case actionTypes.DELETE_TODO: {
      return {
        ...state,
        [action.payload]: { ...state[action.payload], deleted: true }
      };
    }
    case actionTypes.TOGGLE_TODO: {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          active: !state[action.payload].active
        }
      };
    }
    default:
      return state;
  }
};

export const getTodos = state => {
  let output = [];
  for (let key in state) {
    output.push(state[key]);
  }
  return output;
};

export default reducer;
