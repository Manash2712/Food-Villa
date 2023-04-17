import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    // const { name, cuisines, cloudinaryImageId, lastMileTravelString } = restaurant.data;
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="burger" />
            {/* <h2>{props.restaurant.data?.name}</h2> */}
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard;