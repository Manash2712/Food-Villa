import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     count: 0,
        //     count2: 0,
        // }
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            }
        }
        console.log("Child-constructor " + this.props.name);
    }

    async componentDidMount() {
        // Api Call
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log("Child-ComponentDidMount " + this.props.name);
    }

    componentDidUpdate() {
        console.log("Child ComponentDidUpdate");
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount");
    }
    render() {
        console.log("Child-render " + this.props.name);
        // return (
        //     <div>
        //         <h1>Profile Class Component</h1>
        //         <h3>Name: {this.props.name}</h3>
        //         <h2>Count: {this.state.count}</h2>
        //         <button onClick={() => this.setState({
        //             count: 1,
        //             count2: 2,
        //         })}>SetCount</button>
        //     </div>
        // )
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state.userInfo.avatar_url} alt="" />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>
            </div>
        )
    }
}

export default Profile;


/*

constructor
render
componentDidMount  - after first render

API call
set state

<Update Cycles>
render

componentDidUpdate  - after every next render

*/