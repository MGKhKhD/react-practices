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

export const addCategory = (id, category) => ({
  type: actionTypes.ADD_CATEGORY,
  payload: { id: randomBytes(12).toString("hex"), todoId: id, category }
});

export const changeCategory = (id, categoryId) => ({
  type: actionTypes.CHANGE_CATEGORY,
  payload: { todoId: id, categoryId }
});
