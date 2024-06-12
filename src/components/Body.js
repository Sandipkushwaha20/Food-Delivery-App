import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

 //Body
const Body = () =>{
  //Local State Variable - Super pawerful variable
  const [ListOFRestaurants , setListOFRestaurants] = useState(resList);
  // const arr = useState(resList);
  // const ListOFRestaurants = arr[0];
  // const setListOFRestaurants = arr[1];
  // const [ListOFRestaurants , setListOFRestaurants] = arr;
 
  //Normal JS Variable
  // let listOFRestaurants = [];


   
    return(
      <div className="body">
        <div className="filter">
        <button className="filter-btn" 
        onClick={() =>{
          //filter logic here
          const filterdList = ListOFRestaurants.filter(
            (res) => res.data.avgRating >= 4
          );
          setListOFRestaurants(filterdList);
        }}
        >
        Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {ListOFRestaurants.map((restaurant) =>(
            <RestaurantCard key ={restaurant.data.id} resData ={restaurant}/>
          ))}
  
        </div>
  
      </div>
    )
  }

  export default Body;