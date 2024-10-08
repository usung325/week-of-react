import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function RootLoayout() {
    return (
        <>
            <nav className="">
                <div className="flex space-x-5">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="about"> About </NavLink>
                    <NavLink to="help"> Help </NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>

    )
}