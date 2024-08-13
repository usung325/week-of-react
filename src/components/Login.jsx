import React, { useState, useContext } from 'react'
import UserList from './UserList'
import { UserContext } from './UserContext'

export default function Login() {

    // const [user, setUser] = useState('')
    // const [userList, setUserList] = useState([])
    const { user, setUser, userList, setUserList } = useContext(UserContext)

    const [pass, setPass] = useState('')

    const commitUser = (e) => {
        e.preventDefault()
        setUserList([...userList, user])
        setUser('')
        setPass('')
        // setUser(e.target.value)
    }

    return (
        <>
            <div className="flex">
                <form onSubmit={(e) => commitUser(e)} className="flex flex-col items-end gap-5">
                    <div>
                        <label> Login:
                            <input className="border-2" value={user} onChange={(e) => setUser(e.target.value)}></input>
                        </label>
                    </div>
                    <div>
                        <label> Password:
                            <input className="border-2" value={pass} onChange={(e) => setPass(e.target.value)}></input>
                        </label>
                    </div>

                    <button type="submit">Submit</button>
                </form>
                <div className="pl-5 flex">
                    <h1 className="pr-10"> Users: </h1>
                    <div>
                        <UserList />
                    </div>
                </div>
            </div>
        </>
    )
}