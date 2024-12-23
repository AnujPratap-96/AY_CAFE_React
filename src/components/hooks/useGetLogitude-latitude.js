import { setCityName , setLatitude , setLongitude , setStateName } from "../store/sidebarSlice";

export const handleClick = async (cityName , dispatch) => {
   
    try {
      const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=eabd2a24e8da184b83a46df7bf32eeb3`);
      const data = await response.json();
      console.log(data);
    const {name , lon , lat , state} = data[0];
    dispatch(setCityName(name));
    dispatch(setLatitude(lat));
    dispatch(setLongitude(lon));
    dispatch(setStateName(state));
      
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };