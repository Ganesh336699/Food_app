import { IMG_CDN_URL } from "../config";

const Reastaurantcard = (props) => {

    const {resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
      areaName,
    }  = resData?.info ;

    return (
       
          <div className="restaurant-card">
             <img 
                className="restaurant-logo" 
                alt="res-logo " 
                src={ IMG_CDN_URL + cloudinaryImageId }/>
              
              <div className="restaurant-details">
              <h3 className="restaurant-name">{name}</h3>
              <div className="esa-rating">
              <h4 className="rating"><span>{avgRating} stars</span></h4>
              <h4>{costForTwo}</h4>
              <h4>{deliveryTime} mins</h4>
              </div>
              <p className="cuisine">{cuisines.join("," )}</p>
              <p className="location">{areaName}</p>
              </div>
          </div>
     );
};

export default Reastaurantcard;