import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText))
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList)
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
                <button
                    className="search-btn"
                    onClick={() => {
                        // update the restaurants
                        const data = filterData(searchText, restaurants);
                        setRestaurants(data)
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">

                {/* <RestaurantCard {...restaurantList[0].data} /> */}
                {/* using spread operator to pass multiple props */}
                {
                    restaurants.map((restaurant, key = restaurant.data?.uuid) => {
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