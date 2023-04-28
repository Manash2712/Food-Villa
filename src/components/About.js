import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";


// Functional
// const About = () => {
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p>This is the Namaste React Live course chapter seven</p>
//             <Outlet />
//         </div>
//     )
// }

// export default About;

// Class Component

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent-Constructor");
    }

    componentDidMount() {
        console.log("Parent-componentDidMount");
    }

    render() {
        console.log("Parent-render");
        return (
            <div>
                <h1>About Us Page</h1>
                <p>This is the Namaste React Live course chapter seven</p>
                <ProfileClass name={"First Child"} />
                <ProfileClass name={"Second Child"} />
            </div>
        )
    }
}

export default About



/*



*/