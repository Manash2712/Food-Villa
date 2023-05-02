
// const Title = React.createElement(
//     "h1", {id: "title"}, "Food Villa"
// )

import { useState, useContext } from "react"
import Logo from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext"

export const Title = () => {
    return (
        <a href="/">
            <img className="logo h-28 p-2" src={Logo} alt="logo" />
        </a>
    )
}

const HeaderComponent = () => {
    // const [title, setTitle] = useState('Food Villa');
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const isOnline = useOnline();

    const { user } = useContext(UserContext)

    const toggleLogedIn = () => {
        isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
    }

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
            <Title />
            {/* <h1>{title}</h1> */}
            {/* <button onClick={() => title === 'Food Villa' ? setTitle('New Food App') : setTitle('Food Villa')}>Change Title</button> */}
            <div className="nav-items">
                <ul className="flex p-10">
                    <li className="px-2 "><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2">Cart</li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                </ul>
            </div>
            <h1 className="p-10">{isOnline ? '🟢' : '🔴'}</h1>
            <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
            {
                isLoggedIn ? (
                    <button className="p-10" onClick={toggleLogedIn}>LogOut</button>
                ) : (
                    <button className="p-10" onClick={toggleLogedIn}>LogIn</button>
                )
            }


        </div>
    )
}

export default HeaderComponent;