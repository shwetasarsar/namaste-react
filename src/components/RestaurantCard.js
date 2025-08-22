import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData} = props;
    const {name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId} = resData?.card?.card?.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={`${CDN_URL}${cloudinaryImageId}`} alt="food"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} starts</h4>
            <h4>{sla?.deliveryTime} minuts</h4>
        </div>
    )
}

export default RestaurantCard;