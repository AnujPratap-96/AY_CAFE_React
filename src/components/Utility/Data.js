

export const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"



export const SWIGGY_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.375694&lng=79.435959&page_type=DESKTOP_WEB_LISTING`;
;

export const SWIGGY_MENU_API_URL = (lat , lon) => `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=`;

export const SELECTED_FOOD_URL = (lat , lon) => `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null&collection=`;
