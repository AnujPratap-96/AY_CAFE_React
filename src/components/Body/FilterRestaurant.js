import React, { useState , useEffect } from "react";
import { filterData } from "../Utility/helper";

export const FilterRestaurant = ({
  allrestaurant,
  setFilteredRestaurants,
  filteredRestaurants
 
})=> {
  
  const [filteredTrue, setFilteredTrue] = useState(false);

  const filterOnRating = (filteredRestaurants) => {
    return filteredRestaurants.filter((res) => res?.info?.avgRating > 4.5);
  };

  const handleFilterClick = () => {
    const data = filterOnRating(filteredRestaurants);
    setFilteredTrue(!filteredTrue);
    if (filteredTrue) {
      setFilteredRestaurants(allrestaurant);
    } else {
      setFilteredRestaurants(data);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleFilterClick}
        className={`${
          filteredTrue
            ? "border border-orange-600 text-white bg-orange-600"
            : "border border-orange-600 text-orange-600 bg-white"
        } font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition duration-200`}
      >
        Above 4.0
      </button>
      <button
        onClick={handleFilterClick}
        className={`${
          filteredTrue
            ? "border border-orange-600 text-white bg-orange-600"
            : "border border-orange-600 text-orange-600 bg-white"
        } font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition duration-200`}
      >
        Above 4.0
      </button>
    </div>
  );
}

export const SearchInputBox = ({
  allRestaurants,
  setFilteredRestaurants,
  setNoRestaurant,
  searchInput,
  setSearchInput
}) => {

        // Update filteredRestaurants whenever searchInput changes
        useEffect(() => {
            if (searchInput.length === 0) {
                setFilteredRestaurants(allRestaurants); // Reset to all restaurants if input is empty
                setNoRestaurant(""); // Clear any "no restaurants" message
            } else {
                const data = filterData(searchInput, allRestaurants);
                if (data.length === 0) {
                    setNoRestaurant(
                        <h1 className="text-center text-lg text-gray-500">No Restaurant Found</h1>
                    );
                } else {
                    setNoRestaurant("");
                }
                setFilteredRestaurants(data);
            }
        }, [searchInput, allRestaurants]);


    return (
        <input
        type="text"
        placeholder="Search for restaurants..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)} // Just set input
        className="border border-gray-300 rounded-lg p-2 h-12 w-full sm:w-64 focus:outline-none focus:border-orange-500 focus:ring-0"
    />
    )
};
