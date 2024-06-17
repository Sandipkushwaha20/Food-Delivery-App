import { useContext } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

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

  const {loggedInUser} = useContext(UserContext);
    return(
      <div className=" m-4 p-4 w-[300px] h-[460px] rounded-lg bg-gray-100
       hover:bg-gray-200 items-center "> 
        <img 
          className="rounded-lg w-full h-[180px]"
          alt="res-logo" 
          src={IMG_CDN_URL+cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h4>{avgRatingString} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
        <h4>{sla?.lastMileTravelString}</h4>
        <h3>{areaName}</h3>
        <h3>{loggedInUser}</h3>
      </div>
    )
  };

  //Higher order component

  //input - RestaurantCard =>> RestaurantCardNear

 export const withNearLabel = (RestaurantCard) =>{
    return(props) =>{
      return(
        <div className="">
          <label className="bg-black text-white m-2 p-2 rounded-lg absolute">Near</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;