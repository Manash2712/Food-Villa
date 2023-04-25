import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
    const params = useParams();
    // console.log(params); 
    const { id } = params;
    // or
    // const {id} = useParams();

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




    return (!restaurant) ? <ShimmerUI /> : (
        <div className="menu">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" />
                <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div>
                {/* {console.log(Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards))} */}
                {/* {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((item) => <li>{item.card.card.itemCards.card.info.name}</li>)} */}
                {/* {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((items) => { console.log(items.card.card.itemCards.map((item) => { item.card.info.name })) })} */}

                {/* // .map((item) => { console.log(item); })} */}
                {/* { console.log(items?.card?.card.filter((item) => item.hasOwnProperty('itemCards'))) })} */}
                {/* {item.card.card.itemCards.card.info.name} */}

                <h1>Menu</h1>
                <ul>
                    {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                        .filter(items => items?.card?.card?.hasOwnProperty('itemCards'))
                        .map((item) => item?.card?.card?.itemCards.map((n) => <li key={n?.card?.info?.id}>{n.card.info.name}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;