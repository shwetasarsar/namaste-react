import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body =() =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, [])

    const filterBtnHandler = () =>{
        const filteredList = listOfRestaurants.filter((res)=>res?.card?.card?.info?.avgRating === 5);
        setfilteredRestaurants(filteredList);
    }

    const clearBtnHandler = () =>{
        fetchData();
        setSearchText("");
    }

    const fetchData = async () =>{
        const data = await fetch("https://mocki.io/v1/f0241638-27f4-454a-ba4d-0a8efea2de55")
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json.data);
        setfilteredRestaurants(json.data);
    }

    const searchHandler = () =>{
        const filteredRes = listOfRestaurants.filter((res) => res?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
        setfilteredRestaurants(filteredRes);
    }

    return (
        <div className="body-container">
            <div className="btn-container">
                <input type="text" onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}/>
                <button onClick={searchHandler}>Search</button>
                <button onClick={filterBtnHandler} style={{cursor: "pointer"}}>Top rated restaurant</button>
                <button onClick={clearBtnHandler} style={{cursor: "pointer"}}>Clear</button>
            </div>
            <div className="res-container">
            {
                filteredRestaurants.map((restaurant)=> <RestaurantCard resData={restaurant} key={restaurant.card.card.info.id}/>)
            }
            </div>
        </div>
    )
}

export default Body;