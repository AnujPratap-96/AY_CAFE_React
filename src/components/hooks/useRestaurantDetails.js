import { useState , useEffect } from "react";
import { SWIGGY_MENU_API_URL  } from "../Utility/Data";
import { useSelector } from "react-redux";

const useRestaurantDetails = (id) =>{
    const [restaurantDetails , setRestaurantDetails] = useState(null);
    const { latitude, longitude } = useSelector((store) => store.sidebar);

    useEffect(() => {
        GetRestaurantMenu();
      }, []);
    
      const GetRestaurantMenu = async () => {
        try {
          const response = await fetch( SWIGGY_MENU_API_URL(latitude , longitude) + id , {method : 'GET'});
          const resdata = await response.json();
          setRestaurantDetails(resdata?.data);
        } catch (err) {
          console.log(err);
        }
      };
     
      return restaurantDetails;

}

export default  useRestaurantDetails;