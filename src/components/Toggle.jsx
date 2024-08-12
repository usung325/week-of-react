import React, { useState } from 'react'

export default function Toggle() {

    const [isToggle, setToggle] = useState(false)

    const changeToggle = () => {
        setToggle(!isToggle)
    }
    return (
        <div className={`flex w-[7em] h-11  rounded-3xl items-center ${isToggle ? 'justify-start bg-green-200' : 'justify-end bg-red-200'}`}>
            <button onClick={changeToggle} className="bg-slate-300 w-[20%] m-2">
            </button>
        </div>
    )
}