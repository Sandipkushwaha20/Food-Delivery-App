import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.44250&lng=81.85170&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    //convert data to json
    const json = await data.json();
    //chech wheather we can call swiggy API ?
    // console.log(json);

    //Optional channing
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //Whenever state variable update, react triggers a reconciliaton cycle(re-renders the component)
  console.log("rendering again");

  // condition rendering
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
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
          {" "}
          search
        </button>
        <button
          className="filter-btn"
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
      <div className="res-container">
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
