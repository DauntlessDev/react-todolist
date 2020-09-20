import { ADD_TODO, DELETE_TODO, GET_TODO, GET_TODO_ERROR, GET_TODO_SUCCESS, UPDATE_TODO } from './homeTypes'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todolist: [],
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todolist: [...state.todolist, {
                    title: action.title,
                    id: uuidv4(),
                }
                ]
            }

        case DELETE_TODO:
            return {
                ...state,
                todolist: state.todolist.filter(book => book.id !== action.id),
            }
        default:
            return state
    }

}

export default homeReducer