import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../Shimmer UI/HomeShimmer";
import { Link } from "react-router-dom";
import WhatsOnMind from "./WhatsOnMind";
import TopRestaurantChains from "./TopRestaurant";
import { FilterRestaurant, SearchInputBox } from "./FilterRestaurant";
import { useSelector, useDispatch } from "react-redux";
import { useGetRestaurantList } from "../hooks/useGetRestaurant"; // Import the hook

function Body() {
    const [searchInput, setSearchInput] = useState("");
    const [noRestaurant, setNoRestaurant] = useState("");
    const { latitude, longitude, cityName } = useSelector((store) => store.sidebar); // Access lat/lng from Redux
    
    const {
        whatsOnMind,
        whatsHeader,
        topRestaurants,
        topRestHeader,
        allRestaurants,
        allRestHeader,
        isLoading,
    } = useSelector((store) => store.restaurants); // Access restaurant data from Redux
    
    const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (latitude && longitude) {
            useGetRestaurantList(latitude, longitude, dispatch);
        }
    }, [latitude, longitude]);

    // Update filteredRestaurants when allRestaurants is updated
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        if (allRestaurants.length > 0) {
            setFilteredRestaurants(allRestaurants);
        }
    }, [allRestaurants]);

    // Show shimmer if data is loading
    if (isLoading) {
        return <Shimmer />;
    }

    if (topRestaurants.length === 0) return <h1 style={{ color: theme.textColor }}>No Restaurant Found</h1>;

    return (
        <div
            className="px-4 sm:px-6 lg:px-8 py-6 max-w-screen-lg mx-auto"
            style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
        >
            {/* Whats On Mind and Top Restaurant Chains */}
            <div className="w-full mx-auto mb-5"> 
                {whatsOnMind.length > 0 ? (
                    <WhatsOnMind
                        WhatsOnMind={whatsOnMind}
                        header={whatsHeader}
                        theme={theme} // Pass theme to child component
                    />
                ) : null}
                <TopRestaurantChains
                    topRestaurantHeader={topRestHeader}
                    TopRestaurant={topRestaurants}
                    cityName={cityName}
                    theme={theme} // Pass theme to child component
                />
            </div>

            {/* Search Bar */}
            <h1
                className="font-Poppins font-bold text-lg lg:text-2xl ml-1 mb-10"
                style={{ color: theme.textColor }}
            >
                {allRestHeader || `Restaurants with online food delivery in ${cityName}`}
            </h1>
            <div className="mb-6 flex flex-col sm:flex-row justify-start items-center gap-2">
                <SearchInputBox
                    allRestaurants={allRestaurants}
                    setFilteredRestaurants={setFilteredRestaurants}
                    setNoRestaurant={setNoRestaurant}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    theme={theme} // Pass theme to child component
                />
                <FilterRestaurant
                    allrestaurant={allRestaurants}
                    setFilteredRestaurants={setFilteredRestaurants}
                    filteredRestaurants={filteredRestaurants}
                    theme={theme} // Pass theme to child component
                />
            </div>

            {/* Restaurants Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mx-auto">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard Data={{ ...restaurant?.info }} theme={theme} />
                        </Link>
                    ))
                ) : (
                    <p style={{ color: theme.subtextColor }}>
                        {noRestaurant || "No restaurants found."}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Body;
