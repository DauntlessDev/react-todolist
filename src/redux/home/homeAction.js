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
} export function addTodo(newText) {
    return {
        type: ADD_TODO,
        title: newText
    }
}
export function updateTodo(id, newText) {
    return {
        type: UPDATE_TODO,
        id: id,
        title: newText

    }
} export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id: id
    }
}