import React, { useReducer } from 'react'

export default function Counter() {

    const count = {
        value: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'inc':
                return { value: state.value + 1 }
            case 'dec':
                return { value: state.value - 1 }
            default:
                return state
        }

        // if (action === 'inc') {
        //     return { value: state.value + 1 }
        // }

        // else if (action === 'dec') {
        //     return { value: state.value - 1 }
        // }
    }

    const actionIncrease = () => {
        return { type: 'inc' }
    }
    const actionDecrease = () => {
        return { type: 'dec' }
    }

    const [state, dispatch] = useReducer(reducer, count)

    return (
        <div>
            <h1>{state.value}</h1>
            <button onClick={() => dispatch(actionIncrease())} className="bg-green-300"> Increment </button>
            <button onClick={() => dispatch(actionDecrease())} className="bg-red-300"> Decrement </button>
        </div>
    )
}