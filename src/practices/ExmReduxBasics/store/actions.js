import * as actionTypes from './actiontypes';
import { randomBytes } from "crypto";

export const increment = () => ({
type: actionTypes.INCREMENT
})

export const decrement = () => ({
    type: actionTypes.DECREMENT
})

export const add = (value)=>({
    type: actionTypes.ADD, payload:value
})

export const subtract = value =>({
    type: actionTypes.SUBTRACT,
    payload: value
})

export const removeFromList = id =>({
    type:actionTypes.REMOVE_FROM_LiST,
    payload:id
})

export const addToList = value =>({
    type: actionTypes.ADD_TO_LIST,
    payload: { id: randomBytes(10).toString("hex"), value: value}
})