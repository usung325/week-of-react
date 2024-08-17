import React, { useState, useEffect } from 'react'

export default function FetchAPI() {
    const link = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist'

    const [joke, setJoke] = useState('')

    // useEffect(() => {
    const callJokeFromApi = async () => {
        try {
            const jsonJoke = await fetch(link)
            const parsedJoke = await jsonJoke.json()
            // setTimeout(() => {
            setJoke(parsedJoke.joke)
            console.log(parsedJoke.joke)
            // }, 2000)
        }
        catch (error) {
            setJoke(error)
        }
    }

    // callJokeFromApi();

    // }, [])

    const handleJoke = () => {
        callJokeFromApi()
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-5">
                <div>
                    <button onClick={() => handleJoke()} className="active:bg-slate-200">Click for new joke</button>
                </div>
                <div className="">
                    <p className="font-bold text-lg">{joke}</p>
                </div>
            </div >

        </>
    )
}