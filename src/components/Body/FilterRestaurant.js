import React, { useState, useEffect } from "react";
import { filterData } from "../hooks/filterData";

export const FilterRestaurant = ({
  allrestaurant,
  setFilteredRestaurants,
}) => {
  const [isRatingFiltered, setIsRatingFiltered] = useState(false); // Track if rating filter is applied
  const [priceCategory, setPriceCategory] = useState(""); // Track which price category is selected
  const [isFilterApplied, setIsFilterApplied] = useState(false); // Track if any filter is applied

  // Filter by rating > 4.2
  const filterOnRating = (restaurants) => {
    return restaurants.filter((res) => res?.info?.avgRating > 4.2);
  };

  // Filter by price range
  const filterOnPrice = (restaurants, category) => {
    return restaurants.filter((res) => {
      const costForTwo = parseInt(res?.info?.costForTwo?.replace(/\D/g, ""), 10); // Extract numeric part of cost
      if (category === "low") {
        return costForTwo <= 250; // Low price (<= ₹250 for two)
      } else if (category === "medium") {
        return costForTwo > 250 && costForTwo <= 400; // Medium price (₹251 - ₹400 for two)
      } else if (category === "high") {
        return costForTwo > 400; // High price (> ₹400 for two)
      }
      return true;
    });
  };

  // Apply rating and price filters
  const applyFilters = () => {
    let filteredData = allrestaurant;

    if (isRatingFiltered) {
      filteredData = filterOnRating(filteredData);
    }

    if (priceCategory) {
      filteredData = filterOnPrice(filteredData, priceCategory);
    }

    setFilteredRestaurants(filteredData);
  };

  // Handle filter button clicks
  const handleFilterClick = (type) => {
    if (type === "rating") {
      setIsRatingFiltered((prev) => !prev);
    } else {
      // Toggle price category
      setPriceCategory((prev) => (prev === type ? "" : type));
    }
    setIsFilterApplied(true); // Set filters as applied
  };

  // Reset filters and restore the original restaurant list
  const resetFilters = () => {
    setIsRatingFiltered(false);
    setPriceCategory("");
    setIsFilterApplied(false);
    setFilteredRestaurants(allrestaurant); // Reset to original list
  };

  // Apply or reset filters when filter states change
  useEffect(() => {
    if (isFilterApplied) {
      applyFilters();
    } else {
      setFilteredRestaurants(allrestaurant); // Reset if no filters are applied
    }
  }, [isRatingFiltered, priceCategory, isFilterApplied]);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Rating filter button */}
      <button
        onClick={() => handleFilterClick("rating")}
        className={`${
          isRatingFiltered
            ? "border border-orange-600 text-white bg-orange-600"
            : "border border-orange-600 text-orange-600 bg-white"
        } font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition duration-200`}
      >
        {isRatingFiltered ? "Above 4.2 (Applied)" : "Above 4.2"}
      </button>

      {/* Price category buttons */}
      <button
        onClick={() => handleFilterClick("low")}
        className={`${
          priceCategory === "low"
            ? "border border-orange-600 text-white bg-orange-600"
            : "border border-orange-600 text-orange-600 bg-white"
        } font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition duration-200`}
      >
        Low Price
      </button>
      <button
        onClick={() => handleFilterClick("medium")}
        className={`${
          priceCategory === "medium"
            ? "border border-orange-600 text-white bg-orange-600"
            : "border border-orange-600 text-orange-600 bg-white"
        } font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition duration-200`}
      >
        Medium Price
      </button>
      <button
        onClick={() => handleFilterClick("high")}
        className={`${
          priceCategory === "high"
            ? "border border-orange-600 text-white bg-orange-600"
            : "border border-orange-600 text-orange-600 bg-white"
        } font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition duration-200`}
      >
        High Price
      </button>

      {/* Reset filters button */}
      {isFilterApplied && (
        <button
          onClick={resetFilters}
          className="border border-gray-600 text-gray-600 bg-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
};


// Search Input Box Component
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
  );
};
