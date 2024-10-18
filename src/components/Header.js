import { useState } from "react";

Title = () => (

 <a href="/"> 
 <img
  className="logo"
   src="https://lh3.googleusercontent.com/7kfhqCOmv17p7RDVZulmcFmKYiCmF8gYAEGRDOt3mfK8rwH1skFf8n_m3bGmLbnvWAiWVsIFE8Pk2i2ui_dvnpTZI9QSm4ylXQGRVPAjbQ=w1200-rw" 
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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