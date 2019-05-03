import * as actionTypes from "./actionTypes";
import { randomBytes } from "crypto";

export const addTodo = (todo, categoryId) => {
  return (dispatch, getState) => {
    //if the todo already exists in the non-deleted todos
    const state = getState();
    const exisitngTodo = state.todosIDs
      .reduce((acc, id) => {
        if (!state[id].deleted) {
          return [...acc, state[id]];
        } else {
          return [...acc];
        }
      }, [])
      .filter(item => item.todo === todo);

      //if the todo already exists in the deleted todos
    const deletedTodo = state.todosIDs
      .reduce((acc, id) => {
        if (state[id].deleted) {
          return [...acc, state[id]];
        } else {
          return [...acc];
        }
      }, [])
      .filter(item => item.todo === todo);

    if (exisitngTodo.length === 0 && deletedTodo.length === 0) {
      dispatch({
        type: actionTypes.ADD_TODO,
        payload: {
          id: randomBytes(12).toString("hex"),
          categoryId,
          todo,
          active: true,
          deleted: false
        }
      });
    } else if (exisitngTodo.length !== 0) {
      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: { message: "existing todo", todo: exisitngTodo[0] }
      });
    } else if (deletedTodo.length !== 0) {
      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: { message: "deleted todo", todo: deletedTodo[0] }
      });
    }
  };
};

export const removeMessage = () => ({
  type: actionTypes.REMOVE_MESSAGE
});

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  payload: id
});

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  payload: id
});

export const setFilter = filter => ({
  type: actionTypes.SET_FILTER,
  payload: filter
});

export const undeleteTodo = id => ({
  type: actionTypes.UNDELETE_TODO,
  payload: id
});

export const modifyTodo = (id, text) => ({
  type: actionTypes.MODIFY_TODO,
  payload: { id, text }
});

export const addCategory = (id, category) => {
  return (dispatch, getState)=>{
    const categories = getState().categories;
    const existedCategory= categories.filter(cat=>cat.category===category);
    if(existedCategory.length===0){
      dispatch({
        type: actionTypes.ADD_CATEGORY,
        payload: { id: randomBytes(12).toString("hex"), todoId: id, category }
      });
    }else{
      const categoryId=existedCategory[0].id;
      dispatch(changeCategory(id,categoryId));
    }
  }
  
};

export const changeCategory = (id, categoryId) => ({
  type: actionTypes.CHANGE_CATEGORY,
  payload: { todoId: id, categoryId }
});

export const onDeleteCategory = id =>({
  type: actionTypes.DELETE_CATEGORY,
  payload: id
})

export const deleteCategory = id =>{
  return (dispatch,getState)=>{
    const state = getState();
    const todosIDs = state.todosIDs;
      todosIDs.forEach(todoId =>{
        if(state[todoId].categoryId === id){
          dispatch(changeCategory(todoId,"0"));
        }
      });
      dispatch(onDeleteCategory(id));
  }
}

export const modifyCategory =(category, id)=>{
  return (dispatch, getState)=>{
    const categories = getState().categories;
    const existedCategory= categories.filter(cat=>(cat.category===category && cat.id !== id));
    if(existedCategory.length === 0){
      dispatch({
        type: actionTypes.CHANGE_CATEGORY_NAME,
        payload: { id, category }
      });
    }else{
      const state = getState();
      const todosIDs = state.todosIDs;
      todosIDs.forEach(todoId =>{
        if(state[todoId].categoryId === id){
          dispatch(changeCategory(todoId,existedCategory[0].id));
        }
      });
      dispatch(onDeleteCategory(id));
    }
  }
}
