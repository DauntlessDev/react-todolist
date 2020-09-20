import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../redux'

function Home() {
    const todolist = useSelector(state => state.home.todolist)
    const dispatch = useDispatch()


    const [title, setTitle] = useState('')

    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(title))
        setTitle('')
    }
    const TodoDetails = ({ todo }) => {
        return (
            <li onClick={() => dispatch(deleteTodo(todo.id))}>
                <div className="title">{todo.title}</div>
            </li>
        );
    }



    return (
        <div className="home">

            {todolist.length ?
                <div className="content">
                    <div className="description"> You have {todolist.length} things to do</div>

                    {todolist.map(todo => {
                        return (<TodoDetails todo={todo} key={todo.id} />
                        )
                    })}
                </div>
                : <div className="empty">No things to to do, hello free time! :)</div>
            }

            <form onSubmit={handleAddTodo}>
                <input type="text" placeholder=" todo" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <input type="submit" value="add" />
            </form>
        </div>
    )
}

export default Home
