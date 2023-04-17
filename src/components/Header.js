
// const Title = React.createElement(
//     "h1", {id: "title"}, "Food Villa"
// )

export const Title = () => {
    return (
        <h1 id="title">
            <a href="/">Food Villa</a>
        </h1>
    )
}

const HeaderComponent = () => {
    return (
        <div className="header">
            <Title />
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