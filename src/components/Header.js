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
                   <Link to="/">
                   <li>Home</li>
                   </Link> 

                    <Link to="/about">
                    <li>About Us</li>
                    </Link>

                    <Link to="/contact">
                    <li>Contact Us</li>
                    </Link>
                    
                    <li>Cart</li>
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