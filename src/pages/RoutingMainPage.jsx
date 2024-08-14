import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import RoutingAboutPage from './RoutingAboutPage'
import RoutingHomePage from './RoutingHomePage'
import RootLoayout from '../layouts/RootLayout'
import RoutingFaqPage from './help/RoutingFaqPage'
import RoutingContactsPage from './help/RoutingContactsPage'
import HelpLayout from '../layouts/HelpLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLoayout />}>

            <Route index element={<RoutingHomePage />} />
            <Route path="about" element={<RoutingAboutPage />} />

            <Route path="help" element={<HelpLayout />}>
                <Route path="contact" element={<RoutingContactsPage />} />
                <Route path="faq" element={<RoutingFaqPage />} />
            </Route>
        </Route>
    )
)
export default function RoutingMainPage() {


    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}