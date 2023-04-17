import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";

const Body = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <>
            <div className="search-container">
                <input type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value) }}
                />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-list">

                {/* <RestaurantCard {...restaurantList[0].data} /> */}
                {/* using spread operator to pass multiple props */}
                {
                    restaurantList.map(restaurant => {
                        return <RestaurantCard {...restaurant.data} />
                    })
                }
                {/* <RestaurantCard restaurant={restaurantList[0]} />
            <RestaurantCard restaurant={restaurantList[1]} />
            <RestaurantCard restaurant={restaurantList[2]} />
            <RestaurantCard restaurant={restaurantList[3]} />
            <RestaurantCard restaurant={restaurantList[4]} />
            <RestaurantCard restaurant={restaurantList[5]} /> */}
            </div>
        </>
    )
}

export default Body