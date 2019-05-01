import * as actionTypes from "./actionTypes";
import { randomBytes } from "crypto";

export const addTodo = (todo, categoryId) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    id: randomBytes(12).toString("hex"),
    categoryId,
    todo,
    active: true,
    deleted: false
  }
});

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  payload: id
});

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  payload: id
});
