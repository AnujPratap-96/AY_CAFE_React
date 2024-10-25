import { setLoading , setRestaurantData } from "../store/restaurantSlice";

// Cache object to store previously fetched data


// Your Swiggy API URL, with placeholders for lat and lng
export const SWIGGY_URL = (lat, lng) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;
export const useGetRestaurantList = (latitude, longitude , dispatch) => {


  const fetchData = async () => {
    // if (!latitude || !longitude) return;

    try {
      dispatch(setLoading(true));
      const response = await fetch(SWIGGY_URL(latitude, longitude));
      const res = await response.json();

      const cards = res?.data?.cards;


      // Prepare the data from response
      const whatsOnMindCards = cards[0]?.card?.card?.imageGridCards?.info || [];
      const whatsOnMindHeader = cards[0]?.card?.card?.header || "";
      const topRestCard = cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      const topRestHeader = cards[1]?.card?.card?.header || "";
      // const allRestCards = cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      const allRestHeader = cards[2]?.card?.card?.title || "";

      // Dispatch data to Redux store
     
      dispatch(setRestaurantData({
        whatsOnMind: whatsOnMindCards,
        whatsHeader: whatsOnMindHeader,
        topRestaurants: topRestCard,
        topRestHeader: topRestHeader,
        allRestaurants: topRestCard,
        allRestHeader: allRestHeader,
      }));
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };


fetchData();
  
};