

export const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"



export const SWIGGY_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.375694&lng=79.435959&page_type=DESKTOP_WEB_LISTING`;
;

export const SWIGGY_MENU_API_URL = (lat , lng) => `https://ay-cafe-react.vercel.app/api/proxy?lat=${lat}&lng=${lng}&type=menu&restaurantId=`;

export const SELECTED_FOOD_URL = (lat , lng ,collection_id) => `https://ay-cafe-react.vercel.app/api/proxy?lat=${lat}&lng=${lng}&type=pizzaList&collection=${collection_id}`;
