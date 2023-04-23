
// const Title = React.createElement(
//     "h1", {id: "title"}, "Food Villa"
// )

import { useState } from "react"
import Logo from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom"

export const Title = () => {
    return (
        <a href="/">
            <img className="logo" src={Logo} alt="logo" />
        </a>
    )
}

const HeaderComponent = () => {
    // const [title, setTitle] = useState('Food Villa');
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggleLogedIn = () => {
        isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
    }
    return (
        <div className="header">
            <Title />
            {/* <h1>{title}</h1> */}
            {/* <button onClick={() => title === 'Food Villa' ? setTitle('New Food App') : setTitle('Food Villa')}>Change Title</button> */}
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? <button onClick={toggleLogedIn}>LogOut</button> : <button onClick={toggleLogedIn}>LogIn</button>
            }


        </div>
    )
}

export default HeaderComponent;