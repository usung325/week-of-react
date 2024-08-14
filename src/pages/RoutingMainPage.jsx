import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import RoutingAboutPage from './RoutingAboutPage'
import RoutingHomePage from './RoutingHomePage'
import RootLoayout from '../layouts/RootLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLoayout />}>
            <Route index element={<RoutingHomePage />} />
            <Route path="about" element={<RoutingAboutPage />} />
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