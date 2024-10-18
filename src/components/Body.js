
import Reastaurantcard from "./RestaurantCard";
import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";





 function filterData(searchText , restaurants){

   const filterData =restaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))  || 
                      restaurants.filter((restaurant) => restaurant?.info?.areaName.toLowerCase().includes(searchText.toLowerCase())) || 
                      restaurants.filter((restaurant) => restaurant?.info?.cuisines.join(",").toLowerCase().includes(searchText.toLowerCase())) ;
      return filterData;
 }




const Body = () => {
    
    const [filteredrestaurants , setfilteredrestaurants] = useState([]);
    const [restaurants , setrestaurants] = useState([]);
    const [searchText , setsearchText] = useState("");
    const [RestaurantName , setRestaurantName] = useState("");
    
     useEffect(() => {
      getRestaurants();
     },[]);

    async function getRestaurants(params) {
      
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3724&lng=78.4378&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
       console.log(json);
       setrestaurants(json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants);
       setfilteredrestaurants(json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants);
       

    };



   
    return restaurants.length === 0 ? <Shimmer/> : (
   
           <div className="body">
               <div className="search-box">
                  <input 
                  type="text" 
                  className="search-input"
                  placeholder="search a restaurant you want..."
                  value={searchText}
                     onChange = {(e) => {
                  
                         setsearchText(e.target.value);
                          
                          }}/>
            
                      <button className="search-btn"
                       
                       onClick = {() => {

                        const data = filterData(searchText,restaurants);
                            
                                 setfilteredrestaurants(data);
                                 setRestaurantName(searchText);
                                 setsearchText(""); 

                       }   }
                       
                       >Search</button>
               
               </div>
              <div className="restaurant-container">
            
               {   
               filteredrestaurants.length !== 0 ? 
                    filteredrestaurants?.map((restaurant) => <Reastaurantcard key={restaurant.info.id} resData={restaurant} />)
                    : 
                    <h2>Sorry, we couldn't find any restaurant for "{RestaurantName}"</h2>
               }
              </div>
            </div>
   )
}
export default Body;