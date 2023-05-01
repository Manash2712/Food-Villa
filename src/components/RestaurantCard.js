import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    // const { name, cuisines, cloudinaryImageId, lastMileTravelString } = restaurant.data;
    return (
        <div className="card w-[200px] p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="burger" />
            {/* <h2>{props.restaurant.data?.name}</h2> */}
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard;