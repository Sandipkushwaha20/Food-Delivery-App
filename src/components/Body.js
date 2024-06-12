import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

 //Body
const Body = () =>{
  let listOFRestaurants = [ 
    {
    data: {
      id: "73011",
      name: "KFC",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      costForTwo: 30000,
      deliveryTime: 31,
      avgRating: "4.3",
    } ,
  },
  ,{
    data: {
      id: "73013",
      name: "Domino",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      costForTwo: 30000,
      deliveryTime: 31,
      avgRating: "4",
    } ,
  },]
    return(
      <div className="body">
        <div className="filter">
        <button className="filter-btn" 
        onClick={() =>{
          //filter logic here
          listOFRestaurants = listOFRestaurants.filter(
            (res) => res.data.avgRating > 4
          );
          console.log(listOFRestaurants);
        }}
        >
        Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {listOFRestaurants.map((restaurant) =>(
            <RestaurantCard key ={restaurant.data.id} resData ={restaurant}/>
          ))}
  
        </div>
  
      </div>
    )
  }

  export default Body;