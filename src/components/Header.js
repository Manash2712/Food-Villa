
// const Title = React.createElement(
//     "h1", {id: "title"}, "Food Villa"
// )

import { useState } from "react"

export const Title = () => {
    return (
        <h1 id="title">
            <a href="/">Food Villa</a>
        </h1>
    )
}

const HeaderComponent = () => {
    // const [title, setTitle] = useState('Food Villa');
    return (
        <div className="header">
            <Title />
            {/* <h1>{title}</h1> */}
            {/* <button onClick={() => title === 'Food Villa' ? setTitle('New Food App') : setTitle('Food Villa')}>Change Title</button> */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;