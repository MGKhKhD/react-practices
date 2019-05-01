import * as actionTypes from "./actionTypes";

const initState = {visibilityFilter: actionTypes.visibilityFilter.SHOW_ALL, message: null, todosIDs:[], categories:[]}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return { ...state, [`${action.payload.id}`]: action.payload, todosIDs: [...state.todosIDs, action.payload.id] };
    }
    case actionTypes.DELETE_TODO: {
      return {
        ...state,
        [action.payload]: { ...state[action.payload], deleted: true }
      };
    }
    case actionTypes.UNDELETE_TODO:{
      return {
        ...state, [action.payload]: { ...state[action.payload], deleted: false }
      }
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
    case actionTypes.MODIFY_TODO:{
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          todo: action.payload.text
        }
      };
    }
    case actionTypes.SET_FILTER:{
      return {...state, visibilityFilter: action.payload}
    }
    case actionTypes.SET_MESSAGE:{
      return {...state, message: action.payload};
    }
    case actionTypes.REMOVE_MESSAGE:{
      return {...state, message: null};
    }
    case actionTypes.ADD_CATEGORY:{
      return {
        ...state, categories: [...state.categories, {...action.payload}], [action.payload.todoId]: 
        {...state[action.payload.todoId], categoryId: action.payload.id}
      }
    }
    default:
      return state;
  }
};


export const getTodos = state => {

  if(state.visibilityFilter === actionTypes.visibilityFilter.SHOW_ALL){
    return state.todosIDs.reduce((acc,id)=>{
      if(!state[id].deleted) {return [...acc, state[id]]}
      else{
        return [...acc];
      }
    },[])
  }

  if(state.visibilityFilter === actionTypes.visibilityFilter.SHOW_COMPLETED){
    return state.todosIDs.reduce((acc,id)=>{
      if(!state[id].active) {return [...acc, state[id]]}
      else{
        return [...acc];
      }
    },[])
  }

  if(state.visibilityFilter === actionTypes.visibilityFilter.SHOW_ACTIVE){
    return state.todosIDs.reduce((acc,id)=>{
      if(state[id].active) {return [...acc, state[id]]}
      else{
        return [...acc];
      }
    },[])
  }

  if(state.visibilityFilter === actionTypes.visibilityFilter.SHOW_DELETED){
    return state.todosIDs.reduce((acc,id)=>{
      if(state[id].deleted) {return [...acc, state[id]]}
      else{
        return [...acc];
      }
    },[])
  }
};

export default reducer;
