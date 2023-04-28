import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0,
        }
        console.log("Child-constructor " + this.props.name);
    }

    componentDidMount() {
        console.log("Child-ComponentDidMount " + this.props.name);
    }
    render() {
        console.log("Child-render " + this.props.name);
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h3>Name: {this.props.name}</h3>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.setState({
                    count: 1,
                    count2: 2,
                })}>SetCount</button>
            </div>
        )
    }
}

export default Profile;