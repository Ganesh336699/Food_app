import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import { IMG_CDN_URL } from "./config";


/**
 * Header
 *  -logo
 *  -nav items
 * body
 *   -search 
 *   -restaurant container
 *     -ReastaurnatCards
 * footer 
 *   -copyrights
 *   -links
 *   -adsress
 *   -contact
 * 
 */





const AppLayout = () => {

    return (
        
           <div className="app">
             <Header/>
             <Body/>
             <Footer/>
           </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);