import { IMG_CDN_URL } from "../utils/constants";

//RestroCards
const RestaurantCard = (props) =>{
    // console.log(props); //object
    const {resData} = props;
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.data;
    return(
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}> 
        <img 
          className="res-logo"
          alt="res-logo" 
          src={IMG_CDN_URL + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo / 100}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
  }

  export default RestaurantCard;