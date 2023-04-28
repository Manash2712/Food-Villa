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
                {/* <ProfileClass name={"Second Child"} /> */}
            </div>
        )
    }
}

export default About



/*

Parent-Constructor
Parent-render
Child-constructor First Child
Child-render First Child
Child-constructor Second Child
Child-render Second Child
Child-ComponentDidMount First Child
Child-ComponentDidMount Second Child
Parent-componentDidMount

*/

/*
After calling api inside componentDidMount of Profile

Parent-Constructor
Parent-render
Child-constructor First Child
Child-render First Child
Parent-componentDidMount
Child-ComponentDidMount First Child
Child-render First Child


react finishes render phase first and then goes to commit phase. 
Child-ComponentDidMount will be called later because it is async and it will take some time and data to load

*/