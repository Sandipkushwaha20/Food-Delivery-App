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
      <div className=" m-4 p-4 w-[300px] h-[460px] rounded-lg bg-gray-100
       hover:bg-gray-200 items-center transform transition-transform duration-300
        hover:scale-105"> 
        <img 
          className="rounded-lg w-full h-[180px]"
          alt="res-logo" 
          src={IMG_CDN_URL+cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h4>{avgRatingString} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h3>{areaName}</h3>

      </div>
    )
  }

  export default RestaurantCard;