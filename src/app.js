import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import { IMG_CDN_URL } from "./config";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";


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
             <Outlet/>  
             <Footer/>
           </div>
    )
}


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <Body/>,
      },
      {
        path : "/about",
        element : <About/>,
      },
      {
        path : "/contact",
        element : <Contact/>,
      },
      {
        path : "/restaurant/:id",
        element : <RestaurantMenu/>,
      }
    ],
  },


]);


 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = { appRouter } />)