import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const params = useParams();
    // console.log(params); 
    const { id } = params;
    // or
    // const {id} = useParams();

    /*
    code in useRestaurant

    const [restaurant, setRestaurant] = useState(null);

    async function getRestaurantinfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5879534&lng=73.7372559&restaurantId=" + id
        )
        const json = await data.json();
        // console.log(json.data.cards[0]);
        const a = json?.data;
        // console.log(a);
        setRestaurant(a)
        // console.log(restaurant);
        // console.log(restaurant.cards[0].card.card.info.name);
    }

    useEffect(() => {
        getRestaurantinfo();
    }, [])
    
    */

    const dispatch = useDispatch();

    const restaurant = useRestaurant(id);

    const restaurantInfo = restaurant?.cards[0]?.card?.card?.info;

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (!restaurant) ? <ShimmerUI /> : (
        <div className="menu flex">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurantInfo?.name}</h2>
                <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} alt="" />
                <h3>{restaurantInfo?.areaName}</h3>
                <h3>{restaurantInfo?.city}</h3>
                <h3>{restaurantInfo?.avgRating}</h3>
                <h3>{restaurantInfo?.costForTwoMessage}</h3>
            </div>
            <div className="p-5">
                {/* {console.log(Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards))} */}
                {/* {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((item) => <li>{item.card.card.itemCards.card.info.name}</li>)} */}
                {/* {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((items) => { console.log(items.card.card.itemCards.map((item) => { item.card.info.name })) })} */}

                {/* // .map((item) => { console.log(item); })} */}
                {/* { console.log(items?.card?.card.filter((item) => item.hasOwnProperty('itemCards'))) })} */}
                {/* {item.card.card.itemCards.card.info.name} */}



                <h1>Menu</h1>
                <ul data-testid="menu">
                    {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                        .filter(items => items?.card?.card?.hasOwnProperty('itemCards'))
                        .map((item) => item?.card?.card?.itemCards.map((n) => <li key={n?.card?.info?.id}>{n.card.info.name} - {" "}
                            <button
                                data-testid="addBtn"
                                className="p-1 bg-green-50"
                                onClick={() => handleAddItem(n.card.info)}
                            >
                                Add
                            </button>
                        </li>))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;