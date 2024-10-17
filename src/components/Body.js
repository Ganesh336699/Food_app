
import { restaurantList } from "../config";
import Reastaurantcard from "./RestaurantCard";

const Body = () => {

    return (
   
           <div className="body">
               <div className="search-box">
               <input placeholder="search" />
               
               </div>
              <div className="res-container">
            
               {
                    restaurantList.map((restaurant,index) => <Reastaurantcard key={restaurant.info.id} resData={restaurant} />)
               }
              </div>
            </div>
   )
}
export default Body;