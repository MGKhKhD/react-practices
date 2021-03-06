import * as actionTypes from "./actionTypes";

const initState = {
  visibilityFilter: actionTypes.visibilityFilter.SHOW_ALL,
  message: null,
  todosIDs: [],
  categories: [{ id: "0", category: "Undecided" }]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return {
        ...state,
        [`${action.payload.id}`]: action.payload,
        todosIDs: [...state.todosIDs, action.payload.id]
      };
    }
    case actionTypes.DELETE_TODO: {
      return {
        ...state,
        [action.payload]: { ...state[action.payload], deleted: true }
      };
    }
    case actionTypes.UNDELETE_TODO: {
      return {
        ...state,
        [action.payload]: { ...state[action.payload], deleted: false }
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
    case actionTypes.MODIFY_TODO: {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          todo: action.payload.text
        }
      };
    }
    case actionTypes.SET_FILTER: {
      return { ...state, visibilityFilter: action.payload };
    }
    case actionTypes.SET_MESSAGE: {
      return { ...state, message: action.payload };
    }
    case actionTypes.REMOVE_MESSAGE: {
      return { ...state, message: null };
    }
    case actionTypes.ADD_CATEGORY: {
      return {
        ...state,
        categories: [
          ...state.categories,
          {
            id: action.payload.id,
            category: action.payload.category
          }
        ],
        [action.payload.todoId]: {
          ...state[action.payload.todoId],
          categoryId: action.payload.id
        }
      };
    }
    case actionTypes.CHANGE_CATEGORY: {
      return {
        ...state,
        [action.payload.todoId]: {
          ...state[action.payload.todoId],
          categoryId: action.payload.categoryId
        }
      };
    }
    case actionTypes.CHANGE_CATEGORY_NAME:{
      const cat = [...state.categories];
      const found = cat.filter(item => item.id === action.payload.id);

      return {
        ...state, categories: [...state.categories.filter(cat=> cat.id !== action.payload.id), 
          {...found[0], category: action.payload.category }]
      }
    }
    case actionTypes.DELETE_CATEGORY:{
      return {
        ...state, categories: state.categories.filter(cat=> cat.id !== action.payload.id)
      }
    }
    default:
      return state;
  }
};

export const getTodosLength = state => state.todosIDs.length;
export const getCategoriesLength= state => state.categories.length;

export const getTodosForCategory = (state, categoryId) => {
  if (state.visibilityFilter === actionTypes.visibilityFilter.SHOW_ALL) {
    return state.todosIDs.reduce((acc, id) => 
    updateArray(!state[id].deleted && state[id].categoryId === categoryId, acc, state[id]), []);
  }

  if (state.visibilityFilter === actionTypes.visibilityFilter.SHOW_COMPLETED) {
    return state.todosIDs.reduce((acc, id) => 
    updateArray(!state[id].active && state[id].categoryId === categoryId, acc, state[id]), []);
  }

  if (state.visibilityFilter === actionTypes.visibilityFilter.SHOW_ACTIVE) {
    return state.todosIDs.reduce((acc, id) => 
    updateArray(state[id].active && state[id].categoryId === categoryId, acc, state[id]), []);
  }

  if (state.visibilityFilter === actionTypes.visibilityFilter.SHOW_DELETED) {
    return state.todosIDs.reduce((acc, id) => 
    updateArray(state[id].deleted && state[id].categoryId === categoryId, acc, state[id])
    , []);
  }
};

const updateArray = (condition, arr, value)=>{
  if (condition) {
    return [...arr, value];
  } else {
    return [...arr];
  }
}

export default reducer;
