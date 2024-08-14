//Learning how to use useReducer Part 2

import React, { useState, useReducer } from 'react'

export default function Todo() {

    const [todo, setTodo] = useState('')

    const reducer = (state, object) => {
        switch (object.type) {
            case 'ADD_TODO':
                return [...state, { todo: object.payload.todo }]
            default:
                return state
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: { todo: todo } })
        setTodo('')
    }

    const [state, dispatch] = useReducer(reducer, [])
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Write your task here:
                    <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
                </label>
            </form>
            <div className="flex flex-col gap-5">
                {state.map(todo => (
                    <p>{todo.todo}</p>
                ))}
            </div>
        </>
    )
}