import React, { createContext, useState, useReducer } from 'react'

export const CreateBlogContext = createContext({})

export default function BlogContext({ children }) {


    // const [title, setTitle] = useState('')
    // const [textContent, setTextContent] = useState('')
    // const [contentType, setContentType] = useState('')
    // const [blogList, setBlogList] = useState([])

    const title = '', textContent = '', contentType = '', blogList = []

    const reducer = (state, object) => {
        switch (object.state) { }
    }

    return (
        <CreateBlogContext.Provider values={{}}>
            {children}
        </CreateBlogContext.Provider>
    )
}