import React, { useState, useContext } from 'react'
import { UserContext } from './UserContext'


export default function UserList() {

    const { userList } = useContext(UserContext)

    return (
        <>
            <div className="text-xl font-bold">
                {userList.map((user) => (
                    <p>{user}</p>
                ))}
            </div>
        </>
    )
}