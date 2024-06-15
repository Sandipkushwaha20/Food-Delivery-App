import { useEffect, useState } from "react"
import { CARD_API } from "./constants";

const useResCards = () =>{
    const [listOfRestaurants , setListOfRestaurants] = useState(null);
    // console.log("useEfffect");
    useEffect(() =>{
        console.log("useEfffect()");
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(CARD_API);
        
        const json = await data.json();
        console.log("sisis",json);
        setListOfRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

    }
    console.log(listOfRestaurants, "s8s8s8");
    return listOfRestaurants;
}

export default useResCards;