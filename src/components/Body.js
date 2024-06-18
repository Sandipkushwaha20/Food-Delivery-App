import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withNearLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CARD_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

//Body
const Body = () => {
  //Local State Variable - Super pawerful variable
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);
  // console.log(ListOfRestaurants, "skand");
  const RestaurantCardNear = withNearLabel(RestaurantCard);

  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_API);
    const json = await data.json();
    // console.log(json);
    //Optional channing
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Check Online Status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are Offline!! Please check your internet connection....
      </h1>
    );
  }

  const { setUserName, loggedInUser } = useContext(UserContext);

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
             font-medium"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg transform 
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
            <label>search</label>
          </button>
        </div>

        {/* Top Rated Restaurant */}
        <div
          className="m-4 p-4 flex items-center transform 
          transition-transform duration-300 hover:scale-110"
        >
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

        {/* Change User Name */}
        <div className="m-4 p-4 flex items-center">
          <label>UserName: </label>
          <input className="p-2 border border-black rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
           />
        </div>
      </div>

      {/* Restaurant Container */}
      <div className="flex flex-wrap justify-center items-center min-h-screen">
        {filterdRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {/* if the restaurant is less than 3km distance then add a near label to it */}
            {restaurant?.info?.sla?.lastMileTravel < 3 ? (
              <RestaurantCardNear resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
          /* //{...restaurant?.info} OR resData = {restaurant} */
        ))}
      </div>
    </div>
  );
};

export default Body;
