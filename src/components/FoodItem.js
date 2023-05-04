import { IMG_CDN_URL } from "../config";

const FoodItem = ({
    name,
    imageId,
    category,
    price,
    description
}) => {
    console.log(name, imageId);
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL + imageId} alt="" />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{category}</h3>
            {/* <h3>{description}</h3> */}
            <h3>Rs. {price / 100}</h3>
        </div>
    )
}

export default FoodItem;