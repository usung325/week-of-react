import React, { useState, useRef, useReducer } from 'react'

export default function BlogWrite() {

    const [blogList, setBlogList] = useState([])
    const [blogTitle, setBlogTitle] = useState('')
    const [blogContent, setBlogContent] = useState('{}')

    const submitBlog2List = (e) => {
        e.preventDefault()
        setBlogList([
            ...blogList, {
                title: blogTitle,
                content: blogContent
            }
        ])
    }

    const blogState = {
        image: false,
        textSize: 'sm'
    }

    const reducer = (state, object) => {
        switch (object.value) {
            case "children":
                return {
                    image: true,
                    textSize: '2xl'
                }
            case "adult":
                return {
                    image: false,
                    textSize: 'sm'
                }
            case "both":
                return {
                    image: true,
                    textSize: 'xl'
                }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, blogList)

    return (
        <>
            <form className="space-y-5 w-[30em] p-5" onSubmit={(e) => submitBlog2List(e)}>

                <div>
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title: </label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>


                <div>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Blog Content:</label>
                    <textarea id="message" rows="15" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>
                <div className="flex flex-row justify-between">
                    <div>

                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your audience</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">-- please select --</option>
                            <option value="children">Children</option>
                            <option value="adult">Adult</option>
                            <option value="both">Both</option>
                        </select>
                    </div>


                    <button type="submit">Submit</button>
                </div>
            </form >
        </>
    )
}