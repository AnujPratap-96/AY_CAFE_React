import { useState, useEffect } from "react";
import {  SELECTED_FOOD_URL } from "./Data";
import { useSelector } from "react-redux";

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
  