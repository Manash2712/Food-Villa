import UserContext from "../utils/UserContext"

const Footer = () => {
    return (
        <div>
            <h4>Footer</h4>
            <UserContext.Consumer>
                {({ user }) => (
                    <>
                        <h4>
                            {user.name}
                        </h4>
                        <h4>
                            {user.email}
                        </h4>
                    </>
                )}
            </UserContext.Consumer>
        </div>

    )
}

export default Footer