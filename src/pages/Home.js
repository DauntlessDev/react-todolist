import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../redux'

import smiley from '../images/smiley.png'

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
            <li className='todoitem' onClick={() => dispatch(deleteTodo(todo.id))}>
                <div className="title">{todo.title}</div>
            </li>
        );
    }



    return (
        <div className="home">

            <div className="content">
                {todolist.length ?
                    <div>
                        <h5 className="description"> You have {todolist.length} things to do</h5>

                        {todolist.map(todo => {
                            return (<TodoDetails todo={todo} key={todo.id} />
                            )
                        })}
                    </div>
                    : <div>     <img src={smiley} alt='smiley' id='smiley' />
                        <div className="empty">No things to to do, hello free time! :)</div>
                    </div>
                }

            </div >
            <form className='addform' onSubmit={handleAddTodo}>
                <input type="text" placeholder=" todo" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <input type="submit" value="add" />
            </form>
        </div >
    )
}

export default Home
