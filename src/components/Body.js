import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body =() =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const filterBtnHandler = () =>{
        const filteredList = listOfRestaurants.filter((res)=>res?.card?.card?.info?.avgRating > 4.6);
        setListOfRestaurants(filteredList);
    }

    const clearBtnHandler = () =>{
        fetchData();
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () =>{
        const data = await fetch("https://mocki.io/v1/f0241638-27f4-454a-ba4d-0a8efea2de55")
        const json = await data.json();
        setListOfRestaurants(json.data);
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