import React from 'react'

export default function Card({ title, textContent, link, textSecondary = '' }) {


    return (
        <div className="bg-black max-w-80 min-h-[35em] rounded-lg flex flex-col min-w-[20em]">

            <div>
                {link !== null ? <img src={`/images/${link}`} className="object-cover overflow-hidden" /> : null}
            </div>

            <div className="flex flex-grow flex-col mt-4 mb-14 text-white pt-4 px-2">
                <div className="flex text-start">
                    <h3 className="font-bold">{title}</h3>
                </div>
                <div className="flex flex-grow flex-col justify-between pt-2">
                    <div>
                        <p >{textContent}</p>
                        <br></br>
                        <p className="text-lg"> {textSecondary} </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-purple-400 rounded-full hover:bg-purple-800 text-white"><p>Learn More</p></button>
                    </div>
                </div>
            </div>

        </div>
    )
}