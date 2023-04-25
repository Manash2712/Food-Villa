
/**********
 * AppLayout
 * 
 * Header
        Logo
        Nav items(right side)
        Cart
    Body
        Search bar
        Restaurant list
            Restaurant Card
                Image
                Name
                Rating
                Cuisines
    Footer
        Links
        Copyright
 * 
 * 
 **********/

import React from "react"
import ReactDOM from "react-dom/client"

// default Import used for components exported as default
// in default export we can change the name while importing
import HeaderComponent from "./components/Header";
// Named Import
import { Title } from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./config";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error"
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
    return (
        <>
            <HeaderComponent />
            {/* {Outlet} */}
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
        ]
    },
    // {
    //     path: "/about",
    //     element: <About />
    // }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)