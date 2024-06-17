import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

  const {resId} = useParams(); //this will contain resId
  const resInfo = useRestaurantMenu(resId);
  

  if(resInfo === null) return  <Shimmer/>;
  
  const {name, cuisines, avgRating, areaName, cloudinaryImageId, costForTwo,
  } = resInfo?.cards[2]?.card?.card?.info;


  const {itemCards} = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return  (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <ul>
        {itemCards.map(item => 
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{ "Rs."}
            {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100
            }
           </li>)}
        <li>{avgRating}</li>
        <li>{areaName}</li>
        <li>{costForTwo}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
