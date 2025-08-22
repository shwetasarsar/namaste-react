import RestaurantCard from "./RestaurantCard";
import cardsList from "../utils/mockData";
import { useState } from "react";

const Body =() =>{
    const [listOfRestaurants, setListOfRestaurants] = useState(cardsList);

    const filterBtnHandler = () =>{
        const filteredList = cardsList.filter((res)=>res.card.card.info.avgRating > 4.6)
        setListOfRestaurants(filteredList);
    }

    const clearBtnHandler = () =>{
        setListOfRestaurants(cardsList);
    }

    return (
        <div className="body-container">
            <div className="btn-container">
                <button onClick={filterBtnHandler} style={{cursor: "pointer"}}>Filter Button</button>
                <button onClick={clearBtnHandler} style={{cursor: "pointer"}}>Clear Filter</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant)=> <RestaurantCard resData={restaurant} key={restaurant.card.card.info.id}/>)
                }
            </div>
        </div>
    )
}

export default Body;