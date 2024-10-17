
import { restaurantList } from "../config";
import Reastaurantcard from "./RestaurantCard";
import { useState } from "react";





 function filterData(searchText , restaurants){

   const filterData =restaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))  || 
                      restaurants.filter((restaurant) => restaurant?.info?.areaName.toLowerCase().includes(searchText.toLowerCase())) || 
                      restaurants.filter((restaurant) => restaurant?.info?.cuisines.join(",").toLowerCase().includes(searchText.toLowerCase())) ;
      return filterData;
 }




const Body = () => {

    const [restaurants , setrestaurants] = useState(restaurantList);
    const [searchText , setsearchText] = useState("");
    

    return (
   
           <div className="body">
               <div className="search-box">
                  <input 
                  type="text" 
                  className="search-input"
                  placeholder="search"
                  value={searchText}
                     onChange = {(e) => {
                  
                         setsearchText(e.target.value);
                          
                          }}/>
            
                      <button className="search-btn"
                       
                       onClick = {() => {

                        const data = filterData(searchText,restaurants);
                        setrestaurants(data);
                       }   }
                       
                       >Search</button>
               
               </div>
              <div className="res-container">
            
               {
                    restaurants.map((restaurant) => <Reastaurantcard key={restaurant.info.id} resData={restaurant} />)
               }
              </div>
            </div>
   )
}
export default Body;