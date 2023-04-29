import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5879534&lng=73.7372559&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        // optional chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    // const isOnline = useOnline();

    // if (!isOnline) {
    //     return <h1>🔴Offline, please check your internet connection!!</h1>
    // }

    // Conditional rendering
    // if restaurant is empty => shimmer UI
    // if restaurant has data => actual UI

    // not render component (Early return)
    if (!allRestaurants) return null;

    // if (filteredRestaurants?.length === 0) return <h1>No Restaurant match the filter</h1>

    return (allRestaurants.length === 0) ? < ShimmerUI /> : (
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
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data)
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">

                {/* <RestaurantCard {...restaurantList[0].data} /> */}
                {/* using spread operator to pass multiple props */}

                {/* Logic for no restaurant found for search */}
                {
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant?.data?.id} key={restaurant.data?.uuid}><RestaurantCard {...restaurant.data} /></Link>)
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