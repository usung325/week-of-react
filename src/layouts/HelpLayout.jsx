import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function HelpLayout() {
    return (
        <>
            <p> Thanks for visint the site! Feel free to look around for more information about our page :3</p>
            <nav className="">
                <div className="flex space-x-5">
                    <NavLink to="contact"> Contact </NavLink>
                    <NavLink to="faq"> FAQ </NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>

    )
}