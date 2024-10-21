import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer, {RestaurantMenuShimmer} from "./Shimmer";
import "../RestaurantMenu.css" ;

const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params;

    const [restaurantMenu, setrestaurantMenu] = useState([]);
    const [restaurant, setrestaurant] = useState({});

    useEffect(() => {
        async function fetchData() {
            const cards = await getRestaurantsInfo();
            if (cards) {
                getMenu(cards);
            }
        }
        fetchData();
    }, [id]);

    async function getRestaurantsInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3724&lng=78.4378&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();

       
        setrestaurant(json.data.cards[2]?.card?.card?.info || {}); 
        return json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    }

    function getMenu(data) {
        const result = [];
        const items = [];

        data?.forEach((item) => {
            if (item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
                item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
                result.push(item.card.card);
            }
        });

        result?.forEach((category) => {
            if (category.hasOwnProperty("categories")) {
                category.categories?.forEach((subcategory) => {
                    subcategory?.itemCards?.forEach((itemCard) => {
                        items.push(itemCard.card.info);
                    });
                });
            } else {
                category?.itemCards?.forEach((itemCard) => {
                    items.push(itemCard.card.info);
                });
            }
        });

        setrestaurantMenu(items);
    };


    // if(restaurant == null) { return <RestaurantMenuShimmer /> ;}




    return (
        <div className="body">
            <div className="menu">
            <div className="restaurant-header">
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt={restaurant.name} />
        <div className="restaurant-header-details">
           <h1>{restaurant.name}</h1>
           <h3>{restaurant.locality}</h3>
          <p>{restaurant.cuisines?.join(", ")}</p>
          <h4 className="rating-time">
            <div className="rating">
            
              <span>
                {restaurant.avgRatingString || 3.8} ({restaurant.alttotalRatingsString || "1K+ ratings"})
              </span>
            </div>
            <span>|</span>
            <span className="time">{restaurant.sla?.slaString}</span>
          </h4>
          </div>
            </div>

            { restaurantMenu.length ? (

             restaurantMenu.map((dish) => {

  const {
    id,
    name,
    price,
    defaultPrice,
    ratings,
    imageId,
    description,
  } = dish;


  return (
    <div key={id} className="menu-items">
      <div className="left">
        <h2>{name}</h2>
        <h4>₹{price / 100 || defaultPrice / 100}</h4>
        <p>{description && description.slice(0, 60) || "Dummy"}</p>
        <h4 className="rating">
         
          <span>
            {ratings?.aggregatedRating?.rating || 3.8} (
            {ratings?.aggregatedRating?.ratingCountV2 || 6})
          </span>
        </h4>
      </div>
      <div className="right">
        <img src={IMG_CDN_URL + imageId} alt={name} />
        <button className="add-btn">ADD</button>
      </div>
    </div>
  );
})
            ) : (

                <RestaurantMenuShimmer/>
    
                // <h2>No items available</h2>
            )}
        
        </div>
        </div>
        
    );
};




export default RestaurantMenu ;
