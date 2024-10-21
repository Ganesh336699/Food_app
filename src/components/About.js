

//rafce + enter -->>  to create basic component

import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () => {

    return (
        <div className="body">
            <h1>About us page</h1>

            <Profile/>
        </div>
    )

};


export default About;