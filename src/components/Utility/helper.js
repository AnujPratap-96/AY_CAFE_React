import { useState, useEffect } from "react";
import {  SELECTED_FOOD_URL } from "./Data";
import { useSelector } from "react-redux";

export function filterData(searchInput, resList) {
  return resList.filter((res) => {
    // Convert the search input to lowercase for case-insensitive matching
    const lowerCaseInput = searchInput.toLowerCase();

    // Extract restaurant name, cuisines, and food information
    const restaurantName = res?.info?.name?.toLowerCase() || "";
    const cuisines = res?.info?.cuisines?.join(" ")?.toLowerCase() || ""; // assuming cuisines is an array
    const foodItems = res?.info?.foodItems?.join(" ")?.toLowerCase() || ""; // assuming foodItems is an array

    // Check if the search input matches any of the criteria (name, cuisines, or food items)
    return (
      restaurantName.includes(lowerCaseInput) ||
      cuisines.includes(lowerCaseInput) ||
      foodItems.includes(lowerCaseInput)
    );
  });
}



export const useGetSelectedFoodCards = (collect_id) => {
  const [header, setHeader] = useState([]);
  const [allCards, setAllCards] = useState([]);

    // Access longitude and latitude from the Redux store
    const { latitude, longitude } = useSelector((store) => store.sidebar);

  const getCards = async () => {
    try {
      const data = await fetch(SELECTED_FOOD_URL(latitude , longitude) + collect_id);
      const res = await data.json();
    
      const cards = res?.data?.cards;
  
      setHeader(cards[0]?.card?.card);
      setAllCards(cards);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCards();
  }, []);
  return [header , allCards];
};
