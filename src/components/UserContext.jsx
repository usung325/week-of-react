import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

export default function UserProvider({ children }) {

    const [user, setUser] = useState('')
    const [userList, setUserList] = useState([])

    return (
        <UserContext.Provider value={{ user, setUser, userList, setUserList }}>
            {children}
        </UserContext.Provider>
    )
}