import { Link } from "react-router-dom";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";

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
        const data = await fetch("https://mocki.io/v1/ca089d73-d777-456a-a62d-54ba2b9dbd6b")
        const json = await data.json();
        //console.log(json.data);
        setListOfRestaurants(json.data);
        setfilteredRestaurants(json.data);
    }

    const searchHandler = () =>{
        const filteredRes = listOfRestaurants.filter((res) => res?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
        setfilteredRestaurants(filteredRes);
    }

    const PromotedRestaurant = withPromotedLabel(RestaurantCard);

    const { loggedInUser, setUserName } = useContext(UserContext);

    return (
        <div className="body">
            <div className="p-4 m-4">
                <input data-testid="searchInput" type="text" onChange={(e)=>{setSearchText(e.target.value)}} value={searchText} className="border border-solid border-black"/>
                <button onClick={searchHandler} className="cursor-pointer bg-green-100 px-4 py-2 m-4 rounded-lg">Search</button>
                <button onClick={filterBtnHandler} className="cursor-pointer mx-4 px-4 py-2 rounded-lg bg-orange-300">Top rated restaurant</button>
                <button onClick={clearBtnHandler} className="cursor-pointer mx-4 px-4 py-2 rounded-lg bg-gray-100">Clear</button>
                <button onClick={()=> setUserName("shweta")} className="cursor-pointer mx-4 px-4 py-2 rounded-lg bg-gray-100">Set Name</button>
                {/* <input type="text" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} className="border-1 rounded-lg p-2"/> */}
            </div>
            <div className="flex flex-wrap m-4">
            {
                filteredRestaurants.map((restaurant)=> 
                    <Link key={restaurant.card.card.info.id} to={"/restaurant/"+restaurant.card.card.info.id} 
                className="bg-gray-100 rounded-lg m-4 p-4 hover:bg-gray-300">
                    {
                        restaurant.card.card.info.promoted ?
                        <PromotedRestaurant resData={restaurant} /> : 
                        <RestaurantCard resData={restaurant} />
                    }
                    </Link>
                )
            }
            </div>
        </div>
    )
}

export default Body;