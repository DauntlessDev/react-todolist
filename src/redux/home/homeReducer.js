import { ADD_TODO, DELETE_TODO, GET_TODO, GET_TODO_ERROR, GET_TODO_SUCCESS, UPDATE_TODO } from './homeTypes'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    loading: false,
    todolist: [],
    error: ''
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                loading: true
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todolist: action.payload,
                loading: false
            }
        case GET_TODO_ERROR:
            return {
                ...state,
                todolist: [],
                error: action.payload,
                loading: false
            }

        case ADD_TODO:
            return {
                ...state,
                todolist: [...state.todolist, {
                    title: action.title,
                    id: uuidv4(),
                }
                ]
            }

        case UPDATE_TODO:
            const selectedTodo = state.todolist.where(todo => todo.id === action.id)

            return {
                ...state,
                todolist: selectedTodo.title = action.title
            }
        case DELETE_TODO:
            return {
                ...state,
                todolist: state.todolist.where(todo => todo.id === action.id).title = action.title
            }
        default:
            return state
    }

}

export default homeReducer