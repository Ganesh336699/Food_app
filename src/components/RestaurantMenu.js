import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";

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
    }

    return (
        <div className="body">
            <h1>{id}</h1>
            {restaurant.name ? (
                <h1>{restaurant.name}</h1>
            ) : (
                <h1>Loading restaurant info...</h1>
            )}
            {restaurant.cloudinaryImageId ? (
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt={restaurant.name} />
            ) : (
                <p>Loading image...</p>
            )}
            <h1>Menu</h1>
            <ul>
                {restaurantMenu.length > 0 ? (
                    restaurantMenu.map((dish, index) => (
                        <li key={index}>{dish.name}</li>
                    ))
                ) : (
                    <li>No dishes available</li>
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
