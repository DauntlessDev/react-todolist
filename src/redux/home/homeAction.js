import { ADD_TODO, DELETE_TODO, GET_TODO, GET_TODO_ERROR, GET_TODO_SUCCESS, UPDATE_TODO } from "./homeTypes"

export function getTodo() {
    return {
        type: GET_TODO
    }
} export function getTodoSuccess(data) {
    return {
        type: GET_TODO_SUCCESS,
        payload: data
    }
} export function getTodoError(error) {
    return {
        type: GET_TODO_ERROR,
        payload: error
    }
} export function addTodo() {
    return {
        type: ADD_TODO
    }
}
export function updateTodo() {
    return {
        type: UPDATE_TODO
    }
} export function deleteTodo() {
    return {
        type: DELETE_TODO
    }
}