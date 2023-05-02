
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

import React, { lazy, Suspense, useState, useContext } from "react"
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
import Profile from "./components/ProfileClass";
import ProfileFunctional from "./components/Profile"
import ShimmerUI from "./components/ShimmerUI";
// import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";


/* All are same!
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * Lazy Loading
 * On Demand Loading
 * Dynamic Import
 */

const Instamart = lazy(() => import("./components/Instamart"))


const AppLayout = () => {
    // const { user } = useContext(UserContext)
    const [user, setUser] = useState({
        name: "namaste react",
        email: "namaste.dev@support.com"
    })
    // const [user1, setUser] = useState(user)
    return (
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
            <HeaderComponent />
            {/* {Outlet} */}
            <Outlet />
            <Footer />
        </UserContext.Provider>
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
            // {
            //     path: "/about",
            //     element: <About />,
            //     children: [
            //         // {
            //         //     path: "profile",
            //         //     element: <><ProfileFunctional name="Manash" /><Profile /></> 
            //         // },
            //         {
            //             path: 'profile', // we don't use /profile here as it will redirect to /profile
            //             element: <><ProfileFunctional name="Manash" /><Profile name="ManashClass" /></>
            //         },
            //     ]
            // },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<ShimmerUI />}>
                        <Instamart />
                    </Suspense>
                ),
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