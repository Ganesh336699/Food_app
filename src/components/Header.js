import { useState } from "react";
import logo from "../assets/images/icon-logo.jpg";
import { Link } from "react-router-dom";

Title = () => (

 <a href="/"> 
 <img
  className="logo"
   src={logo}
   />
   </a>
);




export const Header = () => {

    const [LoggedIn , setLoggedIn] = useState(false);


    return (
       
         <div className="header">
              
                <Title/>

             <div className="nav-items">
                <ul>
                   <Link  className="nav-links" to="/">
                   <li>Home</li>
                   </Link> 

                    <Link   className="nav-links" to="/about">
                    <li>About Us</li>
                    </Link>

                    <Link className="nav-links" to="/contact">
                    <li>Contact Us</li>
                    </Link>
                    <Link className="nav-links" >
                    <li>Cart</li>
                    </Link>
                    {
                (LoggedIn ?
                     (<button className="login" onClick = {() => setLoggedIn(false)}>Logout</button>) :
                     (<button className="login" onClick = {() => setLoggedIn(true)}>Login</button>)
                    )
               }
               </ul>
              
             </div>
             
        </div>
    );
};
export default Header;