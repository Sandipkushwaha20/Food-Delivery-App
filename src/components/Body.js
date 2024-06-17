import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CARD_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

//Body
const Body = () => {
  //Local State Variable - Super pawerful variable
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);

  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_API);
    const json = await data.json();
    //Optional channing
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return <h1>Looks like you are Offline!! Please check your internet connection....</h1>
  }
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter flex justify-center items-center ">

      {/* Search Restaurant */}
       <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black m-2 rounded-md
             font-medium transform 
          transition-transform duration-300 hover:scale-110"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg transform 
          transition-transform duration-300 hover:scale-110"
            onClick={() => {
              //Filter restaurant card and filter the UI
              //searchText
              const filterdRestaurants = ListOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(SearchText.toLocaleLowerCase())
              );

              setFilterdRestaurants(filterdRestaurants);
            }}
          >
            {/* {" "} */}
            search
          </button>
      </div>

      {/* Top Rated Restaurant */}
        <div className="m-4 p-4 flex items-center transform 
          transition-transform duration-300 hover:scale-110">
          <button
            className="filter-btn  px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              //filter logic here
              const filteredList = ListOfRestaurants.filter(
                //here I can write res or restaurant what ever I wish
                (restaurant) => restaurant.info.avgRatingString >= 4
              );
              setFilterdRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        
      </div>

      {/* Restaurant Container */}
      <div className="flex flex-wrap justify-center items-center min-h-screen">
        {filterdRestaurants.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard  resData={restaurant} /> 
          </Link>
          /* //{...restaurant?.info} OR resData = {restaurant} */
        ))}
      </div>
    </div>
  );
};

export default Body;
