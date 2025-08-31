import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData} = props;
    const {name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId} = resData?.card?.card?.info;
    return (
        <div className="w-50 h-full">
            <img className="w-full h-50 object-cover rounded-lg" src={`${CDN_URL}${cloudinaryImageId}`} alt="food"/>
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4 className="py-2">{costForTwo}</h4>
            <h4>{avgRating} starts</h4>
            <h4>{sla?.deliveryTime} minuts</h4>
        </div>
    )
}

export const withPromotedLabel =(WrappedComponent)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute p-2 m4 bg-black text-white">Promoted</label>
                <WrappedComponent {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;