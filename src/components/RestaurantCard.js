import { IMG_CDN_URL } from "../utils/constants";

//RestroCards
const RestaurantCard = (props) =>{
  const {resData} = props;
  const{
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
  } = resData?.info;

    return(
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}> 
        <img 
          className="res-logo"
          alt="res-logo" 
          src={IMG_CDN_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h4>{avgRatingString} stars</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h3>{areaName}</h3>

      </div>
    )
  }

  export default RestaurantCard;