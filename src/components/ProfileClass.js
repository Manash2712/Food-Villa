import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0,
        }
    }
    render() {
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h3>Name: {this.props.name}</h3>
            </div>
        )
    }
}

export default Profile;