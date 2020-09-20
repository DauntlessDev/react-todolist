import { ADD_TODO, DELETE_TODO } from "./homeTypes"
export function addTodo(newText) {
    return {
        type: ADD_TODO,
        title: newText
    }
} export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id: id
    }
}