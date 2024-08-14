import React, { useState, useRef, useReducer } from 'react'
import Card from './Card'

export default function BlogWrite() {

    // const [blogList, setBlogList] = useState([])
    const [blogTitle, setBlogTitle] = useState('')
    const [blogContent, setBlogContent] = useState('')
    const [im, setIm] = useState('')
    const [audience, setAudience] = useState('')

    const submitBlog2List = (e) => {
        e.preventDefault()
        dispatch({ style: 'ADD_BLOG', payload: { title: blogTitle, textContent: blogContent, im: im, audience: audience } })
        setBlogTitle('')
        setBlogContent('')
    }

    const reducer = (state, object) => {
        switch (object.style) {
            case "ADD_BLOG":

                if (object.payload.audience === 'children') {
                    return [...state, { title: object.payload.title, textContent: object.payload.textContent, imState: true, im: object.payload.im, textSize: '2xl' }]
                }

                else if (object.payload.audience === 'adult') {
                    return [...state, { title: object.payload.title, textContent: object.payload.textContent, imState: false, im: null, textSize: 'sm' }]
                }

                else {
                    return [...state, { title: object.payload.title, textContent: object.payload.textContent, imState: true, im: object.payload.im, textSize: 'xl' }]
                }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, [])

    return (
        <>
            <div className="flex flex-col items-center p-10">
                <div className="flex overflow-auto max-w-full">
                    <div className="flex flex-row space-x-10">
                        {state.map((blog) => (
                            <Card title={blog.title} textContent={blog.textContent} link={blog.im} />
                        ))}
                    </div>
                </div>
                <div className="">
                    <form className="space-y-5 w-[30em] p-5 " onSubmit={(e) => submitBlog2List(e)}>

                        <div>
                            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title: </label>
                            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} />
                        </div>

                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Blog Content:</label>
                            <textarea id="message" rows="15" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." value={blogContent} onChange={(e) => setBlogContent(e.target.value)}></textarea>
                        </div>

                        <div className="flex flex-row justify-between">

                            <div>
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your audience</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setAudience(e.target.value)}>
                                    <option value="">-- please select --</option>
                                    <option value="children">Children</option>
                                    <option value="adult">Adult</option>
                                    <option value="both">Both</option>
                                </select>
                            </div>

                            <div>
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your image</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setIm(e.target.value)}>
                                    <option value="">-- please select --</option>
                                    <option value="cat.jpeg">cat1</option>
                                    <option value="cat2.jpeg">cat2</option>
                                    <option value="cat3.jpeg">cat3</option>
                                    <option value="cat4.jpeg">cat4</option>
                                    <option value="cat5.jpeg">cat5</option>
                                    <option value="cat6.jpeg">cat6</option>
                                    <option value="cat7.jpeg">cat7</option>
                                    <option value="cat8.jpeg">cat8</option>
                                    <option value="cat9.jpeg">cat9</option>

                                </select>
                            </div>


                            <button type="submit">Submit</button>
                        </div>
                    </form >
                </div>
            </div>

        </>
    )
}